/**
 * rain
 * @param {*} rainImg 
 */
function createRain(rainImg) {
    var rains = [],
        count = 1000,
        region = 5000;
    var texture = new THREE.TextureLoader().load(rainImg);
    for (let i = 0; i < count; i++) {
        var spriteMaterial = new THREE.SpriteMaterial({
            // color: 0xff00ff,
            rotation: 0, // Math.PI / 4,
            map: texture
        });
        var sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(10, 10, 1);

        var randX = Math.random() - .5;
        var randY = Math.random() - .5;
        var randZ = Math.random() - .5;
        sprite.position.set(randX * region, randY * region, randZ * region);
        rains.push(sprite);
    }
    return rains;
}