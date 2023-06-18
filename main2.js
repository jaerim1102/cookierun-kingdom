var index = 1;
var numImages = 5;

document.getElementById("prevImage").addEventListener("click", function() {
    if (index != 1) {
        document.getElementById("mainImage").src = "img/gameContents-ko-0" + (--index) + ".webp";
    }    
    toggleArrowVisibility();
});

document.getElementById("nextImage").addEventListener("click", function() {
    if (index != numImages) {
        document.getElementById("mainImage").src = "img/gameContents-ko-0" + (++index) + ".webp";
    }
    toggleArrowVisibility();
});

function toggleArrowVisibility() {
    if (index == 1) {
        document.getElementById("prevImage").classList.add("hidden");
    }
    else if (index == numImages) {
        document.getElementById("nextImage").classList.add("hidden");
    }
    else {
        document.getElementById("prevImage").classList.remove("hidden");
        document.getElementById("nextImage").classList.remove("hidden");
    }
}
