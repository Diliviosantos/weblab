console.log("JS is connected! 🚀");

// Minimal theme toggle: flip data-theme="dark" on <body>
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      btn.setAttribute('aria-pressed', 'false');
      btn.textContent = '🌙';
    } else {
      document.body.setAttribute('data-theme', 'dark');
      btn.setAttribute('aria-pressed', 'true');
      btn.textContent = '☀️';
    }
  });
});

