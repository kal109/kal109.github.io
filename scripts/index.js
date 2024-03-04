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




//Elementtien filtteröinti painamalla sivupalkin "projektit" tai "minusta" nappeja
const projektitFilter = document.getElementById("projektitFilter");
const mobiiliFilter = document.getElementById("projektitFilterMobiili");
const projektitTeksti = document.getElementById("projektitTeksti");
const projektitTekstiMobiili = document.getElementById("projektitTekstiMobiili");

const minustaFilter = document.getElementById("minustaFilter");
const mobiiliMinustaFilter = document.getElementById("minustaFilterMobiili");
const minustaTeksti = document.getElementById("minustaTeksti");
const minustaTekstiMobiili = document.getElementById("minustaTekstiMobiili");

const blogit = document.getElementsByClassName("blogiPostaus");
const projektit = document.getElementsByClassName("projektiPostaus");


function filterBlogsOut() {
    for (let i = 0; i < blogit.length; i++) {
        let kierroksenBlogi = blogit[i];
        kierroksenBlogi.classList.toggle("hideContent");
    }

    if (blogit[0].classList.contains("hideContent")) {
        projektitTeksti.innerHTML = "Kaikki sisältö";
        projektitTekstiMobiili.innerHTML = "Kaikki sisältö";
    }
    else {
        projektitTeksti.innerHTML = "Projektit";
        projektitTekstiMobiili.innerHTML = "Projektit";
    }
}

function filterProjectsOut() {
    for (let i = 0; i < projektit.length; i++) {
        let kierroksenProjekti = projektit[i];
        kierroksenProjekti.classList.toggle("hideContent");
    }

    if (projektit[0].classList.contains("hideConten")) {
        minustaTeksti.innerHTML = "Kaikki sisältö";
        minustaTekstiMobiili.innerHTML = "Kaikki sisältö";
    }
    else {
        minustaTeksti.innerHTML = "Minusta";
        minustaTekstiMobiili.innerHTML = "Minusta";
    }
}

projektitFilter.addEventListener("click", filterBlogsOut);
mobiiliFilter.addEventListener("click", filterBlogsOut);
minustaFilter.addEventListener("click", filterProjectsOut);
mobiiliMinustaFilter.addEventListener("click", filterProjectsOut);
