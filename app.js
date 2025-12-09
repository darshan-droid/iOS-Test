// main.js
import { MindARThree } from "./libs/three.js";

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", async () => {
    startButton.style.display = "none";

    const mindarThree = new MindARThree({
        container: document.body,
        imageTargetSrc: "./targets/myTarget.mind"  // your compiled image target file
    });

    const { renderer, scene, camera } = mindarThree;

    // Simple lighting
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(light);

    // Anchor for first image target (index 0)
    const anchor = mindarThree.addAnchor(0);

    // Add a simple cube to the anchor to start
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    anchor.group.add(cube);

    // (Optional) React to target found/lost
    anchor.onTargetFound = () => {
        console.log("Target found!");
    };
    anchor.onTargetLost = () => {
        console.log("Target lost!");
    };

    await mindarThree.start();

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
});
