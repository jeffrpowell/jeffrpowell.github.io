import './styles/main.css';
import Navigo from 'navigo';

// Initialize the router
const router = new Navigo('/', { hash: true });

// Set up page handlers
import './pages/about-me/about-me.js';
import './pages/tech/tech.js';
import './pages/portfolio/portfolio.js';
import './pages/tangram/tangram.js';

// Content container
const contentElement = document.getElementById('content');

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Define routes
router
  .on('/whois', async () => {
    const response = await fetch('/about-me.html');
    const html = await response.text();
    contentElement.innerHTML = html;
    
    // Dispatch event to initialize page scripts
    window.dispatchEvent(new CustomEvent('page:about-me:loaded'));
  })
  .on('/tech', async () => {
    const response = await fetch('/tech.html');
    const html = await response.text();
    contentElement.innerHTML = html;
    
    // Dispatch event to initialize page scripts
    window.dispatchEvent(new CustomEvent('page:tech:loaded'));
  })
  .on('/portfolio', async () => {
    const response = await fetch('/portfolio.html');
    const html = await response.text();
    contentElement.innerHTML = html;
    
    // Dispatch event to initialize page scripts
    window.dispatchEvent(new CustomEvent('page:portfolio:loaded'));
  })
  .on('/tangram', async () => {
    const response = await fetch('/tangram.html');
    const html = await response.text();
    contentElement.innerHTML = html;
    
    // Dispatch event to initialize page scripts
    window.dispatchEvent(new CustomEvent('page:tangram:loaded'));
  })
  .notFound(() => {
    // Default route
    router.navigate('/whois');
  })
  .resolve();

// Handle navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Mark current page link as active
  function updateActiveLink() {
    const currentLocation = router.getCurrentLocation();
    if (!currentLocation) return;
    
    document.querySelectorAll('[data-navigo]').forEach(link => {
      if (link.getAttribute('href') === '#' + currentLocation.url) {
        link.classList.add('text-green-600', 'font-semibold');
      } else {
        link.classList.remove('text-green-600', 'font-semibold');
      }
    });
  }

  // Listen for route changes
  router.hooks({
    after: updateActiveLink
  });

  // Initial update
  updateActiveLink();
});
