//Global variablies

var userNameInput = document.getElementById("userNameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPassInput = document.getElementById("userPassInput");

var messageNameInput = document.getElementById("messageNameInput");
var messageEmailInput = document.getElementById("messageEmailInput");
var messagePassInput = document.getElementById("messagePassInput");

//(1)validation inputs && create an account

var usersList = [];

if(localStorage.getItem("usersList") != null){

    usersList = JSON.parse(localStorage.getItem("usersList"));

}


//(A)(validation inputs) 

 //1-validationNameS
function validationName(){
    
    var userNameValue = userNameInput.value;

    
    var regax = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/

    
    if(regax.test(userNameValue)){
        
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        messageNameInput.classList.add("d-none");
        return true;

    }else{
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        messageNameInput.classList.remove("d-none");
        return false
    }
}


 //2-validationEmails
 function validationEmail(){
    
    var userEmailValue = userEmailInput.value;

    
    var regax = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

    
    if(regax.test(userEmailValue)){
        
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        messageEmailInput.classList.add("d-none");
        return true;

    }else{
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        messageEmailInput.classList.remove("d-none");
        return false;
    }
}


//3-validationPassword
function validationPass(){
    
    var userPassValue = userPassInput.value;

    
    var regax = /^[a-zA-Z0-9~_&*%@$]+$/

    
    if(regax.test(userPassValue)){
        
        userPassInput.classList.add("is-valid");
        userPassInput.classList.remove("is-invalid");
        messagePassInput.classList.add("d-none");
        return true;

    }else{
        
        userPassInput.classList.add("is-invalid");
        userPassInput.classList.remove("is-valid");
        messagePassInput.classList.remove("d-none");
        return false;
    }
}

//(B)create an account
function createAccount(){

    if(validationName() === true && validationEmail() === true && validationPass() === true){
                   
        var isValid = true;

        var box = ""; 
    
        var user = {
                    name: userNameInput.value,
                    email: userEmailInput.value,
                    pass: userPassInput.value
                }
               
                var currentemail = user.email;
                
                if(localStorage.getItem("usersList") != null){ 
                    
                    for(var i = 0; i < usersList.length; i++){
                        
                        if(usersList[i].email === currentemail){
                        
                            isValid = false;
                        }
                    }
    
                }
    
                if(isValid){
                    
                        usersList.push(user);
                        localStorage.setItem("usersList", JSON.stringify(usersList));
    
                        clearValues();
    
                        userNameInput.classList.remove("is-valid");
                        userEmailInput.classList.remove("is-valid");
                        userPassInput.classList.remove("is-valid");

                        box += `
                            <p class ="text-success">Success</p>           
                        `
                        document.getElementById("warningMessage").innerHTML = box;
                        
                        window.location.href = "/";
                }else{
            
                box += `
                        <p class ="text-danger">Email already exists</p>           
                        `
                document.getElementById("warningMessage").innerHTML = box;
                
                }
                  
        
    }
                 
}



//(C) ClearValues
function clearValues(){
    userNameInput.value = "";
    userEmailInput.value = "";
    userPassInput.value = "";

}











