const headerNav = document.querySelector(".header nav"),
  toggleBtn = document.getElementById("nav-toggle"),
  header = document.querySelector(".header"),
  counter = document.querySelector(".counter");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY >= header.clientHeight);
  header.classList.toggle("shadow", window.scrollY >= header.clientHeight);
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  headerNav.classList.toggle("opened");
});

function setItem(item) {
  const target = item.getAttribute("data-count");

  setTimeout(() => {
    item.innerHTML = target;
  }, 1000);
}

const observer = new IntersectionObserver(
  ([entry], innerObserver) => {
    if (!entry.isIntersecting) return;
    const odometers = entry.target.querySelectorAll(".odometer");
    odometers.forEach(setItem);
    innerObserver.unobserve(entry.target);
  },
  {
    threshold: 0.4,
  },
);
observer.observe(counter);
