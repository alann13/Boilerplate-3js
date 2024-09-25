import * as THREE from 'three'

export const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)

export const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight.position.set(3, 2, -8)
