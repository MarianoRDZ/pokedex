# Pokedex

Una aplicación web para explorar y buscar Pokémon usando la [PokeAPI](https://pokeapi.co/). Desarrollada con React, Redux Toolkit y Styled Components.
La aplicación está deployada en Github Pages y puede ser accedida en el siguiente link: https://marianordz.github.io/pokedex/

---

## Funcionalidades

- Búsqueda en tiempo real por nombre de Pokémon
- Lista de tarjetas con información básica
- Modal con detalles del Pokémon seleccionado
- Colores personalizados según el tipo de Pokémon

---

## Prerrequisitos

- [Node.js](https://nodejs.org/) 18 en adelante, recomendado LTS, para uso sin Docker
- [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/install/) para usar con Docker
- Archivo `.env` en el root del proyecto con el siguiente contenido dentro: `VITE_POKEMON_API=https://pokeapi.co/api/v2`

---

## Uso sin Docker

#### 1. Cloná el repositorio

```bash
git clone https://github.com/MarianoRDZ/pokedex
cd pokedex
```

#### 2. Instalá las dependencias

```bash
npm install
```

#### 3. Levantá la app en modo desarrollo

```bash
npm run dev
```

#### 4. Abrí en el navegador en http://localhost:5173

## Uso con Docker

### Desarrollo

#### 1. Levantá el contenedor de desarrollo

```bash
docker-compose up pokedex-dev --build
```

#### 2. Abrí en el navegador en http://localhost:5173

<br>

### Producción

#### 1. Levantá el contenedor de producción

```bash
docker-compose up pokedex --build
```

#### 2. Abrí en el navegador en http://localhost:3000

## Tests

Para correr los tests localmente (sin Docker):

```bash
npm test
```

##### Notas

- En modo desarrollo con Docker, el proyecto se monta como volumen para habilitar hot reload
- En producción, la app se sirve como archivos estáticos vía Nginx para mejor rendimiento
