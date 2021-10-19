/**
 * forest
 * @param {*} treeImg 
 * @returns 
 */
function createForest(treeImg) {
    var trees = [],
        count = 100,
        region = 5000;
    var texture = new THREE.TextureLoader().load(treeImg);
    for (let i = 0; i < count; i++) {
        var spriteMaterial = new THREE.SpriteMaterial({
            // color: 0xff00ff,
            rotation: 0, // Math.PI / 4,
            map: texture
        });
        var sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(100, 120, 1);

        var randX = Math.random() - .5;
        var randZ = Math.random() - .5;
        sprite.position.set(randX * region, 60, randZ * region);
        trees.push(sprite);
    }
    return trees;
}