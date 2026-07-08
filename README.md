#  Proyecto: Sistema de Login y Dashboard - Actividad 5
**Asignatura:** Programación Web  
**Catedrático:** Ing. Adelina Martínez  
**Institución:** Instituto Tecnológico de Oaxaca (ITO) - 7mo Semestre  

###  Integrantes del Equipo 
1. **Garcia Ortega Oscar Zuriel** 
2. **Abisaid** 

---

##  Descripción del Proyecto
Este proyecto es una simulación de un sistema web completo (Pantalla de Acceso y Panel Principal), desarrollado con HTML, CSS y JavaScript puro (Vanilla JS). Se implementó un control de acceso del lado del cliente utilizando la API de `localStorage` para la persistencia de datos, asegurando la navegación sin necesidad de un backend. 

* **Framework CSS utilizado:** Bootstrap 5 (Para maquetado responsivo, tarjetas, navbar y modal).
* **Librerías externas:** SweetAlert2 (Para alertas interactivas).

---

##  Explicación del Flujo y Documentación

### 1. El Módulo de Login y Seguridad 
El proceso de acceso inicia en el archivo `login.html`. Las características principales de esta vista son:
* **Validación Estricta (Regex):** Se implementó una Expresión Regular en `login.js` para asegurar contraseñas fuertes. Obliga al usuario a ingresar al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial.
* **Manejo de Errores Visuales:** Si el usuario no cumple los requisitos o deja campos vacíos, se activan las clases `is-invalid` de Bootstrap y se dispara una alerta de SweetAlert2, deteniendo el envío del formulario.
* **Persistencia de Datos:** Al pasar la validación, el sistema utiliza `localStorage` para guardar el correo del usuario (`usuarioSistema`). 
* **Generación de ID:** Se llama a la función `generarIdSesion()` (alojada en `utileria.js`) para crear un token alfanumérico aleatorio (`idDeSesion`) que simula el token de un backend. Finalmente, se redirige a `index.html`.

### 2. Panel Principal y Utilerías


---

##  Proceso de Creación (Paso a Paso)

**Parte 1: Base y Acceso**
1. Inicialización del repositorio y configuración inicial de ramas.
2. Maquetado de la interfaz `login.html` usando el sistema de grillas y componentes (Cards, Form-floating) de Bootstrap 5.
3. Desarrollo del script `login.js` para interceptar el evento `submit`, validando campos y redirigiendo.
4. Separación de código lógico creando el archivo `utileria.js` para almacenar herramientas globales (como el generador de ID).

**Parte 2: Dashboard y Componentes**
* **[ABISAID: ENUMERA AQUÍ LOS PASOS QUE SEGUISTE PARA TU INDEX.HTML Y TU MODAL]**

---

##  Capturas de Pantalla del Flujo

### 1. Pantalla de Acceso 
![Login del Sistema](img/login-captura.png) 
*(Nota: Si se introducen datos incorrectos, los campos se marcan en rojo).*

### 2. Panel Principal (Dashboard)
**[ AGREGA AQUÍ LA IMAGEN DE TU INDEX.HTML Y NAVBAR]**
`![Dashboard](img/ruta-de-tu-imagen.png)`

### 3. Validación de Alumnos y Modal de Edad
**[ AGREGA AQUÍ LA IMAGEN DEL COMPONENTE MODALUI FUNCIONANDO]**
`![Modal](img/ruta-de-tu-imagen.png)`

---

##  Enlaces Oficiales
* **Repositorio en GitHub:** [PEGA AQUÍ EL LINK DEL REPOSITORIO]
* **Sitio en Vivo (GitHub Pages):** [PEGA AQUÍ EL LINK DE GITHUB PAGES]