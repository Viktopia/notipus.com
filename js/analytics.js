// Initialize Google Analytics
(function initGA() {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZC525GL8D9';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-ZC525GL8D9');
})();

// Helper function for tracking events
function trackEvent(eventName, eventParams) {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Track "Get Started" buttons
  const getStartedButtons = document.querySelectorAll('.get-started-btn');
  getStartedButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      trackEvent('get_started_click', {
        location: index === 0 ? 'hero' : 'bottom',
        page: 'home'
      });
    });
  });
});