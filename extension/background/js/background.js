let currentTabUrl = null;

// Función para enviar la URL al servidor
function sendUrlToServer(url) {
    const json = {
        url: url
    };

    fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
        credentials: 'omit' // Esto asegura que no se incluyan cookies
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}

// Función para obtener la URL de la pestaña activa
function getActiveTabUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0]) {
            callback(tabs[0].url);
        }
    });
}

// Intervalo para enviar la URL cada 10 segundos
setInterval(function() {
    getActiveTabUrl(function(url) {
        if (url && url !== currentTabUrl) {
            currentTabUrl = url;
            sendUrlToServer(url);
        }
    });
}, 10000); // 10000 ms = 10 segundos

// Actualiza la URL actual cuando cambia la pestaña activa
chrome.tabs.onActivated.addListener(function(activeInfo) {
    getActiveTabUrl(function(url) {
        currentTabUrl = url;
    });
});

