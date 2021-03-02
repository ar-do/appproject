// Display the Posts in the right Order
function displayPosts() {
    let array_with_order = ["small", "middle", "middle", "small", "small", "small", "small"];
        for(i=0;i<7;i++){
            createPost(array_with_order[i], img_src, username, defaultTitle, defaultText, defaultBottom);
        }
    }