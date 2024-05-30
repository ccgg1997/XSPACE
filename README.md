# XSpace

## Descripción
XSpace es un juego web 3D en desarrollo donde los jugadores controlan una nave espacial que viaja por diferentes mundos. El objetivo es superar obstáculos, eliminar enemigos y defenderse mientras gestionan vidas limitadas. 

**El juego combina elementos de exploración y aventura espacial en un entorno tridimensional inmersivo. Lo que lo hace único es su enfoque en la narrativa emocionante, los escenarios del espacio exterior y la sensación de soledad que se experimenta al explorar lo desconocido del cosmos.**

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Contribución](#contribución)
4. [Licencia](#licencia)
5. [Autores y Reconocimientos](#autores-y-reconocimientos)
6. [Funcionalidad: Sistema de Disparo](#funcionalidad-sistema-de-disparo)
7. [Ejemplo de uso: Sitema de Disparo](#ejemplo-de-uso-sistema-de-disparo)

## Instalación

### Prerrequisitos
- Node.js >= 14.0.0
- npm >= 6.0.0

### Pasos
1. Clona el repositorio:
   ```sh
   git clone https://github.com/ccgg1997/XSPACE.git
   ```
2. Navega al directorio del proyecto
   ```sh
   cd xspace
   ```
3. Instala las dependencias
   ```sh
   npm install
   ```

## Uso
Para iniciar el juego en modo desarrollo
```sh
npm run dev
```
Visita `http://localhost:3000` en tu navegador para jugar.

### Dependencias
El proyecto utiliza las siguientes dependencias
- `@react-three/cannon`: ^6.6.0
- `@react-three/drei`: ^9.101.0
- `@react-three/fiber`: ^8.16.1
- `@react-three/rapier`: ^1.3.1
- `@types/three`: ^0.162.0
- `bootstrap`: ^5.3.3
- `ecctrl`: ^1.0.77
- `firebase`: ^10.11.1
- `leva`: ^0.9.35
- `r3f-perf`: ^7.1.2
- `react`: ^18.2.0
- `react-bootstrap`: ^2.10.2
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.22.3
- `three`: ^0.162.0
- `vercel`: ^33.5.5

## Contribución
Las contribuciones son bienvenidas, sigue estos pasos para contribuir:
1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commits (git commit -am 'Añade nueva funcionalidad').
4. Sube tus cambios (git push origin feature/nueva-funcionalidad).
5. Abre un pull request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE)

## Autores y reconocimientos
- **Michael Stevens Cardenas**
- **Brigitte Vanesa Chavez**
- **Cristian Camilo Gomez**
- **Andres Mauricio Muñoz**
- **Jose Manuel Bravo**
- **Valeria Suarez**
- **Alejandra Ortega**

Agradecimientos a todos los colaboradores por sus valiosas herramientas y bibliotecas.

## Funcionalidad: Sistema de Disparo 

### Descripción
El sistema de disparo permite a los jugadores disparar proyectiles a los enemigos y obstáculos que se encuentran en su camino. Los proyectiles se generan en la posición de la nave y se mueven en la dirección en la que apunta el jugador, para el desarrollo de esta funcionalidad se toman 3 archivos principales, el componente `Projectile`, el contexto `ProjectilesContext` y el componente `ShootProjectile`.

### Implementación
Para implementar el sistema de disparo, se creó un componente `Projectile` que representa un proyectil. Este componente se encarga de moverse en la dirección en la que fue disparado y de detectar colisiones con los enemigos y obstáculos.

Ubicación del componente `Projectile`:
```sh
src/components/shipSkills/Projectile.jsx
```

**Parametros**
- `position`: Posición inicial del proyectil.
- `id`: Identificador único del proyectil.
- `speed`: Velocidad de movimiento del proyectil. recomendada -50 para un disparo rápido. recordar poner valores negativos para que el proyectil se mueva hacia adelante.

**Uso del componente `Projectile`**
```jsx
<Projectile position={position} id={id} speed={-50} />
```
---

**Contexto de proyectiles**.
Para gestionar los proyectiles, se utiliza un contexto `ProjectileContext` que almacena la lista de proyectiles activos. Este contexto se encarga de añadir, eliminar
y actualizar los proyectiles en el juego.

Ubicación del contexto `ProjectilesContext`:
```sh
src/contexts/ProjectilesContext.jsx
```

**Uso del contexto `ProjectilesContext`**
```jsx
import { useProjectiles } from "../../context/ProjectilesContext";

  const {addProjectile, removeProjectile, paintProjectiles} = useProjectiles();

```
---
**Disparador de proyectiles**
Para disparar un proyectil, se utiliza el componente `ShootProjectile` que se encarga de generar un proyectil en la posición de la nave y de añadirlo al contexto de proyectiles.

Ubicación del componente `ShootProjectile`:
```sh
src/utils/ShootProjectile.js
```

**Uso del componente `ShootProjectile`**
Al ser un disparador de proyectiles debe ser usado en tu archivo donde se encuentran los controles de la nave espacial.
```jsx
import { shootProjectile } from "../../utils/shootProjectile.js";
import { useProjectiles } from "../../context/ProjectilesContext";

const { addProjectile } = useProjectiles();

// Ubicalo en una detección de tecla o botón (tecla `espacio` preferiblemente para conservar la experiencia de juego)
shootProjectile(nave,addProjectile);
```
---
### Ejemplo de uso: Sitema de Disparo
**Controls.jsx**
En el archivo controls de la nave espacial, se importa el componente `ShootProjectile` y se añade un evento para disparar un proyectil al presionar la tecla de espacio.

```jsx
import { useProjectiles } from "../../context/ProjectilesContext";
import { shootProjectile } from "../../utils/shootProjectile.js";
import { useNave } from "../../context/NaveContext";


//resto del código

const { addProjectile } = useProjectiles();
const { nave, setNave } = useNave();

// Evento para disparar un proyectil al presionar la tecla de espacio
useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === ' ' && !game.paused) {
                if (nave.body) {
                    shootProjectile(nave, addProjectile);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nave, addProjectile]);

//resto del código
```
**Level#.jsx**
En el archivo Level# importamos el contexto de proyectiles y utilizamos la función `paintProjectiles` para pintar los proyectiles en el juego, esta funcion retorna un array de proyectiles que se pueden renderizar en el juego.

Solo necesitamos como parametro para paintProjectiles la velocidad de los proyectiles, la cual se recomienda que sea -50 para un disparo rápido.

Por que funciona solo pidiendo el parametro de la velocidad? Recordemos que cuando usamos la funcion shootProjectile, este se encarga de ubicar el proyectil en la posición de la nave y añade de forma automatica el id. (omitiendo asi los parametros de posición e id en el componente Projectile, haciendo falta el unico parametro restante que es la velocidad)

```jsx
import { projectilesContext,useProjectiles } from "../../context/ProjectilesContext";

//resto del código

const { paintProjectiles} = useProjectiles();

//resto del código

return (
    <>
    {paintProjectiles(-50)}
    </>
)
```


### Dudas o preguntas
Si tienes alguna duda o pregunta sobre el sistema de disparo, no dudes en preguntar al desarrollador Jose Manuel Bravo quien realizo esta funcionalidad.
