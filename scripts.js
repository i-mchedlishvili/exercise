let modalBut = document.getElementById("modal-but");
let modal = document.getElementById("modal");
let modalWindow = document.getElementById("window");
let exitBut = document.getElementById("exit");

modalBut.addEventListener('click',  () => {
    modal.style.display = "block";
    modalWindow.style.display = "block";
})

exitBut.addEventListener('click', () => {
    modal.style.display = "none";
    modalWindow.style.display = "none";
})