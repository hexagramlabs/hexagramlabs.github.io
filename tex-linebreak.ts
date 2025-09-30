import enUsPatterns from 'hyphenation.en-us';
import { createHyphenator, justifyContent } from 'tex-linebreak';

// Create a reusable hyphenator function
const hyphenate = createHyphenator(enUsPatterns);

// Utility function to justify all content elements
function justifyAll() {
  const paragraphs = Array.from(document.querySelectorAll('p, li'));
  paragraphs.forEach((el) => el.classList.add('justified-text')); // Add CSS class
  justifyContent(paragraphs, hyphenate);
}

// Wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  justifyAll();

  // Optional: also justify again once everything (images etc.) is fully loaded
  window.addEventListener('load', justifyAll);

  // Re-justify on resize (debounced)
  let resizeTimeout: number | undefined;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(justifyAll, 150);
  });
});

export { justifyAll, justifyContent, createHyphenator, enUsPatterns, hyphenate };
