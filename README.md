<h1 align="center">🔤 3D Text Playground</h1>

<p align="center">Beveled 3D typography floating in a field of matcap-shaded donuts, boxes, and cones — my first real dive into geometries, materials, and textures in Three.js.</p>

<p align="center">
  <a href="https://3d-text-threejs-etb811ac.netlify.app/"><img src="https://img.shields.io/badge/▶%20Live%20Demo-Open-FF4D00?style=for-the-badge" alt="Live Demo"></a>
</p>

<p align="center">
  <img src=".github/preview.gif" alt="3D Text preview" width="640">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white">
  <img src="https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white">
</p>

## About

Diving into the world of 3D graphics with Three.js! This project loads a typeface font, extrudes it into beveled `TextGeometry`, and centers it in the scene. Hundreds of randomly placed, rotated, and scaled meshes share a single **matcap material** for a slick lit look at almost no performance cost.

- ✍️ Font loading + beveled 3D text geometry
- 🍩 Hundreds of randomized meshes sharing one material
- 🎨 Matcap textures for cheap, great-looking shading
- 🖱️ Orbit controls to fly around the scene

## Tech

Three.js · WebGL · `TextGeometry` · matcap materials · GSAP · Vite

## Run locally

```bash
npm install   # first time only
npm run dev   # local server at localhost:8080
npm run build # production build in dist/
```

---

<p align="center"><i>Part of my Three.js journey · <a href="https://estebanacuna.dev">estebanacuna.dev</a></i></p>
