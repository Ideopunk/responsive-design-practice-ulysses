const realFixed = document.querySelector(".real-fixed")

window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 32) {
        realFixed.style.display = "block";
    }
    else {
        realFixed.style.display = "none";
    }
});

