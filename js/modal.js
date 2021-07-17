const hotelSearh = document.querySelector(".hotel-search");
const selectingPopup = document.querySelector(".selecting");
const selectingForm = document.querySelector(".selecting-form");
const selectingFormcheckindate = document.querySelector(".selecting-form-check-in-date");
const selectingFormdeparturedate = document.querySelector(".selecting-form-departure-date");
const selectingFormadults = document.querySelector(".selecting-form-adults");
const selectingFormchildren = document.querySelector(".selecting-form-children");

hotelSearh.addEventListener("click", function () {
  selectingPopup.classList.toggle("modal-hide");
  selectingPopup.classList.remove("modal-error");
});

selectingForm.addEventListener("submit", function (evt) {
  if (!selectingFormcheckindate.value || !selectingFormdeparturedate.value || !selectingFormadults.value || !selectingFormchildren.value) {
    evt.preventDefault();
    selectingPopup.classList.add("modal-error")
  }
});
