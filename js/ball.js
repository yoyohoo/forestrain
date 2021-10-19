/**
 * ball sphere
 * @param {*} ballImg 
 * @returns 
 */
function createBallSphere(ballImg) {
    return new Promise(resolve => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(ballImg, texture => {
            const sphereGeometry = new THREE.SphereGeometry(0.8, 125, 125);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                specular: '#a9fcff',
                emissive: '#006063',
                shininess: 10
            });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(100, 100, 100);
            sphere.castShadow = true;
            sphereMaterial.map = texture;
            sphereMaterial.map.repeat.set(100, 100);
            sphere.name = 'sphere';
            return resolve(sphere);
        })
    })
}

/**
 * ball object
 * @param {*} ballImg 
 * @returns 
 */
function drawBall(ballImg) {
    const textureLoader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(25, 100, 100)
    const material = new THREE.MeshBasicMaterial({
        color: 'steelblue',
        wireframe: false,
        shading: THREE.FlatShading,
        map: textureLoader.load(ballImg),
        wireframeLinewidth: 1
    })
    const ball = new THREE.Mesh(geometry, material);
    ball.position.set(0, 25, 0);
    return ball;
}