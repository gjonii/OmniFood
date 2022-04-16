
let navHeader = document.querySelector("#header")
let navButton = document.querySelector(".mobile-nav")

navButton.addEventListener("click",function(){
    navHeader.classList.toggle("open-nav")
})


let viti = document.querySelector(".viti");
let today = new Date();
let year = today.getFullYear();

viti.textContent=year;


let buttonToggle = document.querySelector(".hero-section .btn-primary");

buttonToggle.addEventListener("click", function() {
    buttonToggle.classList.add("button-toggle");
})
console.log(buttonToggle)









    



