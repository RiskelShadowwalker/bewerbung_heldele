const themeButton = document.querySelector("#theme-button");
const viewer = document.querySelector("#viewer");
const viewerImage = document.querySelector("#viewer-image");
const documentLinks = document.querySelectorAll(".documents a");

function switchTheme() {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themeButton.textContent = "Dunkles Design";
    localStorage.setItem("theme", "light");
  } else {
    themeButton.textContent = "Helles Design";
    localStorage.setItem("theme", "dark");
  }
}

function openViewer(event) {
  event.preventDefault();
  viewerImage.src = event.currentTarget.href;
  viewerImage.alt = event.currentTarget.querySelector("img").alt;
  viewer.showModal();
}

function closeViewer() {
  viewer.close();
}

themeButton.addEventListener("click", switchTheme);
viewer.addEventListener("click", closeViewer);

for (const link of documentLinks) {
  link.addEventListener("click", openViewer);
}

if (localStorage.getItem("theme") === "light") {
  switchTheme();
}
