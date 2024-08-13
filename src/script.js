import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import GUI from 'lil-gui'
import gsap from 'gsap'




/**
 * Base
 */
// Debug


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Axis helper
// const axisHelper = new THREE.AxesHelper
// scene.add(axisHelper)

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace

const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

//Fonts
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    font => {
        const textGeometry = new TextGeometry(
            'Three JS is \nawesome!!!',
            {
                font,
                size: 0.5,
                depth: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )

        textGeometry.computeBoundingBox();
        console.log(textGeometry.boundingBox)
        textGeometry.center()


        const text = new THREE.Mesh(textGeometry, material)

        scene.add(text)
    }
)

//Objects
const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
const capsuleGeometry = new THREE.CapsuleGeometry(.2,.4,6,8)
const boxGeometry = new THREE.BoxGeometry(.5,.5,.5)

const positionMultiplier = 30
for (let index = 0; index < 200; index++) {

    //donuts
    const donut = new THREE.Mesh(donutGeometry, material)


    donut.position.x = (Math.random() - 0.5) * positionMultiplier
    donut.position.y = (Math.random() - 0.5) * positionMultiplier
    donut.position.z = (Math.random() - 0.5) * positionMultiplier

    donut.rotation.x = Math.random() * Math.PI

    gsap.to(donut.rotation, { duration: (Math.random() + 14), y: donut.rotation.z + Math.PI * 2, repeat: -1, ease: 'none' })

    //capsules
    const capsule = new THREE.Mesh(capsuleGeometry, material)
    capsule.position.x = (Math.random() - 0.5) * positionMultiplier
    capsule.position.y = (Math.random() - 0.5) * positionMultiplier
    capsule.position.z = (Math.random() - 0.5) * positionMultiplier

    capsule.rotation.x = Math.random() * Math.PI

    gsap.to(capsule.rotation, { duration: (Math.random() + 14), z: donut.rotation.z + Math.PI * 2, repeat: -1, ease: 'none' })

    //box
    const box = new THREE.Mesh(boxGeometry, material)
    box.position.x = (Math.random() - 0.5) * positionMultiplier
    box.position.y = (Math.random() - 0.5) * positionMultiplier
    box.position.z = (Math.random() - 0.5) * positionMultiplier

    box.rotation.x = Math.random() * Math.PI

    gsap.to(box.rotation, { duration: (Math.random() + 14), z: donut.rotation.z + Math.PI * 2, repeat: -1, ease: 'none' })


    scene.add(donut, capsule, box)

}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -2
camera.position.y = 2
camera.position.z = 5

gsap.to(camera.position, {duration: 4, x:3})

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()