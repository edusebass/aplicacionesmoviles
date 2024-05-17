# Photo Gallery

Aplicación móvil con splash screen para tomar, guardar y borrar fotos.

#### APK: Descarga el [.apk](photo-gallery/src/assets/app-debug.apk)

## Autores

- Eduardo Almachi - [@edusebass](https://github.com/edusebass)
- Brittany Espinel - [@brittanypallasco2003](https://github.com/brittanypallasco2003)
- Melany Sangucho - [@SanguchoMela](https://github.com/SanguchoMela)

<!--
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
-->

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
  Si utilizas Visual Studio Code, instala la extensión de Ionic,
  ve a photo-gallery>Configuration>Splash Screen & Icon
  y reconstruye
```

  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/ionic_ext.jpg" width="250px">
  </p>

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
    <img src="./photo-gallery/src/assets/capturas/icon.jpg" width="250px">
  </p>

- Splash screen
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/splash_screen.jpg" width="250px">
  </p>

- Tomar fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/tomar.jpg" width="250px">
  </p>

- Eliminar fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/eliminar.jpg" width="250px">
  </p>

- Galería de Fotos
  <p align="center">
    <img src="./photo-gallery/src/assets/capturas/galeria.jpg" width="250px">
  </p>

## Conclusiones

- La extensión de Ionic para Visual Studio Code reduce de forma significativa la generación y construcción de un splash screen y el ícono de la apliación. En lugar de escribir algún comando solo se debe hacer clic en el Rebuild de la opción Splash Screen & Icon y listo.
- La redacción de un buen archivo .md, que incluya instrucciones claras y evidencias de funcionamiento, facilita la reutilización del código y ayuda a cualquier interesado a correr el programa en un entorno local.
- Ionic permite desarrollar aplicaciones móviles para múltiples plataformas (iOS, Android) utilizando una sola base de código, lo que reduce el tiempo y el esfuerzo necesarios para desarrollar y mantener aplicaciones en diferentes sistemas operativos.
- Ionic proporciona una amplia colección de componentes de interfaz de usuario preconstruidos que aseguran una apariencia y comportamiento coherentes en todas las plataformas, mejorando la experiencia del usuario y acelerando el desarrollo.
- Es importante tomar en cuenta el tamaño de las imágenes a utilizar para la splash screen. Si no se respetan las resoluciones de imágenes establecidas, ni el comando ni la extensión de Visual Studio permitirán la construcción de esta pantalla.
- Los dispositivos con android 12 o 12L no mostrarán la splash-screen creada, dado un error del sistema operativo, en el caso de ser ejecutada desde el IDE de Android Studio u otros mencionados en la documentacion de Capacitor. Por lo tanto, para probar su correcta implementación se deben utilizar emuladores con android 13 o usar la opción: *Pair Devices Using Wi-fi*.
