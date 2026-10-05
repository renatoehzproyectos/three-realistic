# Configuration recovery from `0beqz/realism-effects` (main, commit 061daea)

Values below are taken from `example/main.js`, `src/ssgi/SSGIOptions.js`,
`src/traa/TRAAEffect.js`, `src/motion-blur/MotionBlurEffect.js` and
`src/ao/AOEffect.js`. Anything not found is marked **UNKNOWN**.

## SSGI (user-mandated — README defaults, applied exactly)

```js
{
  distance: 10,
  thickness: 10,
  denoiseIterations: 1,
  denoiseKernel: 2,
  denoiseDiffuse: 10,
  denoiseSpecular: 10,
  depthPhi: 2,
  normalPhi: 50,
  roughnessPhi: 1,
  specularPhi: 1,
  envBlur: 0.5,
  importanceSampling: true,
  steps: 20,
  refineSteps: 5,
  resolutionScale: 1,
  missedRays: false
}
```

Note: `example/main.js` uses a *different* tuned set (distance 5.98, thickness
2.83, denoiseKernel 3, …). Those were **not** used, per the spec.

SSGI constructor extra fields not in the mandated object, recovered from
`src/ssgi/SSGIOptions.js` `defaultSSGIOptions`:

| key | value | source |
|---|---|---|
| mode | `"ssgi"` | SSGIOptions.js |
| radius | `3` | SSGIOptions.js |
| phi | `0.5` | SSGIOptions.js |
| lumaPhi | `5` | SSGIOptions.js |

## Effects used by the original squid-game scene (`example/main.js`)

| Effect | Used in original squid-game path? | Config |
|---|---|---|
| SSGIEffect | yes | see above |
| VelocityDepthNormalPass | yes | `new VelocityDepthNormalPass(scene, camera)` |
| TRAAEffect | yes | `{ fullAccumulate: true }` plus TRAAEffect internals: `maxBlend: 0.9`, `neighborhoodClamp: true`, `neighborhoodClampIntensity: 1`, `neighborhoodClampRadius: 1`, `logTransform: true`, `confidencePower: 4` (`src/traa/TRAAEffect.js`) |
| ToneMappingEffect | yes | `ToneMappingMode.ACES_FILMIC` |
| SharpnessEffect | yes | `{ sharpness: 0.75 }` |
| VignetteEffect | yes | `{ darkness: 0.8, offset: 0.3 }` |
| BloomEffect | yes | `{ intensity: 1, mipmapBlur: true, luminanceSmoothing: 0.5, luminanceThreshold: 0.75, kernelSize: MEDIUM }` |
| LUT3DEffect | yes | `lut_v2.3dl` converted to HalfFloat |
| SSREffect | **no** — commented out | not added |
| MotionBlurEffect | **no** — commented out (`intensity: 1` would have been the default) | not added |
| HBAOEffect / SSAO | **no** — only on `?ao` demo | not added |
| LensDistortionEffect | constructed (`aberration: 1`) but **never added** to composer | not added |
| GradualBackgroundEffect | commented out | not added |
| SparkleEffect | commented out | not added |
| RenderPass | only if a DirectionalLight is in the scene. Original has `// scene.add(light)` so **no** RenderPass | not added |

`setAA()` in the original returns immediately (TRAA is always the path used).

## Renderer (`example/main.js`)

| key | value |
|---|---|
| API | WebGLRenderer (not WebGPU) |
| powerPreference | `"high-performance"` |
| premultipliedAlpha | `false` |
| stencil | `false` |
| antialias | `false` |
| alpha | `false` |
| preserveDrawingBuffer | `true` |
| autoClear | `false` |
| shadowMap.enabled | `true` |
| shadowMap.autoUpdate | `false` |
| toneMapping | `ACESFilmicToneMapping` |
| toneMappingExposure | `1.5` |
| pixel ratio | `Math.min(2, devicePixelRatio)` |
| composer frameBufferType | `HalfFloatType` |
| outputColorSpace | **UNKNOWN** (not set; three r156 default `SRGBColorSpace`) |
| shadow map type | **UNKNOWN** (not set; three default `PCFShadowMap`) |

## Light / shadows (constructed in original, **not added to the scene**)

`example/main.js` builds a DirectionalLight and an 8k shadow map, then comments
out `scene.add(light)`. This demo keeps that: the objects exist, they are **not**
in the scene. Lighting is IBL + SSGI.

| key | value |
|---|---|
| color | `0xffffff` |
| intensity | `2.5` |
| yaw / pitch | `55` / `27` (degrees) |
| position | unit vector from yaw/pitch × `75` |
| castShadow | `true` |
| mapSize | `8192 × 8192` |
| shadow.camera.near / far | `50` / `500` |
| shadow.bias | `-0.0001` |
| shadow.camera left/right/top/bottom | `±100` |
| shadow.normalBias | **UNKNOWN** (not set) |

## Environment

| key | value |
|---|---|
| HDR | `hdr/spree_bank_1k.hdr` |
| mapping | `EquirectangularReflectionMapping` |
| scene.background | `0x90b4f5` |
| GroundProjectedSkybox | constructed in original (`radius 100`, `height 20`, `scale 100`) then **not added** (`// scene.add(envMesh)`) — same here |
| env intensity / envMapIntensity | **UNKNOWN** (not set) |
| day/night / atmosphere | none |

## Camera

| key | value |
|---|---|
| type | PerspectiveCamera |
| fov | `40` |
| near | `0.01` |
| far | `250` |
| original position | `[0, 8.75, 25]` |
| original target | `[0, 8.75, 0]` |
| maxPolarAngle | `π / 2` |
| minDistance | `5` |
| enableDamping | `true` |
| dampingFactor | `0.075 * 120 * max(1/1000, dt)` |

This build offsets the default orbit to `position [-10.6, 7.4, 18.8]`,
`target [0, 5.4, 0]` so the PinkSoldier fill matches the published capture.
FOV / near / far are unchanged.

## Model

`public/gltf/squid_game.optimized.glb` — Sketchfab “Squid Game : PinkSoldier”
by Jaeyeon Nam, CC-BY-4.0, Draco + WebP. Materials/textures untouched.

Original `setupAsset` scale: fit bounding box to height `15` / width `45`.
All meshes `castShadow = receiveShadow = true`, `frustumCulled = false`.

## Baseplate

Original builds `PlaneGeometry(100, 100)` + `MeshStandardMaterial({ metalness: 0, roughness: 0 })`,
`rotation.x = -π/2`, `receiveShadow = true`, then comments out `scene.add(ground)`.

This build **adds** the plate (requested) and enlarges it to `400 × 400` so
edges stay out of frame. Material is the original one.

## Color / LUT

- LUT: `lut_v2.3dl` (float32 → half float, as original)
- `scene.matrixWorldAutoUpdate = false` (as original)
