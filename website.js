window.onscroll = function () {
    scrollFunction() 
};
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function scrollFunction() {
    if (window.scrollY >= sticky + 20) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


var allImg = document.querySelectorAll(".imgZoom");
allImg.forEach((image)=>{
    image.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modal.classList.add("show")
    }
)});
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
modal.style.display = "none";
}

function toTheTop(){
    document.documentElement.scrollTop = 0;
}

