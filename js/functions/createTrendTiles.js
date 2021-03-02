// Create the Tiles
function createTrendTiles(tilePosition, Trend_Text) {
    let containerTiles = document.getElementById("ContainerTrendTiles");
    let trendTile = document.createElement("div");
    trendTile.className = "content-topics-filter-tile" + " " + "tile" + tilePosition;

        let h1_trendTile = document.createElement("h1");
        let h1_trendTile_text = document.createTextNode(Trend_Text);
        h1_trendTile.className = "font-trends";
        h1_trendTile.appendChild(h1_trendTile_text);

    trendTile.appendChild(h1_trendTile);

containerTiles.appendChild(trendTile);
}