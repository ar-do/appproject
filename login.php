<!DOCTYPE html>
<html>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <div class="LoginContainer">
            <h2 class="LoginTitle">
                Login - Apppr.
            </h2>
            <div class="FormContainer">
                <form class="LoginForm" onsubmit="return false;">
                    <div class="row">
                        <label class="lbl_login">Benutzername</label>
                        <input type="text" id="ipt_UsernameLogin" class="inputfield">
                    </div>
                    <div class="row">
                        <label class="lbl_login">Passwort</label>
                        <input type="password" id="ipt_PasswordLogin" class="inputfield">
                    </div>
                    <button id="btn_submitCred" class="btn btn_green btn_login" onclick="submitInput()" >Anmelden</button>
                </form>

                <p class="a_login" id="errorHandling"></p>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/login.js"></script>
    </body>
</html>