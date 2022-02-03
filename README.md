# Karvi's backend challenge
### desarrollado por Gonzalo Herrera Llobeta - CloudX

Puede testear ya mismo este microservicio desplegado en Heroku:

https://krv-challenge.herokuapp.com

Los endpoints solicitados y expuestos son:

https://krv-challenge.herokuapp.com/firstEndpoint?site=ar

https://krv-challenge.herokuapp.com/secondEndpoint?site=ar&ids=330964,22627843340

**1) Como desplegar localmente este MS?**

Luego de clonar el repositorio, deberá abrir su consola, ubicarse en el directorio raíz del proyecto e instalar las dependencias corriendo: 
> npm install

Luego, deberá inicializar la aplicación corriendo:
> npm run dev

Si en realidad Ud prefiere correr la versión productiva, deberá desde su consola y en el directorio raíz del proyecto, primero traspilar corriendo:
> tsc

y luego
> node dist/index.js

Tenga en cuenta que para correr la versión traspilada deberá tener instalado typescript globalmente, lo que puede hacer corriendo en su consola:
> npm install -g typescript 

**2) Como testear este MS?**

Una vez instaladas las dependencias del proyecto (ver punto 1), deberá correr en su consola y en el directorio raíz del proyecto:
> npm run test

**3) A tener en cuenta**

Este proyecto tiene comentarios en linea con el mismo código únicamente por ser un challenge y para poder explicar mi proceso, pero es entendible que en un entorno productivo uno se adapta a las determinaciones de estilo del negocio.
Todos los archivos fueron formateados sin trailing spaces y con indentaciones de 4 espacios.
En algunos casos se usaron ternarios y en otros if estandares.
También se implementó un middleware demostrativo aunque no necesariamente indispensable.

