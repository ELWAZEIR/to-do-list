let jsonUsers = {
    "peter" : 1234,

    "fady": 1234,

    "hossam" : 1234,

    "abanoub" : 1234,
};


function loginUser()
{
    let inputText = document.getElementById("email").value;
    var pattern=/^[a-z0-9._%+-@]{3,12}$/gm;
    var value = inputText.value;
    var result=pattern.test(value);
            
            let inputPassword = document.getElementById("password").value;
                if(inputText in jsonUsers){
                    if( jsonUsers[inputText] == inputPassword)
                    location.replace("./index.html");
                    else{
                        alert("password is wrong")
                    }
                } else{
                   alert("user is not found");
                } 
}


function logout(){
location.replace("./login.html");
}