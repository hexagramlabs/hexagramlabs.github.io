import enUsPatterns from 'hyphenation.en-us';
import { createHyphenator, justifyContent } from 'tex-linebreak';

const hyphenate = createHyphenator(enUsPatterns);
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
let lastWidth = window.innerWidth;

function justifyAll() {
  const paragraphs = Array.from(document.querySelectorAll('p, li, blockquote'));
  paragraphs.forEach((el) => el.classList.add('justified-text'));
  justifyContent(paragraphs, hyphenate);
}

window.addEventListener('DOMContentLoaded', () => {
  justifyAll();

  // After images load, defer heavy work
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(justifyAll);
  } else {
    window.addEventListener('load', () => setTimeout(justifyAll, 500));
  }

  if (!isMobile) {
    let resizeTimeout: number | undefined;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth;
          justifyAll();
        }
      }, 100);
    });
  }
});
