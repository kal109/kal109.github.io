//mobiilinavigaation avaaminen ja sulkeminen
const navigation = document.getElementById('mobilenav')

function openNav() {
    navigation.classList.toggle("openNav");
}

function closeNav() {
    navigation.classList.remove("openNav");
}

document.getElementById("mobilemenu").addEventListener("click", openNav);

document.getElementById("closebtn").addEventListener("click", closeNav);




//Elementtien filtteröinti painamalla sivupalkin "projektit" nappia
