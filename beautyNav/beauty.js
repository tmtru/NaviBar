const marker = document.querySelector('.marker');
const list = document.querySelectorAll('ul li');

list.forEach((li) => {
  li.addEventListener('mousemove', (event) => {
    marker.style.left = li.offsetLeft + 7 + "px";
    marker.style.width = li.offsetWidth - 15 + "px";
    document.querySelector(".active")?.classList.remove("active");
    // The classList property returns the CSS classnames of an element.
    li.classList.add("active");
  });
});

