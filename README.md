# PinkSoldier — realism-effects

Minimal three.js scene: the **Squid Game PinkSoldier** from
[0beqz/realism-effects](https://github.com/0beqz/realism-effects), isolated on a
glossy baseplate, with the original SSGI / TRAA / bloom / LUT pipeline.

The character model is [Squid Game : PinkSoldier](https://sketchfab.com/3d-models/squid-game-pinksoldier-8f6112f88ea743e8a468ac017bb2c0e2)
by Jaeyeon Nam, [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/).
`realism-effects` is MIT, © 0beqz.

Exact recovered settings: [CONFIG.md](./CONFIG.md).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints. Drag to orbit, scroll to zoom.

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this folder to a GitHub repository (do not upload `node_modules/` or `dist/`).
2. In Vercel: **Add New Project** → import that repo.
3. Framework preset: Vite. Build command `npm run build`. Output `dist`.
4. Deploy. The scene loads on `/`.

`vercel.json` is already in the repo.

## Contents

- `vendor/realism-effects/` — library source from the original repo (not the older npm tarball)
- `public/gltf/squid_game.optimized.glb` — original PinkSoldier
- `public/hdr/spree_bank_1k.hdr` — original environment
- `public/lut_v2.3dl` — original LUT
- `public/draco/` — Draco decoder (no CDN)

SSGI uses the README default values (distance 10, steps 20, refineSteps 5,
resolutionScale 1, …). Quality is not reduced.
