





var userName = "";

if(localStorage.getItem("userName") != null){

    userName = localStorage.getItem("userName");
    console.log(userName)
}


function displayUserName(){

    var box = ""; 

    box += `
    
           <h1 class="mb-4">Welcome <span class = "fs-2">${userName}</span></h1>
    
            `

    document.getElementById("welcomeMessage").innerHTML = box;       
}
displayUserName();

function removeNameFromLocal(){

   localStorage.removeItem("userName")

   window.location.href = "/";

}