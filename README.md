# Photo Gallery

Aplicación móvil con splash screen para tomar, guardar y borrar fotos.

#### APK: Descarga el [.apk](photo-gallery/src/assets/app-debug.apk)

## Autores

- Eduardo Almachi - [@edusebass](https://github.com/edusebass)
- Brittany Espinel - [@brittanypallasco2003](https://github.com/brittanypallasco2003)
- Melany Sangucho - [@SanguchoMela](https://github.com/SanguchoMela)


## Cómo crear el proyecto

Instala ionic
```bash
  npm i -g @ionic/cli
```

Crea el proyecto
```bash
  ionic start photo-gallery tabs --type=angular --capacitor
```

Cambia el directorio
```bash
  cd photo-gallery
```

Instala las librerías necesarias
```bash
  npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```
```bash
  npm install @ionic/pwa-elements
```

Genera una carpeta para las dependencias
```bash
  ionic g service services/photo
```

## Cómo correr el proyecto
Instala ionic
```bash
  npm i -g @ionic/cli
```

Clona este repositorio
```bash
  git clone https://github.com/edusebass/aplicacionesmoviles.git
```

Cambia el directorio
```bash
  cd aplicacionesmoviles/photo-gallery
```

Instala los paquetes
```bash
  npm i
```

Correlo en la web
```bash
  ionic serve
```

## Despliegue en Android

Construye con la splash screen
```bash
  Si utilizas Visual Studio Code, instala la extensión de ionic,
  ve a photo-gallery>Configuration>Splash Screen & Icon 
  y reconstruye
```
o usa el comando: 
```bash
  npx @capacitor/assets generate --android
```

Construye con Android Studio
```bash
  ionic capacitor build android
```

## Capturas de funcionamiento

- Icono
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/icon.jpg" width="300px">
  </p>

- Splash screen
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/splash_screen.jpg" width="300px">
  </p>

- Tomar fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/tomar.jpg" width="300px">
  </p>

- Eliminar fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/eliminar.jpg" width="300px">
  </p>

- Galería de Fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/galeria.jpg" width="300px">
  </p>
