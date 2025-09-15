document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.upvote-button');
  buttons.forEach(button => {
    const postId = button.getAttribute('data-post-id');
    const countElement = button.nextElementSibling;

    // Fetch initial upvote count
    fetch(`https://long-disk-c26b.hexagramlabs.workers.dev/${encodeURIComponent(postId)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        countElement.textContent = `${data.upvotes} Toasts`;
      })
      .catch(error => {
        console.error('Error fetching upvotes:', error);
        countElement.textContent = 'Error';
      });

    // Handle button click
    button.addEventListener('click', () => {
      fetch(`https://long-disk-c26b.hexagramlabs.workers.dev/${encodeURIComponent(postId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          countElement.textContent = `${data.upvotes} Toasts`;
        })
        .catch(error => {
          console.error('Error submitting upvote:', error);
          countElement.textContent = 'Error';
        });
    });
  });
});
