## Cliente Gateway
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.

## Dev
1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Tener levantados los microservicios  que se van a consumir
6. Levantar proyecto con `pnpm run start:dev`

## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```