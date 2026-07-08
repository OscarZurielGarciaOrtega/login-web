

function validarCorreo(correo) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);
}

function validarPassword(password) {
  const patron = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  return patron.test(password);
}

function validarNumeroControl(numero) {
 
  const patron = /^\d{6}$/;
  return patron.test(numero);
}

function esMayorDeEdad(edad) {
  return Number(edad) >= 18;
}


function generarIdSesion() {
  return Math.random().toString(36).substring(2, 12);
}