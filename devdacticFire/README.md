ionic start devdacticFire blank --type=angular
cd ./devdacticFire

ionic g page login
ionic g service services/auth
ionic g service services/avatar

# For image upload with camera

npm i @capacitor/camera
npm i @ionic/pwa-elements

ng add @angular/fire
