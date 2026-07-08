function validarCorreo(correo) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);
}

function validarPassword(password) {

  const patron = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  return patron.test(password);
}

function validarNumeroControl(numero) {
  // Exactamente 6 dígitos
  const patron = /^\d{6}$/;
  return patron.test(numero);
}

function esMayorDeEdad(edad) {
  return Number(edad) >= 18;
}



document.addEventListener("DOMContentLoaded", function () {

  const correoActivo = localStorage.getItem("usuarioSistema");

  if (!correoActivo) {
    window.location.href = "login.html";
    return;
  }


  const spanNombreUsuario = document.getElementById("nombreUsuarioNavbar");
  spanNombreUsuario.textContent = correoActivo.split("@")[0];


  const btnHamburguesa = document.getElementById("btnHamburguesa");
  const sidebar = document.getElementById("sidebar");
  const contenidoPrincipal = document.getElementById("contenidoPrincipal");

  btnHamburguesa.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-colapsado");
    contenidoPrincipal.classList.toggle("contenido-expandida");
  });


  const btnMenuUsuarios = document.getElementById("btnMenuUsuarios");
  const submenuUsuarios = document.getElementById("submenuUsuarios");

  btnMenuUsuarios.addEventListener("click", function () {
    submenuUsuarios.classList.toggle("submenu-abierto");

    btnMenuUsuarios.classList.toggle("menu-activo");
  });


  const linkCaptura = document.getElementById("linkCaptura");
  const linkAlumnos = document.getElementById("linkAlumnos");
  const seccionCaptura = document.getElementById("seccionCaptura");
  const seccionAlumnos = document.getElementById("seccionAlumnos");

  function mostrarSeccion(seccionAMostrar) {

    [seccionCaptura, seccionAlumnos].forEach((seccion) =>
      seccion.classList.add("d-none")
    );

    seccionAMostrar.classList.remove("d-none");
  }

  linkCaptura.addEventListener("click", function (e) {
    e.preventDefault();
    mostrarSeccion(seccionCaptura);
  });

  linkAlumnos.addEventListener("click", function (e) {
    e.preventDefault();
    mostrarSeccion(seccionAlumnos);
  });


  const formCaptura = document.getElementById("formCaptura");
  const mensajeCaptura = document.getElementById("mensajeCaptura");

  formCaptura.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("capturaNombre").value.trim();
    const correo = document.getElementById("capturaCorreo").value.trim();
    const password = document.getElementById("capturaPassword").value.trim();

    if (nombre === "") {
      mensajeCaptura.className = "text-danger mt-2";
      mensajeCaptura.textContent = "El nombre de usuario es obligatorio.";
      return;
    }

    if (!validarCorreo(correo)) {
      mensajeCaptura.className = "text-danger mt-2";
      mensajeCaptura.textContent = "El correo no es válido.";
      return;
    }

    if (!validarPassword(password)) {
      mensajeCaptura.className = "text-danger mt-2";
      mensajeCaptura.textContent =
        "La contraseña debe tener mínimo 6 caracteres, con letras y números.";
      return;
    }


    mensajeCaptura.className = "text-success mt-2";
    mensajeCaptura.textContent = `Usuario "${nombre}" capturado correctamente.`;
    formCaptura.reset();
  });


  const formAlumno = document.getElementById("formAlumno");
  const mensajeAlumno = document.getElementById("mensajeAlumno");

  formAlumno.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreAlumno = document.getElementById("alumnoNombre").value.trim();
    const numeroControl = document
      .getElementById("alumnoNumeroControl")
      .value.trim();
    const edad = document.getElementById("alumnoEdad").value.trim();

    if (nombreAlumno === "") {
      mensajeAlumno.className = "text-danger mt-2";
      mensajeAlumno.textContent = "El nombre del alumno es obligatorio.";
      return;
    }


    if (!validarNumeroControl(numeroControl)) {
      mensajeAlumno.className = "text-danger mt-2";
      mensajeAlumno.textContent =
        "El número de control debe tener exactamente 6 dígitos.";
      return;
    }

    if (edad === "" || isNaN(edad) || Number(edad) < 0) {
      mensajeAlumno.className = "text-danger mt-2";
      mensajeAlumno.textContent = "Ingresa una edad válida.";
      return;
    }


    mensajeAlumno.textContent = "";


    const esMayor = esMayorDeEdad(edad);

    ModalUI.mostrar({
      titulo: esMayor ? "Mayor de edad" : "Menor de edad",
      cuerpo: esMayor
        ? `${nombreAlumno} (control ${numeroControl}) es mayor de edad (${edad} años).`
        : `${nombreAlumno} (control ${numeroControl}) es menor de edad (${edad} años).`,
      botones: [
        { texto: "Aceptar", tipo: "primario" }
      ]
    });

    formAlumno.reset();
  });


  const btnSalir = document.getElementById("btnSalir");

  btnSalir.addEventListener("click", function (evento) {
    evento.preventDefault();
    localStorage.removeItem("usuarioSistema");
    window.location.href = "login.html";
  });
});