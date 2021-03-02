let returnMsg = ""
let errorHandlingobj = document.getElementById("errorHandling");
let key = 12345;

// Validate the Login
function validateUserLogin(inputData){
    $string = 'dbconnection.php?username=' + inputData[0];
    $.getJSON($string, function(userdata) {

        let hashedPW = hashPassword(inputData[1]);
        if(inputData[0] == userdata.username && hashedPW == userdata.password){

            document.cookie = "session=" + "username:" + userdata.username + "," + "password:" + hashedPW + "," + "timestamp:" + ";" + "expires=Fr, 30 April 2021 00:00:00 UTC";  
            window.location = "index.php"
            return false;

        }else{
            returnMsg = "Anmeldung fehlgeschlagen";
            errorHandlingobj.innerText = returnMsg;
        
        }
    });
}

function hashPassword(password){
    let hash_pw_array = [];
    for (let i = 0; i < password.length; i++){
        hash_pw_array[i] = password.charCodeAt(i) * key;
    }
    hash_pw = hash_pw_array.join('');
    console.log(hash_pw);
    return hash_pw;
}

// Checks if the Input has the right format and forwards it to the Validation Funciton
function submitInput(){
    let input_userdata = [];
    input_userdata[0] = document.getElementById("ipt_UsernameLogin").value;
    input_userdata[1] = document.getElementById("ipt_PasswordLogin").value;
    validateUserLogin(input_userdata);
}

