# Aplicación para reproducir podcasts

Esta aplicación fue creada con create-react-app. Es una Single Page Application de manera que la navegación se realiza siempre en cliente. Se puede ejecutar en modo development o en modo production.
## Clonar repositorio

Se debe clonar el repositorio podcaster-react e instalar sus dependencias. Para clonar el repositorio vía https: https://github.com/bealazo/podcaster-react.git, previamente es necesario tener instalado Git. Para instalar las dependencias es necesario tener instalado un gestor de paquetes como npm o yarn.

## Instalar dependencias del proyecto

Se debe situar en la raíz del proyecto y ejecutar 

npm install

o

yarn install

## Ejecución modo development

Para ejecutar la aplicación en modo desarrollo, se debe situar en la raíz del proyecto y ejecutar:

npm start

o

yarn start

## Ejecución modo production

Para ejecutar la aplicación en modo producción, se debe situar en la raíz del proyecto y ejecutar:

npm run build

o

yarn build

Se puede servir con un servidor estático, por ejemplo con serve, de la siguiente manera:

npm install -g serve

serve -s build

o

yarn global add serve

serve -s build
