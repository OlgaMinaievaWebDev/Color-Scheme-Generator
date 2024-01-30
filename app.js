const colorSection = document.getElementById("color-section");
let colorInp = document.getElementById("color-picker");
let colorMode = document.getElementById("color-mode");

function getColors() {
  colorInp = colorInp.value.substr(-6);
  colorMode = colorMode.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInp}&mode=${colorMode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (const color of data.colors) {
        html += `
            <div class="color-value">
              <img class="color-img" src="${color.image.bare}">
              <h3>${color.hex.value}</h3>
            </div>`;
      }
      colorSection.innerHTML = html;
    });
}

document.getElementById("get-scheme").addEventListener("click", getColors);
