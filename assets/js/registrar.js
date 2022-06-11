// Variables
const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

let cerrar = document.querySelector(".close");
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelector(".modal");
let modalC = document.querySelector(".NuevoProyecto-btn");
let exit = document.querySelector("#exit");
let addBach = document.querySelector("#add-bach");

// Booleano para el modal
let ModalCerrado;

// EventListeners
eventListeners();

function eventListeners(){

    //Para abrir el menu
    window.addEventListener('click', function(e) {


        //Verificando a donde le dio click
        if(e.target.classList.value == 'NuevoProyecto-btn'){

            modal.classList.toggle('modal-close');
            
            // document.querySelector('.modal-container').style.transform = 'translateY(200%)';
            document.querySelector('.modal-container').style.visibility = 'visible';
            document.querySelector('.modal-container').style.opacity = '1';
        }

        if(e.target.classList.value == 'modal-container' && !ModalCerrado){

            CerrarModal();
        }

        // Cerrando Sesion
        if(e.target == exit){
            
            // Llevando al cliente al login
            window.location = "resources/login.html";
        }

        if(e.target == addBach){
            
            agregarBachiller();
        }

        // Recorrida y condicional para las tarjetas del menu
        // for(let i = 1; i <= 8; i++){

        //     // Validacion del elemento seleccionado en el menu
        //     if((e.target == document.querySelector(`.cta${i}`)) || e.target == document.querySelector(`.text-Op1`) || (e.target == document.querySelector(`.hand${i}`))){

        //         let img;
                
        //         //Transformacion 
        //         if(e.target == document.querySelector(`.text-Op1`)){

        //             console.log(`Es la opcion #${i}`);
        //             console.log(document.querySelector(`.cta${i} p`))
        //         }

        //         // Verificacion de target
        //         if(e.target == document.querySelector(`.hand${i}`) || e.target == document.querySelector(`.cta${i} p`)){

        //             img = e.target.parentElement.parentElement.children[0].src;
        //         }
        //         else{

        //             img = e.target.parentElement.children[0].src;
        //         }

        //         // Verificacion para poner el titulo, descripcion y precio correspondiente
        //         switch (i) {
                    
        //             case 1:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Mision`, 'Realizar mantenimiento a todo dispositivo tecnológico del día a día, brindando una buena calidad de servicio, atención al cliente y todo a un excelente precio con el fin de lograr la satisfacción del cliente.');
        //             break;
                
        //             case 2:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Vision`, 'Ofrecer el mejor servicio de mantenimiento a nivel nacional, con sedes distribuidas en todo el país para la facilidad del cliente al momento en que su dispositivo necesite una limpieza o revisión, agregado a ello, realizar talleres para la capacitación de personas referente al mantenimiento de un computador.');
        //             break;
                
        //             case 3:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Objetivo`, 'Nuestro objetivo es ofrecer el mejor servicio técnico en mantenimiento y recuperación de dispositivos inteligentes, agregado a ello la mejor capacitación de procesos para mantener limpio tu dispositivo como tanto en el hardware y software del sistema.');
        //             break;

        //             case 4:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Sobre Nosotros`, 'Trabajando desde el año 2016 para prestar el mejor servicio de mantenimiento de dispositivos, con personal calificado en el area, herramientas de ultima generacion, su equipo quedara como nuevo al tener nuestra limpieza y optimizacion.');
        //             break;
                    
        //             default:
        //                 break;
        //         }
                
        //         //Bajando el model
        //         modalC.style.opacity = "1";
        //         modalC.style.visibility = "visible";
        //         modal.classList.toggle("modal-close");
        
        //         document.querySelector('.modal-container').style.transform = 'translateY(0%)';
        //     }

        //     // Validacion del elemento seleccionado en el nav desplegable en el diseño responsivo
        //     if(e.target == document.querySelector(`.op${i}`)){

        //         // Ocultar Menu lateral en el diseño responsivo
        //         OcultarMenu();
        //     }
        // }
    });

    //Efecto del boton cerrar
    cerrar.addEventListener('click', CerrarModal);

    //Boton de Despliegue del menu
    iconoMenu.addEventListener('click', e => {

        // Obtenemos la imagen con la direccion puesta
        const rutaActual = e.target.getAttribute('src');

        // Intercambio de las imagenes
        if(rutaActual == 'img/icons/open-menu.png'){

            // Hacemos aparecer el menu
            menu.style.display = 'block';

            // Animacion de izquierda
            setTimeout( () => {
                
                menu.style.transform = 'translate(0px)';      

                // Hacemos el cambio de la imagen del menu
                e.target.setAttribute('src', 'img/icons/open-menu2.png');

            }, 0);
        }
        else{
            // Metodo para ocultar el menu lateral responsivo
            OcultarMenu();
        }
    });
}

function CerrarModal(){

    // Seguro para evitar bug de cierre del modal
    ModalCerrado = true;
    
    modal.classList.toggle('modal-close');

    document.querySelector('.modal-container').style.transform = 'translateY(0%)';

    document.querySelector('.close').style.visibility = 'hidden';

    setTimeout(function() {
        
        document.querySelector('.modal-container').style.visibility = 'hidden';
        document.querySelector('.modal-container').style.opacity = '0';

        document.querySelector('.close').style.visibility = 'visible';

        // Habilitando para que se pueda cerrar nuevamente
        ModalCerrado = false;
    }, 500);
}

function creacionModel(etiqueta, imagen, titulo, descripcion){

    //Cambiando elementos
    etiqueta.children[0].src = imagen;                                      //Imagen
    etiqueta.children[1].children[1].children[0].textContent = titulo;      //Titulo
    etiqueta.children[1].children[1].children[1].textContent = descripcion; //Descripcion
}

function OcultarMenu() {
    
    // Cambio de imagen
    iconoMenu.setAttribute('src', 'img/icons/open-menu.png');

    // Movimiento del menu
    menu.style.transform = 'translate(600px)';

    // Ocultar menu
    setTimeout( () => {
        menu.style.display = 'none';
    }, 250);
}

function agregarBachiller(){

    console.log(addBach.parentElement.classList.value);
    document.querySelector(".bachilleres").innerHTML += `
        <br>
        <div>
            <label for="bachiller">Bachiller</label>
            <label for="bachiller-ci">Cedula</label>
            <label for="bachiller-tlf">Telefono</label>
        </div>

        <div>   
            <input type="text" name="bachiller" id="" placeholder="Nombre y Apellido">
            <input type="text" name="bachiller-ci" id="" placeholder="20000000">
            <input type="text" name="bachiller-tlf" id="" placeholder="04121234567">
        </div>
    `; 

    console.log(addBach.parentElement);
}