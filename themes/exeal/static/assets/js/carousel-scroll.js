document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.carousel-control-prev').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-bs-target');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const scrollContainer = targetElement.querySelector('.row.flex-nowrap');
        if (scrollContainer) {
          // Calculate the new scroll position
          const containerWidth = scrollContainer.offsetWidth;
          const currentScroll = scrollContainer.scrollLeft;
          const newScroll = Math.max(0, currentScroll - containerWidth);
          scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
      }
    });
  });

  document.querySelectorAll('.carousel-control-next').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-bs-target');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const scrollContainer = targetElement.querySelector('.row.flex-nowrap');
        if (scrollContainer) {
          // Calculate the new scroll position
          const containerWidth = scrollContainer.offsetWidth;
          const currentScroll = scrollContainer.scrollLeft;
          const maxScroll = scrollContainer.scrollWidth - containerWidth;
          const newScroll = Math.min(maxScroll, currentScroll + containerWidth);
          scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
      }
    });
  });
}); 