// envia los datos de la URL de la pestaña activa al servidor socket, no websocket, ni chingaderasocket, solo socket., el id del boton que activa la extension es forceSend

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('forceSend');
    button.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const json = {
                url: tabs[0].url
            };
            // usaremos fetch para enviar la URL al servidor socket
            fetch('http://localhost:5000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json),
                credentials: 'omit' // Esto asegura que no se incluyan cookies en la petición
            }).then(response => {
                console.log('Respuesta del servidor:', response);
            }).catch(error => {
                console.error('Error en la petición:', error);
            });
        });
    });
});

/*
h
h
h
h
h
h
h
h
h
*/

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const currentUrlElement = document.getElementById('currentUrl');
  
    // Obtener la URL actual de la pestaña activa
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      currentUrlElement.textContent = currentUrl;
    });
  
    // Obtener el estado guardado en el almacenamiento local y ajustar la visibilidad de la URL
    chrome.storage.local.get('isUrlVisible', function (data) {
      const isUrlVisible = data.isUrlVisible !== undefined ? data.isUrlVisible : true; // Default to true if not set
      toggleButton.checked = isUrlVisible;
      currentUrlElement.classList.toggle('hidden', !isUrlVisible);
    });
  
    // Manejar el evento de cambio del botón de toggle
    toggleButton.addEventListener('change', function () {
      const newState = toggleButton.checked;
      chrome.storage.local.set({ isUrlVisible: newState }, function () {
        currentUrlElement.classList.toggle('hidden', !newState);
      });
    });
  });
  