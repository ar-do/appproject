// Specs
let size = "middle"; //middle or small
let img_src = "img/eso1907a.jpg";
let username = "armin.doroci";
let defaultTitle = "Das ist ein Titel der von JS generiert wird";
let defaultText = "onumy eiero bum. Stet clitapsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
let defaultBottom = "100 Kommentare 100 Likes";


// Get Client IP


// Create Cookie for Login Session
//document.cookie = "session=" + "username:" + test_username + "," + "password:" + test_password + "," + "timestamp:" + ";" + "expires=Fr, 30 April 2021 00:00:00 UTC"
checkSession();
// Check if Session is ok
function checkSession() {
let session = getCookie("session");

// Decode Cookie here

//--------------------

  if(session != ""){
    displayTiles();
    displayPosts();
  }else{

  window.location = "login.php";
  /*
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      window.location = "login.html";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        window.location = "login.html";
      }
    }
    modal.style.display = "block";
  */
}
}


// get the Cookies
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(',');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  


// Function which creates the posts
function createPost(size, img_src, username, defaultTitle, defaultText, defaultBottom) {

// Create Parent Div
    let containerPosts = document.getElementById("ContainerContent");
    let post = document.createElement("div");
    post.className = "post" + " " + size;

        // Create Header
        let post_image = document.createElement("div");
        post_image.className ="post-image" + " " + "img-" + size;

            let img_post_image = document.createElement("img");
            img_post_image.src = img_src;
        
        post_image.appendChild(img_post_image);

        // Create Username
        let post_user = document.createElement("div");
        post_user.className = "post-user";

            let a_post_user = document.createElement("a");
            let a_post_username = document.createTextNode("@" + username);
            a_post_user.className = "post-userprofile";
            a_post_user.href = "...";
            a_post_user.appendChild(a_post_username);

        post_user.appendChild(a_post_user);

        // Create Title
        let post_title = document.createElement("div");
        post_title.className = "post-title";

            let h1_post_title = document.createElement("h1");
            let h1_post_title_text = document.createTextNode(defaultTitle);
            h1_post_title.className = "post-title-text-" + size;
            h1_post_title.appendChild (h1_post_title_text);

        post_title.appendChild(h1_post_title);

        // Create Text
        let post_text = document.createElement("div");
        post_text.className = "post-text";

            let p_post_text = document.createElement("p");
            let p_post_text_text = document.createTextNode(defaultText);
            p_post_text.className = "post-text-text-" + size;
            p_post_text.appendChild(p_post_text_text);
        
        post_text.appendChild(p_post_text);

        // Create Bottom
        let post_bottom = document.createElement("div");
        post_bottom.className = "post-bottom";

            let post_bottom_text = document.createTextNode(defaultBottom);
            
        post_bottom.appendChild(post_bottom_text);
    
        // Output de Div in order
    post.appendChild(post_image);
    post.appendChild(post_user);
    post.appendChild(post_title);
    post.appendChild(post_text);
    post.appendChild(post_bottom);
    containerPosts.appendChild(post);
}

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

// Display the Tiles in the Right Order
function displayTiles() {
let array_with_text = ["Burkaverbot", "Corona", "GameStop", "Dogecoin"];
let tile_pos = 1;
    for(i = 0;i<4;i++) {
        createTrendTiles(tile_pos, array_with_text[i]);
        tile_pos++;
    }
}
// Display the Posts in the right Order
function displayPosts() {
let array_with_order = ["small", "middle", "middle", "small", "small", "small", "small"];
    for(i=0;i<7;i++){
        createPost(array_with_order[i], img_src, username, defaultTitle, defaultText, defaultBottom);
    }
}

