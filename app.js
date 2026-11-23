// Register service worker (enables Add to Home Screen / offline shell)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
const TARGET = 'https://ome.tv/';
document.getElementById('go').addEventListener('click', () => {
  window.location.href = TARGET;
});
