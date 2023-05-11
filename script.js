window.addEventListener('load', () => {
    console.log('pagina cargada')
})
let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;