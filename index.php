<!DOCTYPE html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Carter+One&family=Inconsolata&family=Noto+Sans+JP:wght@400;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/main2.css">
    </head>
    <body>
       <div class="navbar box-shadow">
            <div class="navbar-inner">
            Apppr_
                <div class="navbar-right">
                    <input class="navbar-search" placeholder="Suchen">
                    <button class="navbar-search-btn">
                        <span class="material-icons">
                            search
                            </span>
                    </button>
                    <button class="navbar-btn">Beitrag erstellen</button>
                    <button class="navbar-btn">Verwalten</button>
                    <button class="navbar-btn">Profil</button>
                    <div class="navbar-profile"><img src="img/avatar-icon-images-4.jpg"></div>
                </div>
            </div>
       </div>
       <div class="content-topics" >
           <div class="content-topics-top">
               <h1 class="title-1">Trends</h1>
               <a href="...."><h1 class="title-link">mehr Trends anzeigen</h1></a>
           </div>
           <div class="content-topics-inner" id="ContainerTrendTiles"></div>
           <div class="content-topics-bottom">

           </div>
           

           <!-- The Modal -->
           <div id="myModal" class="modal">
           
             <!-- Modal content -->
             <div class="modal-content">
               <span class="close">&times;</span>
               <p>Session has expired...</p>
             </div>
           
           </div>
        <div class="content-post" id="ContainerContent">

            <!-- Maybe later --
            <div class="post large">
                <div class="post-image large">
                </div>
             
            </div>
            -->
            <script src="js/mainscript.js"></script>
            <scirpt src="js/config.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </div>
       </div>
    </body>
</html>