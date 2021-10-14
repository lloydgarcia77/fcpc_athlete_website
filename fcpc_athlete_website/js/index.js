
let buttonShowLoginModal = document.getElementById("show-login-modal")
let modalLogin = document.getElementById("login-modal-form")
let closeButton = document.getElementsByClassName("close")[0]
 


buttonShowLoginModal.onclick = function(e){
    e.preventDefault();   
    modalLogin.style.display = "block"
}


closeButton.onclick = function(){
    modalLogin.style.display = "none"
}

window.onclick = function(e){
    if(e.target == modalLogin){
        modalLogin.style.display = "none"
    }
}

 

