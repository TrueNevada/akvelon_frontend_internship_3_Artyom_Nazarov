const form = document.querySelector(".form");
let enteredData = [];

form.addEventListener("submit", function() {
  alert("Форма успешно отправлена");
})

function printValues() {
  let formData = new FormData(form);
  console.log(formData);
}

printValues();
