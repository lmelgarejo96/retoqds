## EJECUTAR SIN DOCKER
- Se debe dar `npm install` antes de iniciar
- La aplicación se inicia con `npm start`
- El puerto establecido por defecto es el `PORT: 3200`
- El endpoint para el servicio de la matriz es `/api/v1/matrix`


## EJECUTAR CON DOCKER
- Posicionarse dentro del directorio retoqds y ejecutar ` docker build . -t retoqds`
- Luego, ejecutar el comando `docker run -p 3200:3200 retoqds`
- El endpoint para el servicio de la matriz es `/api/v1/matrix`


- En ambos casos la url completa del servicio es POST`http://localhost:3200/api/v1/matrix`