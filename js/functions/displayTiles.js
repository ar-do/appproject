function displayTiles() {
    let array_with_text = ["Burkaverbot", "Corona", "GameStop", "Dogecoin"];
    let tile_pos = 1;
        for(i = 0;i<4;i++) {
            createTrendTiles(tile_pos, array_with_text[i]);
            tile_pos++;
        }
}