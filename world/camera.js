import * as THREE from 'three'
import { sizes } from '../utils/sizes'

export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
