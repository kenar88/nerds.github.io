var openForm = document.querySelector(".js-open-form");
var formPopup = document.querySelector(".modal-content");
var formClose = document.querySelector(".modal-content-close");

openForm.addEventListener("click", function(event){
  event.preventDefault();
  formPopup.classList.add("modal-content-show");
});

formClose.addEventListener("click", function(event){
  event.preventDefault();
  formPopup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    if (formPopup.classList.contains("modal-content-show")){
      formPopup.classList.remove("modal-content-show");
    }
  }
})