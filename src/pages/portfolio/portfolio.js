// Portfolio page functionality
// Import necessary assets
import './portfolio.css';

// Initialize the page when loaded
window.addEventListener('page:portfolio:loaded', () => {
  setupPortfolioInteractions();
});

/**
 * Setup click handlers for portfolio items
 */
function setupPortfolioInteractions() {
  // Setup repository click handlers
  const repoItems = document.querySelectorAll('#repos-container > div[data-url]');
  repoItems.forEach(item => {
    item.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  // Setup article click handlers
  const articleItems = document.querySelectorAll('#articles-container > div[data-url]');
  articleItems.forEach(item => {
    item.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  // Setup video click handlers
  const videoItems = document.querySelectorAll('#videos-container > div[data-video-id]');
  videoItems.forEach(item => {
    item.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      if (videoId) {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      }
    });
  });
}
