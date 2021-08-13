# Chat Room
###### Este es un pequeño ejemplo de una app de chat creada con Node, GraphQL y VueJs
## Instalacion
### Server

```bash
cd chat-room/server/
npm install
npm run serve
```
### Frontend

```bash
cd chat-room/frontend/
npm install
npm run serve
```
## Configuracion
### Server

###### Se debe agregar tu conexion a MongoDB en la siguiente linea

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/tu-conexion-aqui");
```
