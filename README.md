# App de Clima — React + Vite

Demo en línea: [https://aplicacion-clima-react-dh-marcos.netlify.app/](https://aplicacion-peliculas-react-digital-ho.netlify.app/)

¡Bienvenido! Esta es una aplicación de clima interactiva y responsiva creada con React y Vite.

Hecho por Marcos — una pequeña app para consultar el clima actual y datos útiles por ciudad.

Características principales
- Búsqueda de ciudades por nombre
- Clima actual: temperatura, descripción, humedad y viento
- Iconos dinámicos según las condiciones del tiempo

Tecnologías
- React (Vite)
- HTML, CSS
- Posible integración con APIs públicas de clima (por ejemplo: OpenWeatherMap)

Cómo ejecutar

1. Instala dependencias

```bash
npm install
```

2. Ejecuta en modo desarrollo (Vite)

```bash
npm run dev
```

3. Para producción

```bash
npm run build
npm run preview
```

Notas
- Si la aplicación usa una API externa para el clima (por ejemplo OpenWeatherMap), crea un archivo `.env` en la raíz con tu clave, por ejemplo:

```text
VITE_WEATHER_API_KEY=tu_api_key_aqui
```

- Diseño y estilos en `src/WeatherApp.css`.
