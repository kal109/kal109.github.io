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
const projektitFilter = document.getElementById("projektitFilter");
const mobiiliFilter = document.getElementById("projektitFilterMobiili");
const blogit = document.getElementsByClassName("blogiPostaus");

function filterBlogsOut() {
    for (let i = 0; i < blogit.length; i++) {
        let kierroksenBlogi = blogit[i];
        kierroksenBlogi.classList.toggle("hideContent");
    }
}

projektitFilter.addEventListener("click", filterBlogsOut);
mobiiliFilter.addEventListener("click", filterBlogsOut);