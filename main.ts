namespace SpriteKind {
    export const dart = SpriteKind.create()
}
controller.combos.attachCombo("lr", function () {
    if (true) {
    	
    }
    info.player2.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
function changelevel (levelnum: number) {
    if (levelnum == 0) {
        tiles.setTilemap(tilemap`level6`)
    } else if (levelnum == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (levelnum == 2) {
        tiles.setTilemap(tilemap`level7`)
    } else if (levelnum == 3) {
        tiles.setTilemap(tilemap`level5`)
    }
    tiles.placeOnRandomTile(mia, sprites.dungeon.floorLightMoss)
}
function secret_ending () {
    scene.setBackgroundImage(assets.image`myImage3`)
}
info.onLifeZero(function () {
    mia.startEffect(effects.halo)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    currentlevel += 1
    changelevel(currentlevel)
    scene.cameraShake(2, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.doorOpenNorth)
    tiles.setWallAt(tiles.getTileLocation(9, 4), false)
})
let currentlevel = 0
let mia: Sprite = null
mia = sprites.create(assets.image`myImage`, SpriteKind.Player)
mia.setBounceOnWall(true)
controller.moveSprite(mia, 60, 60)
currentlevel = 0
changelevel(0)
scene.cameraFollowSprite(mia)
info.setLife(1)
effects.blizzard.startScreenEffect()
let derek = darts.create(assets.image`myImage2`, SpriteKind.Player)
storyboard.loaderBootSequence.register()
forever(function () {
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("C5 A B G A F G E ", 120)
})
