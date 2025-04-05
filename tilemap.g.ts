// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000010101010101010101000000000101010101000000000000000000000000020202020202020202000000000202020202000000000000000000000000020202020202020202000000000202020202000001010101010100000000020202020202020202000000000202020202000002020202020200000000020202020202020202000000000202020202000002020202020200000004020202020202020202000000000202020202000002020202020201010101020202020202020202000000000202020202000002020202020202020202`, img`
..............................
..............................
222222222222222222222222222222
.......2......................
.......2......................
....2222......................
..............................
..............................
..............................
222222222....22222............
222222222....22222............
222222222....22222..222222....
222222222....22222..222222....
222222222....22222..222222....
222222222....22222..2222222222
222222222....22222..2222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000080000000000000000000000000000070101010101010101030000000006010100000000000000000200000000020000000000000000000002000000000200000000000000000000020000000002000000000006010101010401010101050000000000020000000002000000000000000000000200000000020000000000000000000002000000000200000000000000000000020000000000000000000000000000000000000000000000000000000901010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . 2 2 2 
. . . . . . . . 2 . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 . . . . 2 . . . . . . . 
. . . 2 . . . . 2 . . . . . . . 
. . . 2 . . . . 2 . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.dungeon.chestClosed,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "Dirt texture":
            case "tile2":return tile2;
            case "scrapped stone texture":
            case "tile3":return tile3;
            case "myTile0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
