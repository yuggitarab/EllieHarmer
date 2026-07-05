(function () {
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('is-active');
    menu.classList.remove('is-open');
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.add('is-active');
    menu.classList.add('is-open');
  }

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });
})();

(function () {
  var openBtn = document.getElementById('bridalEnquiryBtn');
  var modal = document.getElementById('enquiryModal');
  var overlay = document.getElementById('enquiryModalOverlay');
  var closeBtn = document.getElementById('enquiryModalClose');
  var form = document.getElementById('enquiryForm');
  var success = document.getElementById('enquirySuccess');
  if (!openBtn || !modal || !form) return;

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  openBtn.addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    success.hidden = false;
  });
})();
