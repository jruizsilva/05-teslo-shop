# Teslo shop

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- MongoDB URL local:

```
MONGO_URL=mongodb://localhost:27017/teslodb
```

## Llenar la base de datos con información de pruebas

Llamara:

```
http://localhost:3000/api/seed
```
