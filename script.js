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

  // Initial filter
  filterItems('all');

  // Debug: Log classes of all portfolio items
  console.log('Portfolio item classes:');
  portfolioItems.forEach(item => console.log(item.className));
});