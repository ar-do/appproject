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