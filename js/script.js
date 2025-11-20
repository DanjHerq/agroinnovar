document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("data-section");

      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(sec => {
        sec.classList.remove("active");
        if (sec.id === target) sec.classList.add("active");
      });

      window.scrollTo(0, 0);
    });
  });
});
