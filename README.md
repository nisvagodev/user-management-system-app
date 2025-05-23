<<<<<<< HEAD

# Sistema de gestión de usuarios

Link para ver resultado: [RESULTADO FINAL](https://user-management-system-app.vercel.app/)
![Captura de pantalla del sistema de gestión de usuarios](https://github.com/nisvagodev/user-management-system-app/blob/main/captura-del-sistema.png?raw=true)

## Descripción

El User Management System es una aplicación web desarrollada con React que permite gestionar usuarios de manera eficiente. Ofrece funcionalidades CRUD completas (Crear, Leer, Actualizar y Eliminar) para administrar información de usuarios, junto con páginas informativas y de contacto.

## Características Principales

- 🚀 Gestión completa de usuarios (CRUD)
- 🔍 Búsqueda y filtrado de usuarios por nombre o email
- 📱 Diseño responsive que funciona en dispositivos móviles y desktop
- � Validación de formularios para datos de usuario
- 🧭 Navegación intuitiva con React Router
- ✨ Interfaz moderna con Font Awesome y Google Fonts

## Tecnologías Utilizadas

- Frontend:
  - React 18
  - Vite (como bundler)
  - React Router v6 (para navegación)
  - Font Awesome (para iconos)
  - Google Fonts (Montserrat)

## Estructura del Proyecto

```
user-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── SearchBar/
│   │   ├── UserForm/
│   │   └── UserTable/
│   ├── hooks/
│   │   └── useUserManagement.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── UserListPage.jsx
│   ├── utils/
│   │   └── userHelpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
└── package.json
```

## Instalación y Uso

1. Clona el repositorio:

```
git clone https://github.com/nisvagodev/user-management-system-app.git
cd user-management-system-app
```

2. Instala dependencias:

```
npm install
```

3. Ejecutar en modo desarrollo:

```
npm run dev
```

## Rutas Disponibles

- / - Página de inicio
- /users - Listado y gestión de usuarios
- /contact - Formulario de contacto
- /about - Información sobre el proyecto

## Componentes Principales

### useUserManagement

Hook personalizado que maneja toda la lógica de gestión de usuarios (CRUD operations).

### UserListPage

Página principal que muestra la tabla de usuarios, barra de búsqueda y formulario.

### UserTable

Componente que muestra los usuarios en formato de tabla con opciones para editar y eliminar.

### Navbar

Barra de navegación responsive con menú hamburguesa para dispositivos móviles.

=======

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

> > > > > > > 92ea3c3 (first commit)
