window.onload = () => {
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const collapse = document.querySelector(".collapse");
  const overlay = document.querySelector(".overlay");
  const dropdowns = document.querySelectorAll(".dropdown");

  [hamburger, close, overlay].forEach((el) => {
    el.onclick = () => {
      showCollapse();
    };
  });

  dropdowns.forEach((dropdown) => {
    const subMenu = dropdown.querySelector(".sub-menu");
    dropdown.onclick = () => {
      dropdown.classList.toggle("active");
      subMenu.classList.toggle("active");
    };
  });

  function showCollapse() {
    collapse.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};
