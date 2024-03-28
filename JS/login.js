

var userEmailInput = document.getElementById("userEmailInput");
var userPassInput = document.getElementById("userPassInput");


var index = 0;




// (2) validation inputs && Enter an account


var usersList = [];

if(localStorage.getItem("usersList") != null){

    usersList = JSON.parse(localStorage.getItem("usersList"));

}


// (A)(validation inputs) 


// (B)(Enter an account) 
function enterAnAccount(){

        var isInValid = false;

        var box = "";

        var user = {
            email: userEmailInput.value,
            pass: userPassInput.value
        }
        var currentemail = user.email;
        var currentPass = user.pass;

        for(var i = 0; i < usersList.length; i++){
                    
            
            if(usersList[i].email === currentemail && usersList[i].pass === currentPass){
                
                var currentName =  usersList[i].name;
            
                localStorage.setItem("userName", currentName); 
                
                clearValues();
                window.location.href = "/home.html"; 
                return;

            }
        }

        if(currentemail === "" && currentPass === ""){

            box += `
            <p class ="text-danger">All inputs is required</p>           
            `
            document.getElementById("warningMessage").innerHTML = box;

        }else{

            box += `
            <p class ="text-danger">incorrect email or password</p>           
            `
            document.getElementById("warningMessage").innerHTML = box;
        }

}

function clearValues(){
    userEmailInput.value = "";
    userPassInput.value = "";
}

