// scene
const scene = new THREE.Scene();

// debug UI
const gui = new dat.GUI();

// light folder


// light
const light = new THREE.AmbientLight( 0xFFFFFF,2 );
scene.add( light );


// canvas
const canvas = document.getElementById('canvas');

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// camera
const fieldOfView = 75;
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(fieldOfView,aspectRatio);
camera.position.z = 3.5;
scene.add(camera);

// controls
const controls = new THREE.OrbitControls(camera,canvas);
controls.enableDamping = true;
controls.maxDistance = 9;
controls.minDistance = 0.5;

// renderer
const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// GLTFLoader
const loader = new THREE.GLTFLoader();

// list of planets
const list = [];

// orbits
const orbits = {
  mercuryOrbit: -0.5,
  venusOrbit: -1,
  earthOrbit: -1.5,
  marsOrbit: -2,
  jupiterOrbit: -2.5,
  saturnOrbit: -3,
  uranusOrbit: -3.5,
  neptuneOrbit: -4,
  plotuOrbit: -4
};

// parameters object
const parameters = {
  // the speed of rotation
  rotationSpeed: 0.01,

  // speed of orbit
  magnitude: 0.001,

};

// speed folder




// --------------- functions ---------------
// 1- main function
function main() {

  // loading the planets into the scene.
  load('../models/sun.glb',0,1.0);
load('../models/mercury.glb',1,0.0001);
load('../models/venus.glb',2,0.0001);
load('../models/earth.glb',3,0.0001);
load('../models/mars.glb',4,0.0001);
load('../models/jupiter.glb',5,0.0002);

loader.load('../models/saturn.glb',function(gltf){
  gltf.scene.scale.set(0.0001,0.0001,0.0001);
  list[6] = gltf.scene;
  scene.add(gltf.scene);
});

load('../models/uranus.glb',7,0.00009);
  load('../models/neptune.glb',8,0.00015);
load('../models/Pluto.glb',9,0.0001);
  // Draw stars
  drawStars();

// waiting for the planets to be loaded.
setTimeout(function(){
  tick();

},5000);
}

// 2- loading function
function load(name,index,scale) {
  loader.load(name,function(gltf) {
    gltf.scene.children[0].scale.set(scale,scale,scale);
    list[index]= gltf.scene.children[0];
    scene.add(gltf.scene.children[0]);
  });
}

// 3- animation function
function tick() {

  // Date object to perform the animation.
  const date = Date.now() * parameters.magnitude;

  // apply rotation
  list[0].rotation.z += parameters.rotationSpeed;
  for(let i = 1;i < 10;i++) {
    list[i].rotation.y += parameters.rotationSpeed;
  }


 

  // Orbit motion
  let orbitDistance = -0.9;
  for(let i = 1;i<10;i++) {
    list[i].position.set(
      Math.cos(date/Math.pow(2,i-1)) * orbitDistance,
      0,
      Math.sin(date/Math.pow(2,i-1)) * orbitDistance);
      orbitDistance -= 0.9;
  }


  // render the scene
  renderer.render(scene,camera);

  // must be called
  controls.update();


  // determine which function to call in the next frame
  window.requestAnimationFrame(tick);
}

function drawStars() {
  // texture
  const textureLoader = new THREE.TextureLoader();
  const particleTexture = textureLoader.load('../images/star.jpg');

  // Geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 700;

  // making random positions
  const positions = new Float32Array(count * 3);
  for(let i = 0;i<positions.length;i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    // Perspective
    sizeAttenuation: true
  });

  // apply textures
  particlesMaterial.map = particleTexture;

  // Points
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
}


// events
// 1- resize event
window.addEventListener('resize',function() {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width/sizes.height;

  // must be called if the aspect ratio has been changed
  camera.updateProjectionMatrix();

  // Update Renderer
  renderer.setSize(sizes.width,sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 2- full-screen event
window.addEventListener('dblclick',function() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }
});

// call the main function
main();
