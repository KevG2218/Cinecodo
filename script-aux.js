//Este script fue creado para probar el login, NO fucionar con script.js
//el motivo es por que las funciones juntas generan error debido a que la mayoria 
//de ellas estan orientadas a hacer algo en especifico en el index, lo que hace 
//que en el login las funciones no sepan que hacer y el js colapsa

const username = document.getElementById('username');
const password = document.getElementById('password');
const botonLogin = document.getElementById('boton-login');


document.addEventListener('DOMContentLoaded',()=> {
    const formulario = document.querySelector('form');

//mostrar y ocultar el mensaje de error

const mostrarError = (input,mensaje) => {
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

function validarUsuario(usuario, mensaje){
    const aux = document.getElementById(usuario);
    const user = aux.value.trim();

    if(user === ''){
        mostrarError(aux, 'el usuario es obligatorio');
        return false;
    } else if (user === "usuario"){
        eliminarError(aux);
        return true;
    }
}

//validacion de contraseña

function validarPass(password, mensaje){
    const aux = document.getElementById(password);
    const pass = aux.value.trim();

    if(pass === ''){
        mostrarError(aux, 'la contraseña es obligatoria');
        return false;
    } else if (pass === "1234"){
        eliminarError(aux);
        return true;
    }
}

const validarFormulario = () => {
    let validar = true;

    validar = validarUsuario('username','el usuario no es valido') && validar;

    validar = validarPass('password','el usuario no es valido') && validar;

    return validar;
}


formulario.querySelectorAll('input').forEach(input =>{
    input.addEventListener('change',()=>{
        const valor = input.value.trim();
        if(valor !== ''){
            eliminarError(input)
        }
    })

})

formulario.addEventListener('submit',event =>{
    event.preventDefault();
    if(!validarFormulario()){
        event.preventDefault();
    } else{
        
        redirec();
        console.log("formulario enviado");
    }
})

//redireccion al index.html
function redirec() {
    window.location.href = 'index.html';
}
})

