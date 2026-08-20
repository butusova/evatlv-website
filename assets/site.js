(() => {
  const oldDomain = "https://evatlv.com";
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith(oldDomain + "/")) {
      const path = href.slice(oldDomain.length).replace(/\/?$/, "/");
      link.setAttribute("href", path);
    }
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        if (String(value).trim()) lines.push(`${key}: ${value}`);
      }
      const message = lines.length ? lines.join("\n") : "שלום, ברצוני לקבוע תור";
      window.open(`https://wa.me/972533820237?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  });
})();
