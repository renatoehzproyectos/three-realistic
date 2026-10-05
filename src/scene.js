// @ts-nocheck
/**
 * Isolated PinkSoldier scene from 0beqz/realism-effects example/main.js.
 * Lighting, renderer, shadows, camera, post-processing and the GLB come from
 * the original demo. SSGI sampling is tuned for the supplied daylight reference.
 */
import * as POSTPROCESSING from "postprocessing"
import { SSGIEffect, TRAAEffect, VelocityDepthNormalPass, SharpnessEffect } from "realism-effects"
import * as THREE from "three"
import {
	Box3,
	Clock,
	Color,
	DirectionalLight,
	EquirectangularReflectionMapping,
	Vector3
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
import { fromHalfFloat, toHalfFloat } from "three/src/extras/DataUtils.js"

/** Daylight reference: stable indirect light and material reflections. */
export const SSGI_OPTIONS = {
	distance: 10,
	thickness: 10,
	denoiseIterations: 2,
	denoiseKernel: 2,
	denoiseDiffuse: 10,
	denoiseSpecular: 10,
	depthPhi: 2,
	normalPhi: 50,
	roughnessPhi: 20,
	specularPhi: 20,
	envBlur: 0.5,
	importanceSampling: true,
	steps: 32,
	refineSteps: 8,
	resolutionScale: 1,
	missedRays: false
}

const toRad = Math.PI / 180

export function startPinkSoldier({ canvas, controlsEl, loadingEl }) {
	const scene = new THREE.Scene()
	scene.matrixWorldAutoUpdate = false

	const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 250)
	scene.add(camera)

	const renderer = new THREE.WebGLRenderer({
		canvas,
		powerPreference: "high-performance",
		premultipliedAlpha: false,
		stencil: false,
		antialias: false,
		alpha: false,
		preserveDrawingBuffer: true
	})
	renderer.autoClear = false
	renderer.setSize(window.innerWidth, window.innerHeight)

	const composer = new POSTPROCESSING.EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType })

	const controls = new OrbitControls(camera, controlsEl)
	controls.enableDamping = true

	// Frontal reference framing; keep the original orbit interaction.
	const cameraY = 8.75
	camera.position.set(0, cameraY, 25 * Math.max(1, 1 / camera.aspect))
	controls.target.set(0, cameraY, 0)
	controls.maxPolarAngle = Math.PI / 2
	controls.minDistance = 5

	const lightParams = {
		yaw: 55,
		pitch: 48,
		intensity: 1.5
	}

	const light = new DirectionalLight(0xffffff, lightParams.intensity)
	light.castShadow = true
	light.shadow.mapSize.width = 4096
	light.shadow.mapSize.height = 4096
	light.shadow.camera.near = 1
	light.shadow.camera.far = 180
	light.shadow.bias = -0.0001
	light.shadow.normalBias = 0.025
	light.shadow.radius = 2
	const s = 24
	light.shadow.camera.left = -s
	light.shadow.camera.bottom = -s
	light.shadow.camera.right = s
	light.shadow.camera.top = s
	light.updateMatrixWorld()
	// Direct sunlight supplies the reference's directional cast shadows.
	scene.add(light)
	scene.add(light.target)

	renderer.shadowMap.type = THREE.PCFSoftShadowMap
	renderer.shadowMap.enabled = true
	renderer.shadowMap.autoUpdate = true
	renderer.shadowMap.needsUpdate = true

	if (scene.getObjectByProperty("isDirectionalLight", true)) {
		const renderPass = new POSTPROCESSING.RenderPass(scene, camera)
		composer.addPass(renderPass)
	}

	const refreshLighting = () => {
		light.position.x = Math.sin(lightParams.yaw * toRad) * Math.cos(lightParams.pitch * toRad)
		light.position.y = Math.sin(lightParams.pitch * toRad)
		light.position.z = Math.cos(lightParams.yaw * toRad) * Math.cos(lightParams.pitch * toRad)
		light.position.normalize().multiplyScalar(75)
		light.target.position.set(0, 6, 0)
		light.target.updateMatrixWorld()
		light.updateMatrixWorld()
		renderer.shadowMap.needsUpdate = true
	}

	refreshLighting()

	const skyBlueColor = new Color(0x90b4f5)
	scene.background = skyBlueColor

	const rgbeLoader = new RGBELoader()
	const gltflLoader = new GLTFLoader()
	const draco = new DRACOLoader()
	draco.setDecoderConfig({ type: "js" })
	draco.setDecoderPath("/draco/")
	gltflLoader.setDRACOLoader(draco)

	const clock = new Clock()
	let raf = 0
	let composerReady = false
	let lastScene = null
	let ssgiEffect = null
	let disposed = false

	const resize = () => {
		if (disposed) return
		const previousAspect = camera.aspect
		camera.aspect = window.innerWidth / window.innerHeight
		const previousFit = Math.max(1, 1 / previousAspect)
		const nextFit = Math.max(1, 1 / camera.aspect)
		camera.position.sub(controls.target).multiplyScalar(nextFit / previousFit).add(controls.target)
		camera.updateProjectionMatrix()
		const dpr = window.devicePixelRatio
		renderer.setPixelRatio(Math.min(2, dpr))
		renderer.setSize(window.innerWidth, window.innerHeight)
		composer.setSize(window.innerWidth, window.innerHeight)
	}

	const loop = () => {
		if (disposed) return
		const dt = clock.getDelta()
		if (controls.enableDamping) controls.dampingFactor = 0.075 * 120 * Math.max(1 / 1000, dt)
		controls.update()
		camera.updateMatrixWorld()
		if (lastScene) lastScene.updateMatrixWorld()
		scene.updateMatrixWorld()
		if (composerReady) composer.render()
		else {
			renderer.clear()
			renderer.render(scene, camera)
		}
		raf = window.requestAnimationFrame(loop)
	}

	const convertFloat32TextureToHalfFloat = texture => {
		texture.type = THREE.HalfFloatType
		const lutData = new Uint16Array(texture.image.data.length)
		const lutF32Data = texture.image.data
		for (let i = 0; i < lutData.length; i++) {
			lutData[i] = toHalfFloat(lutF32Data[i])
		}
		texture.image.data = lutData
	}

	const setupAsset = asset => {
		if (lastScene) {
			lastScene.removeFromParent()
			lastScene.traverse(c => {
				if (c.isMesh) {
					c.geometry.dispose()
					c.material.dispose()
				}
			})
		}

		asset.scene.traverse(c => {
			if (c.isMesh) {
				c.castShadow = c.receiveShadow = true
				c.material.depthWrite = true
				c.material.envMapIntensity = 0.65
			}
			c.frustumCulled = false
		})

		const bb = new Box3()
		bb.setFromObject(asset.scene)
		const height = bb.max.y - bb.min.y
		const width = Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z)
		const targetHeight = 15
		const targetWidth = 45
		const scaleWidth = targetWidth / width
		const scaleHeight = targetHeight / height
		asset.scene.scale.multiplyScalar(Math.min(scaleWidth, scaleHeight))
		asset.scene.updateMatrixWorld()
		bb.setFromObject(asset.scene)
		const center = new Vector3()
		bb.getCenter(center)
		center.y = bb.min.y
		asset.scene.position.sub(center)
		scene.add(asset.scene)
		scene.updateMatrixWorld()
		lastScene = asset.scene
		if (ssgiEffect) ssgiEffect.reset()
		requestAnimationFrame(refreshLighting)
	}

	const addBaseplate = () => {
		// Preserve the existing ground; suppress the artificial mirror finish.
		const ground = new THREE.Mesh(
			new THREE.PlaneGeometry(400, 400),
			new THREE.MeshStandardMaterial({
				color: new Color(0.48, 0.48, 0.48),
				metalness: 0,
				roughness: 0.85
			})
		)
		ground.rotation.x = -Math.PI / 2
		ground.receiveShadow = true
		ground.name = "baseplate"
		ground.updateMatrixWorld()
		scene.add(ground)
		scene.updateMatrixWorld()
	}

	const initScene = async () => {
		renderer.toneMapping = THREE.ACESFilmicToneMapping
		renderer.toneMappingExposure = 1.0

		const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera)
		composer.addPass(velocityDepthNormalPass)

		const traaEffect = new TRAAEffect(scene, camera, velocityDepthNormalPass, {
			fullAccumulate: true
		})

		ssgiEffect = new SSGIEffect(composer, scene, camera, {
			...SSGI_OPTIONS,
			velocityDepthNormalPass
		})

		const bloomEffect = new POSTPROCESSING.BloomEffect({
			intensity: 0.12,
			mipmapBlur: true,
			luminanceSmoothing: 0.5,
			luminanceThreshold: 1.25,
			kernelSize: POSTPROCESSING.KernelSize.MEDIUM
		})

		const vignetteEffect = new POSTPROCESSING.VignetteEffect({
			darkness: 0.8,
			offset: 0.3
		})

		const lutTexture = await new POSTPROCESSING.LUT3dlLoader().load("/lut_v2.3dl")
		if (disposed) return
		convertFloat32TextureToHalfFloat(lutTexture)
		const lutEffect = new POSTPROCESSING.LUT3DEffect(lutTexture)
		lutEffect.blendMode.opacity.value = 0.35
		const toneMappingEffect = new POSTPROCESSING.ToneMappingEffect()
		toneMappingEffect.mode = POSTPROCESSING.ToneMappingMode.ACES_FILMIC
		const sharpnessEffect = new SharpnessEffect({ sharpness: 0.75 })

		composer.addPass(new POSTPROCESSING.EffectPass(camera, ssgiEffect, toneMappingEffect))
		composer.addPass(new POSTPROCESSING.EffectPass(camera, traaEffect))
		composer.addPass(new POSTPROCESSING.EffectPass(camera, sharpnessEffect, vignetteEffect))
		composer.addPass(new POSTPROCESSING.EffectPass(camera, bloomEffect, lutEffect))

		composerReady = true
		resize()
	}

	const envPromise = new Promise((resolve, reject) => {
		rgbeLoader.load(
			"/hdr/spree_bank_1k.hdr",
			envMap => {
				scene.environment?.dispose()
				// Reduce overbright city HDR fill while preserving the original asset.
				const data = envMap.image.data
				for (let i = 0; i < data.length; i += 4) {
					for (let channel = 0; channel < 3; channel++) {
						const value = envMap.type === THREE.HalfFloatType ? fromHalfFloat(data[i + channel]) : data[i + channel]
						data[i + channel] = envMap.type === THREE.HalfFloatType ? toHalfFloat(value * 0.35) : value * 0.35
					}
				}
				envMap.needsUpdate = true
				envMap.mapping = EquirectangularReflectionMapping
				scene.environment = envMap
				resolve(envMap)
			},
			undefined,
			reject
		)
	})

	const modelPromise = new Promise((resolve, reject) => {
		gltflLoader.load("/gltf/squid_game.optimized.glb", resolve, undefined, reject)
	})

	const manager = THREE.DefaultLoadingManager
	const onProgress = (_url, loaded, total) => {
		if (!loadingEl || disposed) return
		const denom = total || 1
		const progress = Math.round((loaded / denom) * 100)
		loadingEl.textContent = progress + "%"
	}
	manager.onProgress = onProgress

	Promise.all([envPromise, modelPromise])
		.then(async ([, asset]) => {
			if (disposed) return
			addBaseplate()
			setupAsset(asset)
			await initScene()
			if (disposed) return
			if (loadingEl) {
				loadingEl.textContent = "100%"
				setTimeout(() => {
					loadingEl.classList.add("is-done")
					loadingEl.textContent = ""
				}, 150)
			}
		})
		.catch(err => {
			console.error(err)
			if (loadingEl) loadingEl.textContent = "Error"
		})

	loop()
	window.addEventListener("resize", resize)

	return () => {
		disposed = true
		window.removeEventListener("resize", resize)
		cancelAnimationFrame(raf)
		controls.dispose()
		composer.dispose()
		renderer.dispose()
		draco.dispose()
		scene.environment?.dispose()
		scene.traverse(c => {
			if (c.isMesh) {
				c.geometry?.dispose()
				c.material?.dispose?.()
			}
		})
	}
}
