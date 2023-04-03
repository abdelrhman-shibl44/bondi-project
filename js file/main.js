let btn = document.querySelector(".button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let toolBox = document.querySelector(".tool-container");
function my(e) {
  e.classList.toggle("fa-spin");
  toolBox.classList.toggle("open");
}

main_color = localStorage.getItem("option_color");
main_background = localStorage.getItem("option-background");

if (main_color !== null) {
  document.documentElement.style.setProperty(
    "--green-color",
    localStorage.getItem("option_color")
  );
  document.documentElement.style.setProperty(
    "--light-green-background",
    localStorage.getItem("option-background")
  );
  document.querySelectorAll(".color-list li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.value === main_color) {
      li.classList.add("active");
    }
  });
}

let colorList = document.querySelectorAll(".color-list li");
console.log(colorList);
colorList.forEach((li) => {
  li.addEventListener("click", function (e) {
    console.log(e.target.dataset.value);

    document.documentElement.style.setProperty(
      "--green-color",
      e.target.dataset.value
    );
    document.documentElement.style.setProperty(
      "--light-green-background",
      e.target.dataset.background
    );

    // remove active from all li
    colorList.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    localStorage.setItem("option_color", e.target.dataset.value);
    localStorage.setItem("option-background", e.target.dataset.background);
  });
});
