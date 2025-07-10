
// Get modal elements
const modal = document.getElementById("resume-modal");
const img = document.getElementById("resume-image");
const modalImg = document.getElementById("zoomed-resume");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

closeBtn.onclick = function () {
modal.style.display = "none";
};

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

function openModal(imgElement) {
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("zoomed-project-img");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
document.getElementById("project-modal").style.display = "none";
}

// Optional: close modal by clicking outside the image
window.addEventListener("click", function (e) {
const modal = document.getElementById("project-modal");
if (e.target === modal) {
    modal.style.display = "none";
}
});

