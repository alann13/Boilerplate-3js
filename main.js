import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { sizes } from './utils/sizes'
import { Timer } from 'three/addons/misc/Timer.js'
import { sphere } from './world/sphere'
import { ambientLight, directionalLight } from './world/light'
import { camera } from './world/camera'

// Canvas
const canvas = document.querySelector('#theCanvas')

// Debug
const gui = new GUI()

// Scene
const scene = new THREE.Scene()

scene.add(sphere)

// lights
scene.add(ambientLight)
scene.add(directionalLight)

// Camera
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// resize utils
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// animation utils
const timer = new Timer()

const tick = () => {
  // Timer
  timer.update()
  const elapsedTime = timer.getElapsed()

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
