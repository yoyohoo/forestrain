/**
 * grass ground plane
 * @param {*} groundImg 
 * @returns 
 */
function createPlaneGroundMaterial(groundImg) {
    return new Promise(resolve => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(groundImg, texture => {
            const cubeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
            })
            cubeMaterial.map.wrapS = THREE.RepeatWrapping;
            cubeMaterial.map.wrapT = THREE.RepeatWrapping;
            cubeMaterial.map.repeat.set(100, 100);

            const planeGeometry = new THREE.PlaneGeometry(10000, 10000);
            const planeGround = new THREE.Mesh(planeGeometry, cubeMaterial);

            planeGround.rotation.x = -Math.PI / 2;
            planeGround.rotation.y = 0;
            planeGround.rotation.z = 0;
            return resolve(planeGround);
        })
    })
}