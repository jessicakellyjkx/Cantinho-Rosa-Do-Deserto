var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

function toggleMenu() {
var menu = document.getElementById("menu");
if (menu.style.display === "block") {
    menu.style.display = "none";
} else {
    menu.style.display = "block";
}
}


