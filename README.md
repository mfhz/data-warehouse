# Data Warehouse
### Herramienta que permite a una compañía de Marketing administrar todos los contactos de sus clientes para sus campañas.
##### Proyecto #4 del curso de Desarrollo Web Full Stack en Acámica


## Herramientas utilizadas en la elaboración del proyecto

- MySQL
- Xampp
- Postman
- Git
- Node
- Express


## Librerias utilizadas

- Node
- Express
- Express-jwt
- JsonWebToken
- Body-parser
- Mariadb
- Mysql2
- Sequalize
- Helmet
- Bcrypt
- Cors
- Dotenv

## Ejecución del proyecto

#### #1 Clonar repositorio o descargar

Clona el repositorio o descargalo directamente


------------


#### #2 Instalación de dependencias

Descarga e instala las dependencias mencionadas anteriormente en `Librerias utilizadas`

------------


#### #3 Creación e inicialización de la base de datos

- Descargar [XAMPP](https://www.apachefriends.org/es/download.html "XAMPP").
- Iniciar los servicios de Apache y MySQL.
- Crear base de datos
- En la carpeta del proyecto abrir una terminal y declarar las variables de entorno (ver archivo de ejemplo '.env-example'). Este paso es importante para la creacion de las tablas de la BD
- Insertar las tablas en la BD con el siguiente comando:
  	node ./bd/migrate.js
- Una vez estén las tablas insertar la información que van en cada una de ellas.
		node ./bd/data/dataDb.js


------------


#### #4 Inicializar el servidor

Iniciar el servidor:

    node server.js

------------

#### #5 Testing

Realiza todas las pruebas de los Endpoints en postman para poder hacer uso de la API con la base de datos.

------------


#### #6 Ejecución de la aplicación

Abrir el archivo `index.html` iniciando con las credenciales creadas en las variables de entorno.