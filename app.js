
const shareButton = document.getElementById('shareButton');
const statusText = document.getElementById('statusText');

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: 'Camilo Zamorano Jara | Movistar Empresas',
    text: 'Contacto profesional de Camilo Zamorano Jara',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      statusText.textContent = 'Tarjeta compartida';
    } else {
      await navigator.clipboard.writeText(window.location.href);
      statusText.textContent = 'Enlace copiado';
    }
  } catch (error) {
    statusText.textContent = '';
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}
