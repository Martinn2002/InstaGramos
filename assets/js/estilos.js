// Le voy a poner comentarios linea por linea para que sepas que hace cada cosa, por que uff.

// El event listener ya sabes que hace, se apreta el boton y se ejecuta la funcion. OJO, el id del boton es btn-publicar, al principio se lo puse al formulario completo y cada vez que apretaba el formulario se escribia algo.

document.getElementById('btn-publicar').addEventListener('click', function() {

    // Aqui estoy creando una variable que se llama lista y le estoy asignando el bloque completo de id 'lista-comentarios', buscalo en el html.  
    var lista = document.getElementById('lista-comentarios');
   
// aqui esta la variable texto, que junto con value, lee lo que esta dentro del formulario de texto.
    var texto = document.getElementById('texto-caja').value;

    // Aqui estoy haciendo una validacion, si el texto esta vacio, no hace nada.
    if(texto.length < 1) {
        return
    }else {
    // y aqui lo mas "complicado". Lista, que es el bloque de comentarios, le estoy agregando un nuevo bloque completo de comentarios, usando innerHTML entro al bloque para modificarlo desde dentro del HTML, que es lo que se ve en la pagina obviamente. se escribe igual como si fueras a agregar un nuevo comentario en el html, pero se concatena con la variable texto, que es lo que esta escrito en el formulario.
    lista.innerHTML +=
        '<li><div class="comentario">' +
          '<img src="assets/imgs/walter.jpeg" alt="">' +
          '<strong>Heisenberg</strong>' +
          '<p>' + texto + '</p>' +
        '</div></li>';

        document.getElementById('texto-caja').value = '' // Aqui estoy limpiando la caja, para que quede vacio una vez que se aprete el boton de enviar comentario.
        }
}) 

//Se podria hacer una variable para el nombre de usuario y la foto, pero lo esencial es que el comentario se guarde y es pal lunes esto asi que tutito 😴.


// Nota adicional, el formulario es type "button" por que si lo escribes con type "submit" se recarga la pagina y no queda guardado el comentario.
    

document.getElementById('btn-login').addEventListener('click', function() {
    var nombre = document.getElementById('usuario').value; 
    var fotoInput = document.getElementById('foto'); // Obtenemos el input
    var elementos = document.querySelectorAll('.no-se-muestra');
    
    elementos.forEach(function(elemento) {
        elemento.classList.remove('no-se-muestra');
        elemento.classList.add('se-muestra');
    });
    
    var popup = document.querySelector('.login-popup');
    popup.classList.add('no-se-muestra');

    if (fotoInput.files && fotoInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // selecciona todas las imágenes con la clase 'usuario-img'
            var imagenes = document.querySelectorAll('.usuario-img');
            imagenes.forEach(function(img) {
                img.src = e.target.result;
            });
        };
        reader.readAsDataURL(fotoInput.files[0]);
    }
});


document.getElementsByClassName('expandir-imperio')[0].addEventListener('click', function() {
    var popup = document.querySelector('.expandir-imperio');
    popup.classList.add('no-se-muestra');
    var sugeridos = document.querySelectorAll('.sugeridos');
    for (var i = 0; i < sugeridos.length; i++) {
        sugeridos[i].classList.remove('sugeridos');
        sugeridos[i].classList.add('se-muestra');
    }
})
