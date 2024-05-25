// API UTILIZADA https://reqres.in/
// USUARIO: eve.holt@reqres.in
// CONTRASEÑA: cityslicka

// * ANOTACIONES *
// por algun motivo, cuando se prueba un error y luego se ingresa el usuario y la contraseña correctamente, hay que hacer 2 clicks aun no se por que.
// falta mejorar la logica de validarFormulario ya que cuando validarPass() es la contraseña correcta pero el usuario es incorrecto, no muestra el mensaje de error correspondiente


document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    //mostrar y ocultar el mensaje de error

    const mostrarError = (input, mensaje) => {
        const div = input.parentNode;
        const errorText = div.querySelector('.error-text');
        div.classList.add('error');
        errorText.innerText = mensaje;
    }

    const eliminarError = input => {
        const div = input.parentNode;
        div.classList.remove('error');
        const errorText = div.querySelector('.error-text');
        errorText.innerText = '';
    }


    //validacion del usuario

    function validarUsuario(usuario, mensaje) {
        const aux = document.getElementById(usuario);
        const user = aux.value.trim();
        if (user === '') {
            mostrarError(aux, 'el usuario es obligatorio');
            return false;
        } else if (user === "eve.holt@reqres.in"){
            eliminarError(aux);
            return true;
        } else{
            return false;
        }
    }

    //validacion de contraseña

    function validarPass(password, mensaje) {
        const aux = document.getElementById(password);
        const pass = aux.value.trim();
        if (pass === '') {
            mostrarError(aux, 'la contraseña es obligatoria');
            return false;
        } else if (pass === "cityslicka"){
            eliminarError(aux);
            return true;
        } else{
            mostrarError(aux, mensaje);
            return false;
        }
    }

    const validarFormulario = () => {
        let validar = true;
        validar = validarUsuario('username') && validar;
        validar = validarPass('password','Usuario o contraseña incorrectos') && validar;
        return validar;
    }


    formulario.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', () => {
            const valor = input.value.trim();
            if (valor !== '') {
                eliminarError(input)
            }
        })
    })

    formulario.addEventListener('submit',async event => {
        event.preventDefault();
        if (!validarFormulario()) {
            event.preventDefault();
        }
        else{
            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();
                const token = await iniciarSesion(user,pass);
                console.log('Token de autenticación:', token);
                //si se comenta redirec() se puede ver el recibimiento del token de la api
                redirec();
        }
    });

    // se compara el usuario ingresado con el de la api mediante un post
    async function iniciarSesion(user,pass){
        const login = {
            email: user,
            password: pass
        };

        const aux = await fetch('https://reqres.in/api/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });
        const resultado = await aux.json();
        return resultado.token;
    }

    //redireccion al index.html
    function redirec() {
        window.location.href = 'index.html';
    }
});