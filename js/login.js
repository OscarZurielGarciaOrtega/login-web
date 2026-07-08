document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-]).{8,}$/;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        
        emailInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        
        if (email === '' || !email.includes('@')) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        
        if (!passwordRegex.test(password)) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        
        if (!isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Acceso Denegado',
                text: 'Por favor, revisa que los datos cumplan con los requisitos marcados en rojo.',
                confirmButtonColor: '#212529'
            });
            return; 
        }

        
        localStorage.setItem('usuarioSistema', email);
        localStorage.setItem('idDeSesion', generarIdSesion());

        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: 'Credenciales válidas. Iniciando sesión...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'index.html';
        });
    });
});