# CKworker

CKworker es una extensión de navegador que permite la integración de Twitch con Discord Rich Presence. La extensión se comunica con un servidor local que maneja la actualización de tu estado de Discord.

## Características

- Muestra tu estado de Twitch en Discord utilizando Rich Presence.
- Fácil de configurar y usar.

## Instalación

### Extensión del Navegador

1. Clona este repositorio o descarga el archivo ZIP.
2. Abre tu navegador y ve a `chrome://extensions/` (para Chrome) o `about:addons` (para Firefox).
3. Activa el `Modo de desarrollador` y carga la extensión descomprimida seleccionando la carpeta `extension` dentro del directorio del proyecto.

### Servicio de Rich Presence

1. Asegúrate de tener Python instalado en tu sistema.
2. Instala las dependencias necesarias:
    ```bash
    pip install pypresence requests pillow
    ```
3. Ejecuta el script `main.py`:
    ```bash
    python /path/to/CKworker/servicio_rpc/main.py
    ```

## Uso

1. Abre Twitch en tu navegador.
2. La extensión actualizará automáticamente tu estado de Discord para mostrar tu actividad en Twitch.

## Contribución

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.

