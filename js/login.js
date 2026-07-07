document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

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

        
        if (password === '') {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        
        if (!isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Acceso Denegado',
                text: 'Por favor, revisa los campos marcados en rojo.',
                confirmButtonColor: '#212529'
            });
            return; 
        }

       
        localStorage.setItem('usuarioSistema', email);

        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: 'Iniciando sesión...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            
            window.location.href = 'index.html';
        });
    });
});