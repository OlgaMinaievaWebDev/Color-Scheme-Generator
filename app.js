const colorSection = document.getElementById("color-section");

let colorInp = document.getElementById("color-picker");
let colorMode = document.getElementById("color-mode");

document.getElementById("get-scheme").addEventListener("click", function () {
  colorInp = colorInp.value.substr(-6);
  colorMode = colorMode.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInp}&mode=${colorMode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
});
