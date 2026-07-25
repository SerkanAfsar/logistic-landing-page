console.log("hello world");
const headerNav = document.querySelector(".header nav");
const toggleBtn = document.getElementById("nav-toggle");
const header = document.querySelector(".header");

const counter = document.querySelector(".counter");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY >= header.clientHeight);
  header.classList.toggle("shadow", window.scrollY >= header.clientHeight);
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  headerNav.classList.toggle("opened");
});

const odometers = document.querySelectorAll(".odometer");

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
