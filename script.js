let settingsmenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

function ChangeMode(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "light")


localStorage.setItem("theme" , "dark");
