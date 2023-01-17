//Crarga
window.onload = function () {
    var contenedor = document.getElementById('logo_load');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}
//Aniscroll nav
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})
