// Select all portfolio images
const portfolioImages = document.querySelectorAll('.portfolio-item img');

// Select the lightbox and its content
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');

// Add click event to each image
portfolioImages.forEach(image => {
  image.addEventListener('click', () => {
    const largeImageSrc = image.getAttribute('data-large'); // Get the larger image URL
    lightboxImage.src = largeImageSrc; // Set the lightbox image source
    lightbox.classList.add('active'); // Show the lightbox
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage) {
    lightbox.classList.remove('active'); 
  }
});
