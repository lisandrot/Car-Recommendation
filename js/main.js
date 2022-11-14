// CARRUSSEL index.html

const carrussel = document.querySelector("#imagenes");
let sliderSection = document.querySelectorAll(".contenedor");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const izquierda = document.querySelector("#izquierda");
const derecha = document.querySelector("#derecha");
carrussel.insertAdjacentElement('afterbegin', sliderSectionLast)
function siguiente(){
    let sliderSectionFirst = document.querySelectorAll(".contenedor")[0];
    carrussel.style.marginleft = "-200%";
    carrussel.style.transition = "all 0.8s";
    setTimeout(function(){
        carrussel.style.transition = "none";
        carrussel.insertAdjacentElement('beforeend', sliderSectionFirst);
        carrussel.style.marginleft = "-100%";
    }, 500);
}
function anterior(){
    let sliderSection = document.querySelectorAll(".contenedor");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    carrussel.style.marginleft = "0";
    carrussel.style.transition = "all 0.5s";
    setTimeout(function(){
        carrussel.style.transition = "none";
        carrussel.insertAdjacentElement('afterbegin', sliderSectionLast);
        carrussel.style.marginleft = "-100%";
    }, 500);
}
derecha.addEventListener("click", function(){
    siguiente();
})
izquierda.addEventListener("click", function(){
    anterior();
})
setInterval(function(){
    next();
}, 5000);


