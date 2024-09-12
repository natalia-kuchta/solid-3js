import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const w = window.innerWidth;
const h =window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);


const fov=75;
const aspect= w/h;
const near= 0.1;
const far= 10;

const camera= new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene=new THREE.Scene()

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geometry= new THREE.IcosahedronGeometry(1.0,2);

const material= new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true

});

const mesh= new THREE.Mesh(geometry,material);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe:true
});

const wireMesh = new THREE.Mesh(geometry,wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight= new THREE.HemisphereLight("#00FFFF","#DF00FF", 2);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

function animate(t= 0){
    requestAnimationFrame(animate);
    //mesh.rotation.y = t * 0.0001;
    //mesh.rotation.x = t * 0.0001;
    renderer.render(scene,camera);
    controls.update();
}
animate()
