
# Solid Geometry Project in Three.js
This project demonstrates how to render a solid 3D object using Three.js and provides user interaction via the OrbitControls module for camera movement. The project uses basic Three.js functionalities such as mesh geometry, materials, lighting, and rendering.

## Features

Renders an Icosahedron (a polyhedron with 20 faces) using Three.js.

Includes OrbitControls to allow the user to interact with the scene (rotate, zoom, pan).

Uses a combination of MeshStandardMaterial and MeshBasicMaterial to create a solid geometry with a wireframe overlay.

Scene includes ambient lighting with a HemisphereLight and directional lighting via DirectionalLight.

### install

```
# three.js
npm install --save three

# vite
npm install --save-dev vite
```
### start
```
npx vite
```
or
```
Clone my repo.
git@github.com:natalia-kuchta/solid-3js.git
```

### To kick things off...

You gotta have your trusty renderer, a camera that's ready for its close-up, and of course, 
a scene that’s set for all the action! Think of them as the three amigos of your Three.js adventure.


1. Three.js Renderer: Creates the rendering context and sets the canvas to fill the window.

```js
const w = window.innerWidth;
const h =window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);
```

2. Camera: A perspective camera is used to view the scene.


```js
const fov=75;
const aspect= w/h;
const near= 0.1;
const far= 10;

const camera= new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;
```

3. Scene: A container for all objects, lights, and cameras in the 3D world.

```js
const scene=new THREE.Scene()
```
### Take a deeper look into my code...

based on:https://github.com/bobbyroe/getting-started-with-threejs/tree/main

## Final result



https://github.com/user-attachments/assets/b2abcede-541a-4bf2-b431-5de03668d34b

