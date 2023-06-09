


const registrarUsuario=()=>{
    var correo=document.querySelector("#correo").value;
var password=document.querySelector("#password").value;
var nombre=document.querySelector("#nombre").value;

if(correo.trim()===''||
password.trim()===''||
nombre.trim()=== ''){
    Swal.fire({
icon: 'error',
title:'ERROR',
text: 'FALTA LLENAR CAMPOS',
footer:'CRUD CONTACTOS'
    })
    return;
}

if(!validarCorreo(correo)){
    Swal.fire({
        icon: 'error',
        title:'ERROR',
        text: 'INTRODUCE UN CORREO ELECTRONICO VALIDO',
        footer:'CRUD CONTACTOS' 
    })
    return;
    }
    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title:'ERROR',
            html: 'INTRODUCE UN PASSWORD VALIDO <br> [Mayusculas, minusculas, numeros y min. 8 Caracteres]',
            footer:'CRUD CONTACTOS' 
        })
        return;
        }
        if(!validarNombre(nombre)){
            Swal.fire({
                icon: 'error',
                title:'ERROR',
                text: 'INTRODUCE UN NOMBRE VALIDO',
                footer:'CRUD CONTACTOS' 
            })
            return;
            }

            // INSERTAR A LA BASE DE DATOS
            const datos=new FormData();
            datos.append("correo",correo);
            datos.append("password",password);
            datos.append("nombre",nombre);
    }
