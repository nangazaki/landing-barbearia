document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalImage = document.getElementById("modal-image");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeBtn = document.querySelector(".close-btn");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImage.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
