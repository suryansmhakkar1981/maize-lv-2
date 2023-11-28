// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010104020302030303020302030303030101030203020302030203020302020301010302030202020302030203020203010103020303030303020302030302020101030203020202020203020302020301010302030303030303030203020203010103020302020202020202030202020101030203030303030303030302020301010302030203030202020203030203010103020302020303030302020302030101030203020302020203030203020201010302030203030303030302030203010102020202020202020202020202030501010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . 2 . 2 . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . . . 2 . 2 . . . 2 2 
2 . 2 . 2 2 2 2 2 . 2 . 2 . . 2 
2 . 2 . . . . . . . 2 . 2 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . 2 . . 2 2 2 2 . . . . 2 
2 . 2 . 2 2 . . . . 2 2 . 2 . 2 
2 . 2 . 2 . 2 2 2 . . 2 . 2 2 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
