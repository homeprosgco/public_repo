export function loadWebsiteThemeFonts(themeName: string, fontUrls: string[] = []) {
  if (fontUrls.length === 0) return;

  // Remove existing fonts
  document.querySelectorAll('link[data-font]').forEach((link) => link.remove());

  // Load new font links
  fontUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.setAttribute('data-font', themeName);
    document.head.appendChild(link);
  });
}
