# Sistema Web para Gestión de Citas en Consultorios

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un **sistema web para la gestión de citas en consultorios pequeños**, el cual permite administrar información de pacientes y facilitar la programación de consultas médicas.

El proyecto se desarrolla utilizando la metodología **Scrum**, organizando el trabajo en diferentes **Sprints** que permiten implementar funcionalidades de manera incremental.

En el **Sprint 3** se desarrolló el módulo de gestión de pacientes, permitiendo realizar operaciones de búsqueda, edición y eliminación de registros mediante una API REST desarrollada con **Node.js y Express**.

---

# Objetivo del sistema

Desarrollar un sistema web que permita a consultorios pequeños gestionar de manera eficiente la información de pacientes y la programación de citas médicas.

---

# Tecnologías utilizadas

Las tecnologías utilizadas para el desarrollo del proyecto son las siguientes:

* Node.js
* Express
* JavaScript
* REST API
* Git
* GitHub

---

# Estructura del proyecto

```
sistema-citas
│
├── server.js
├── package.json
│
├── routes
│   └── pacientes.js
│
└── data
    └── pacientes.js
```

---

# Instalación del proyecto

Para ejecutar el proyecto en un entorno local se deben seguir los siguientes pasos.

### 1 Clonar el repositorio

```bash
git clone https://github.com/usuario/sistema-citas.git
```

### 2 Entrar a la carpeta del proyecto

```bash
cd sistema-citas
```

### 3 Instalar dependencias

```bash
npm install
```

### 4 Ejecutar el servidor

```bash
node server.js
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

# Endpoints de la API

## Obtener todos los pacientes

GET

```
/api/pacientes
```

---

## Buscar pacientes por nombre

GET

```
/api/pacientes/buscar/:nombre
```

Ejemplo:

```
/api/pacientes/buscar/juan
```

---

## Registrar paciente

POST

```
/api/pacientes
```

Body JSON:

```
{
 "nombre": "Carlos Ruiz",
 "telefono": "3311111111",
 "correo": "carlos@email.com",
 "observaciones": "Primera consulta"
}
```

---

## Editar paciente

PUT

```
/api/pacientes/:id
```

Ejemplo:

```
/api/pacientes/1
```

---

## Eliminar paciente

DELETE

```
/api/pacientes/:id
```

---

# Resultados del Sprint 3

Durante el desarrollo del tercer Sprint se implementaron las siguientes funcionalidades:

* Implementación de la API REST para la gestión de pacientes.
* Funcionalidad para registrar nuevos pacientes.
* Implementación de búsqueda de pacientes por nombre.
* Actualización de información de pacientes.
* Eliminación de registros de pacientes.
* Mejora de la estructura del proyecto.

Estas funcionalidades permiten gestionar de forma eficiente la información de los pacientes dentro del sistema.

---

# Metodología de desarrollo

El proyecto se desarrolla utilizando la metodología **Scrum**, la cual permite organizar el trabajo en ciclos cortos llamados **Sprints**, donde se implementan funcionalidades específicas del sistema.

Cada Sprint incluye las siguientes etapas:

* Planificación del Sprint
* Desarrollo de funcionalidades
* Revisión del Sprint
* Reunión retrospectiva

---

# Integrantes del equipo

* Brayan Raymundo Salas Rodríguez
* Axel Mauricio Barraza Cárdenas
* Jesús Alejandro Sainz Maldonado

---

# Estado actual del proyecto

Actualmente el sistema cuenta con las siguientes funcionalidades:

* Configuración del entorno de desarrollo.
* Implementación de la estructura base del sistema.
* Desarrollo de API REST con Node.js.
* Gestión de pacientes (crear, buscar, editar y eliminar registros).

En los siguientes Sprints se planea implementar el **módulo de programación de citas médicas**.

---

# Licencia

Este proyecto fue desarrollado con fines **académicos** como parte de la asignatura de **Proyecto VII**.

