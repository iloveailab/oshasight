// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.top-bar nav a');
  // get path without trailing slash
  let path = window.location.pathname.replace(/\/$/, '');
  // if root, normalize to '/'
  if (path === '') path = '/';

  links.forEach(link => {
    // build link’s href path (relative to domain)
    const url = new URL(link.href, window.location.origin);
    let linkPath = url.pathname.replace(/\/$/, '');
    if (linkPath === '') linkPath = '/';
    if (linkPath === path) {
      link.classList.add('active');
    }
  });
});
