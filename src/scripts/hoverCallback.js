document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="mailto:"]');
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const email = "your-email@example.com"; // Replace with your email
      link.href = `mailto:${email}`;
    });
  });
});
