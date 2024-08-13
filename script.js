let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const loadMoreBtn = document.querySelector('#load-more');
  const portfolioItems = document.querySelectorAll('.portfolio-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let currentCategory = 'all';
  let visibleItems = 9;

  function filterItems(category) {
    let itemsCount = 0;
    portfolioItems.forEach((item) => {
      if (category === 'all' || item.classList.contains(category)) {
        if (itemsCount < visibleItems) {
          item.style.display = 'block';
          itemsCount++;
        } else {
          item.style.display = 'none';
        }
      } else {
        item.style.display = 'none';
      }
    });
    updateLoadMoreButton(itemsCount);
  }

  function updateLoadMoreButton(shownItems) {
    const totalItems = currentCategory === 'all'
      ? portfolioItems.length
      : document.querySelectorAll(`.portfolio-card.${currentCategory}`).length;

    if (shownItems >= totalItems) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-block';
      loadMoreBtn.textContent = 'Load More';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      visibleItems = 9;
      filterItems(currentCategory);
    });
  });

  loadMoreBtn.addEventListener('click', function () {
    visibleItems += 9;
    filterItems(currentCategory);
  });

  filterItems('all');

  console.log('Portfolio item classes:');
  portfolioItems.forEach(item => console.log(item.className));
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ea580c" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ea580c",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
