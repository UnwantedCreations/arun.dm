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
    portfolioItems.forEach((item, index) => {
      if (category === 'all' || item.classList.contains(category)) {
        if (index < visibleItems) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      } else {
        item.classList.remove('show');
      }
    });
    updateLoadMoreButton();
  }

  function updateLoadMoreButton() {
    const totalItems = currentCategory === 'all'
      ? portfolioItems.length
      : document.querySelectorAll(`.portfolio-card.${currentCategory}`).length;

    if (visibleItems >= totalItems) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
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
});


Email.send({
  SecureToken: "ff4837a8-2def-4548-8d8e-675b166cfd1c",
  To: 'hire@arundm.in',
  From: 'send@arundm.in',
  Subject: document.getElementById("subject").value,
  Body: "Name: " + document.getE1ementById("name").value
    + "<br> Email: " + document.getE1ementById("email").value
    + "<br> Phone: " + document.getE1ementById("number").value
    + "<br> Message: " + document.getE1ementById("message").value
}).then(
  message => alert(message)
);