const scriptURL =
  "https://script.google.com/macros/s/AKfycbxEX356bT3PptTvMbYor7lcwdQzldh-Vmkvyj4zJG5mwFLR2VHtEVF9Y_x9QuwLAoAvsA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you For Subscribing";
      setTimeout(function () {
        msg.innerHTML = " ";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
