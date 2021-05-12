var burgerMenu = document.getElementById('burger-menu');
burgerMenu.style.display = "none";

function burgera() {
    if(burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
}
