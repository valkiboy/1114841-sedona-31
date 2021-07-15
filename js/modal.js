const hotelSearh = document.querySelector(".hotel-search");
const selectingPopup = document.querySelector(".selecting");

hotelSearh.addEventListener("click", function () {
  selectingPopup.classList.toggle("modal-hide");
})
