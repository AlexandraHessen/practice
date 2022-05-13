$('.carousel').carousel({
    interval: 4000
})

let arrowToUpPage = document.querySelector(".arrow-to-up-page");
arrowToUpPage.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

let previewContainer = document.querySelector(".lot__preview-container");
previewContainer.addEventListener("click", (EO) => {
    EO = EO || window.event;
    if (EO.target.tagName.toLowerCase() !== "img") return;

    let targetPreviewCard = EO.target.name;
    let numbId = parseInt(targetPreviewCard.match(/\d+/))

    let allSliders = document.querySelectorAll(".carousel-item");
    let targetSlide = document.getElementById(`slide-${numbId}`);

    allSliders.forEach((slide) => {
        slide.classList.remove("active")
        if (slide === targetSlide) {
            slide.classList.add("active");
        }
    })


})