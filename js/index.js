window.onload = function() {

    var scene, camera, renderer,
        controls, beginToRain, manualRender;

    function init() {
        scene = new THREE.Scene();

        const width = window.innerWidth;
        const height = window.innerHeight;
        camera = new THREE.PerspectiveCamera(90, width / height, .1, 10000);
        camera.position.set(1000, 500, 1000);
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        document.body.appendChild(renderer.domElement);

        /**
         * sky box
         */
        scene.background = new THREE.CubeTextureLoader()
            .setPath('./img/skybox/')
            .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);


        /**
         * grass ground
         */
        const groundImg = './img/grass.jpg';
        createPlaneGroundMaterial(groundImg).then(ground => {
            scene.add(ground);
        });

        /**
         * ball
         */
        // scene.add(drawBall(groundImg))

        /**
         * trees of the forest
         */
        const treeImg = './img/tree2.png';
        const trees = createForest(treeImg);
        scene.add(...trees);

        /**
         * add rain
         */
        const rainImg = './img/rain.png';
        const rains = createRain(rainImg);
        scene.add(...rains);
        setTimeout(() => { beginToRain = true }, 3000);

        /**
         * drop of rain
         */
        const rainGroup = new THREE.Group();
        rainGroup.add(...rains);
        scene.add(rainGroup);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        manualRender = () => {
            controls.update();
            rainGroup.children.forEach(rain => {
                if (beginToRain) {
                    rain.material.opacity = 1;
                    rain.position.y -= 10;
                    let y = rain.position.y;
                    rain.position.y = y > 0 ? y : 1000;
                } else {
                    rain.material.opacity = 0;
                }
            });
            renderer.render(scene, camera);
            requestAnimationFrame(manualRender);
        };
        window.onresize = function(r) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
        };
    }

    init();
    manualRender();
}