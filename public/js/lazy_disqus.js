document.addEventListener("DOMContentLoaded", function () {
  const mountNode = document.getElementById("disqus_thread");

  if (!mountNode) return;

  const pageUrl = mountNode.dataset.url;
  const pageIdentifier = mountNode.dataset.identifier;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Lazy-loading Disqus…");

        observer.unobserve(entry.target);

        window.disqus_config = function () {
          this.page.url = pageUrl;
          this.page.identifier = pageIdentifier;
        };

        const d = document, s = d.createElement("script");
        s.src = "https://hexagr.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      }
    });
  }, {
    threshold: 0.25
  });

  observer.observe(mountNode);
});

