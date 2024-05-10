- Comando creacion de este proyecto

ionic start photo-gallery tabs --type=angular --capacitor

- Librerias

@capacitor/filesystem @capacitor/preferences @capacitor/camera
@ionic/pwa-elements

_Agrega las fotos dependencias_
ionic g service services/photo

<!-- ionic  formar apk -->

ionic build
ionic capacitor build android
