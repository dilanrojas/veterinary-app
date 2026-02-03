# Proyecto | Desarrollo de Software II

Una veterinaria requiere una aplicación web para que sus clientes puedan gestionar
la información de sus mascotas y consultar datos relevantes de atención. El sistema
debe ofrecer una experiencia clara, rápida y responsiva, enfocada únicamente en el
rol cliente.

## Objetivo general

Desarrollar una aplicación web en React que permita a un cliente visualizar y
administrar información básica de sus mascotas mediante un conjunto mínimo de
pantallas y navegación, aplicando buenas prácticas de desarrollo, control de
versiones y pruebas E2E.

## Stack

  - **[Vite](https://vite.dev/)**: Vite es una herramienta de creación de interfaz increíblemente rápida que impulsa la próxima generación de aplicaciones web.
  - **[React](https://react.dev/)**: Biblioteca JavaScript para interfaces de usuario web y nativas
  - **[TypeScript](https://www.typescriptlang.org/)**: Lenguaje de programación fuertemente tipado que se basa en JavaScript

## Integrantes


| Name                    | Branch            |
|-------------------------|-------------------|
| Dilan Rojas Vargas      | feature/dilan     |
| Josue Aparicio Alfaro   | feature/aparicio  |
| Josue Ramirez Cespedez  | feature/josue     |
| Jonathan Ruiz Ulate     | feature/jonathan  |
| Brian Porras Herrera    | feature/brian     |


## Cómo ejecutar la aplicación

### Requisitos

  - [NodeJS](https://nodejs.org/en)

### Clona el repositorio

```
git clone https://github.com/dilanrojas/veterinary-app
cd veterinary-app
```

### Instalar dependencias

```
npm install
```

### Iniciar el proyecto

```bash
npm run dev
```

### Estructura de la aplicación

```
src/
 ├── assets/
 │    └── icons.tsx
 ├── components/
 │    ├── Header/
 │    │    ├── Header.tsx
 │    │    └── Header.css
 │    ├── Footer/
 │    │    ├── Footer.tsx
 │    │    └── Footer.css
 │    └── ...
 ├── data/
 │    └── clients.json # --> Datos de clientes simulados
 ├── layouts/
 │    ├── RootLayout/
 │    │    ├── RootLayout.tsx
 │    │    └── RootLayout.css
 │    └── ...
 ├── lib/
 │    └── types.ts # --> Tipado con TypeScript
 ├── pages/
 │    ├── Welcome.tsx # --> Login/SignUp
 │    ├── Home.tsx
 │    ├── ClientProfile.tsx
 │    ├── PetList.tsx
 │    └── PetProfile.tsx
 ├── App.tsx # --> <Routes /> para cada página
 └── main.tsx
```

### Navegación entre páginas

#### useNavigate (hook de react)

useNavigate se utiliza cuando la navegación depende de lógica (login, validación).

```jsx
import { useNavigate } from "react-router-dom";

export default function UsageExample() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (condition) {
      navigate("/home"); // redirect
    } else {
      alert("Condition not met");
    }
  };

  return (
    <h1>Page content</h1>
  )
}
```

#### Link component

Link se utiliza para navegación del usuario (menú, botones, navbar).

```jsx
import { Link } from 'react-router-dom';

export default function UsageExample() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/petlist'>Mascotas</Link> // redirects to /petlist page as defined inside <Routes />
            <Link to='/clientprofile'>Mi perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

```

## Historias | Jira

#### Josue Aparicio
- Autenticación

#### Josue Ramirez
- Página Pet List

#### Jonathan Ruiz
- Página Inicio
- Página Home

#### Brian Porras

#### Dilan Rojas
- Registro de mascotas
- Navegación General de la Aplicación

### Comandos Git necesarios

#### Cambiar a tu branch

```git
git checkout feature/nombre
```

#### Guardar cambios y hacer commit

```git
git add . # '.' añade todos los cambios. Mas específico --> git add ./src/App.css
git commit -m "Describe los cambios"
```

#### Hacer "push" de los cambios

```git
git push origin feature/nombre
```

#### Estar al día con la rama main

```git
git checkout main
git pull origin main
git checkout feature/nombre
git merge main
```
