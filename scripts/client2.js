// Art 109 Three.js Demo Site
// client2.js
// A three.js scene which loads a custom GLTF model and implements Orbit controls

// Import required source code
// Import three.js core
import * as THREE from "../build/three.module.js";

// Import add-ons for GLTF models and orbit controls
import { OrbitControls } from "../src/OrbitControls.js";
import { GLTFLoader } from "../src/GLTFLoader.js";

const vertex = new THREE.Vector3();
const color = new THREE.Color();

//Identify div in HTML to place scene
var container = document.getElementById("space");

//Create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xdfdfdf);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth*1, window.innerHeight*0.9);
//renderer.setSize(400, 800);

// Add scene to gltf.html
container.appendChild(renderer.domElement);

// Material to be added to model
var newMaterial = new THREE.MeshStandardMaterial({ color: 0x2E5939 });

// Variable for GLTF data
var mesh;

// Load GLTF model, add material, and add it to the scene
const loader = new GLTFLoader().load(
  "../../assets/cabin.glb",
   // comment this line out and un comment the line below to swithc models
   //"./assets/gourd_web.glb", //<-- photogrammetery model
   function(gltf) {
     // Scan loaded model for mesh and apply defined material if mesh is present
     gltf.scene.traverse(function(child) {
       if (child.isMesh) {
         //child.material = newMaterial;
       }
     });
     // set position and scale
     mesh = gltf.scene;
     mesh.position.set(0, 0, 0);
     mesh.rotation.set(0.35, 0.25, 0);
     mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
     // Add model to scene
     scene.add(mesh);
   },
   undefined,
   function(error) {
     console.error(error);
   }
 );

 const loader2 = new GLTFLoader().load(
   "../../assets/plane.glb",
   // comment this line out and un comment the line below to swithc models
   //"./assets/gourd_web.glb", //<-- photogrammetery model
   function(gltf) {
     // Scan loaded model for mesh and apply defined material if mesh is present
     gltf.scene.traverse(function(child) {
       if (child.isMesh) {
         //child.material = newMaterial;
       }
     });
     // set position and scale
     mesh = gltf.scene;
     mesh.position.set(0, 0, 0);
     mesh.rotation.set(0.35, 0.25, 0);
     mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
     // Add model to scene
     scene.add(mesh);
   },
   undefined,
   function(error) {
     console.error(error);
   }
 );

 const loader3 = new GLTFLoader().load(
   "../../assets/snowman.glb",
   // comment this line out and un comment the line below to swithc models
   //"./assets/gourd_web.glb", //<-- photogrammetery model
   function(gltf) {
     // Scan loaded model for mesh and apply defined material if mesh is present
     gltf.scene.traverse(function(child) {
       if (child.isMesh) {
         //child.material = newMaterial;
       }
     });
     // set position and scale
     mesh = gltf.scene;
     mesh.position.set(0, 0, 0);
     mesh.rotation.set(0.35, 0.25, 0);
     mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
     // Add model to scene
     scene.add(mesh);
   },
   undefined,
   function(error) {
     console.error(error);
   }
 );

 const loader4 = new GLTFLoader().load(
   "../../assets/tree.glb",
   // comment this line out and un comment the line below to swithc models
   //"./assets/gourd_web.glb", //<-- photogrammetery model
   function(gltf) {
     // Scan loaded model for mesh and apply defined material if mesh is present
     gltf.scene.traverse(function(child) {
       if (child.isMesh) {
         //child.material = newMaterial;
       }
     });
     // set position and scale
     mesh = gltf.scene;
     mesh.position.set(0, 0, 0);
     mesh.rotation.set(0.35, 0.25, 0);
     mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
     // Add model to scene
     scene.add(mesh);
   },
   undefined,
   function(error) {
     console.error(error);
   }
 );

 const loader5 = new GLTFLoader().load(
   "../../assets/tree2.glb",
   // comment this line out and un comment the line below to swithc models
  //"./assets/gourd_web.glb", //<-- photogrammetery model

  function(gltf) {
    // Scan loaded model for mesh and apply defined material if mesh is present
    gltf.scene.traverse(function(child) {
      if (child.isMesh) {
        //child.material = newMaterial;
      }
    });
    // set position and scale
    mesh = gltf.scene;
    mesh.position.set(1, 1, -3);
    mesh.rotation.set(0.35, 0.25, 0);
    mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
    // Add model to scene
    scene.add(mesh);
  },
  undefined,
  function(error) {
    console.error(error);
  }
);

const loader6 = new GLTFLoader().load(
  "../../assets/snowballs.glb",
  // comment this line out and un comment the line below to swithc models
  //"./assets/gourd_web.glb", //<-- photogrammetery model
  
  function(gltf) {
    // Scan loaded model for mesh and apply defined material if mesh is present
    gltf.scene.traverse(function(child) {
      if (child.isMesh) {
        //child.material = newMaterial;
      }
    });
    // set position and scale
    mesh = gltf.scene;
    mesh.position.set(0, 0, 0);
    mesh.rotation.set(0.35, 0.25, 0);
    mesh.scale.set(0.5, 0.5, 0.5); // <-- change this to (1, 1, 1) for photogrammetery model
    // Add model to scene
    scene.add(mesh);
  },
  undefined,
  function(error) {
    console.error(error);
  }
);

// Add Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance = 6;
controls.target.set(0, 0, -0.2);
controls.update();

// Position our camera so we can see the shape
camera.position.z = 4.5;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xBDE0FE, 0.65);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xBDE0FE, 0.65);
scene.add(ambientLight);

// Generate the ground
   // let floorGeometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
   // floorGeometry.rotateX(-Math.PI / 2);
   //
   // // Vertex displacement pattern for ground
   // let position = floorGeometry.attributes.position;
   //
   // for (let i = 0, l = position.count; i < l; i++) {
   //     vertex.fromBufferAttribute(position, i);
   //
   //     vertex.x += Math.random() * 20 - 10;
   //     vertex.y += Math.random() * 2;
   //     vertex.z += Math.random() * 20 - 10;
   //
   //     position.setXYZ(i, vertex.x, vertex.y, vertex.z);
   // }
   //
   // floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices
   //
   // position = floorGeometry.attributes.position;
   // const colorsFloor = [];
   //
   // for (let i = 0, l = position.count; i < l; i++) {
   //     // color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
   //     color.setHSL(0xffffff, 0xffffff, 0xffffff);
   //     colorsFloor.push(color.r, color.g, color.b);
   // }
   //
   // floorGeometry.setAttribute(
   //     "color",
   //     new THREE.Float32BufferAttribute(colorsFloor, 3)
   // );
   //
   // const floorMaterial = new THREE.MeshBasicMaterial({
   //     vertexColors: true
   // });
   //
   // const floor = new THREE.Mesh(floorGeometry, floorMaterial);
   //
   // // Insert completed floor into the scene
   // scene.add(floor);

// Define and call the render loop
// Define
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
// Call
render();

// Respond to Window Resizing
window.addEventListener("resize", onWindowResize);

// Window resizing function
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  render();
}
