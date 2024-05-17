# Evaluación - parte 2 - Desarrollo de un login con firebase - 50%

## Descripcion

Implementar un login con firebase y generar la apk.

La aplicación debe tener un splash screen con su foto y la primera pantalla debe mostrar su cv.

Entregable:

Repositorio de github con readme detallado indicando la funcionalidad.

Utilizar las siguientes credenciales:

const firebaseConfig = {

apiKey: "AIzaSyCGtF4FJjZKE1_7145pt4nFsW98hLi_QrI",

authDomain: "a-aa1b2.firebaseapp.com",

projectId: "a-aa1b2",

storageBucket: "a-aa1b2.appspot.com",

messagingSenderId: "340088945622",

appId: "1:340088945622:web:1b71dfe349b05b239c0277",

measurementId: "G-T048FCYN8K"

};

### Comandos utilizados

ionic start devdacticFire blank --type=angular
cd ./devdacticFire

ionic g page login
ionic g service services/auth
ionic g service services/avatar

npm i
ng add @angular/fire

## LA APK GENERADA SE ENCUENTRA EN EL REPO `./app-debug.apk`

# ICONO DE LA APP

![alt text](image.png)

# SPLASH SCREEN

![alt text](image-1.png)

# LOGIN Y REGISTRO

Para el login simplemente se utiliza las credenciales para registrarse debe dar en registrarse una vez llenado los campos

![alt text](image-4.png)

# CV en la pagina al iniciar sesion

![alt text](image-3.png)
