// ==================================================
// ELEMENTOS
// ==================================================

const btnSi =
    document.getElementById("btnSi");


const btnNo =
    document.getElementById("btnNo");


const tarjeta =
    document.getElementById("tarjeta");


const acertijo =
    document.getElementById("acertijo");


const mensaje =
    document.getElementById("mensaje");


const respuesta =
    document.getElementById("respuesta");


const btnDescubrir =
    document.getElementById("btnDescubrir");


const mensajeAcertijo =
    document.getElementById("mensajeAcertijo");


const pregunta1 =
    document.getElementById("pregunta1");


const revelacion1 =
    document.getElementById("revelacion1");


const mensajePregunta1 =
    document.getElementById("mensajePregunta1");


const btnPregunta2 =
    document.getElementById("btnPregunta2");


const pregunta2 =
    document.getElementById("pregunta2");


const revelacion2 =
    document.getElementById("revelacion2");


const mensajePregunta2 =
    document.getElementById("mensajePregunta2");


const btnCarta =
    document.getElementById("btnCarta");


const carta =
    document.getElementById("carta");


const sobre =
    document.querySelector(".sobre");


const sobreContenedor =
    document.getElementById("sobreContenedor");


const btnAbrirCarta =
    document.getElementById("btnAbrirCarta");


const papelCarta =
    document.getElementById("papelCarta");


const textoAbrir =
    document.querySelector(".texto-abrir");


// ==================================================
// FUNCIÓN PARA CAMBIAR DE PANTALLA
// ==================================================

function mostrarPantalla(pantallaMostrar) {

    const pantallas = [

        tarjeta,

        acertijo,

        pregunta1,

        revelacion1,

        pregunta2,

        revelacion2,

        carta

    ];


    pantallas.forEach(function (pantalla) {

        pantalla.style.display =
            "none";

    });


    // ----------------------------------------------
    // LA CARTA NECESITA FLEX PARA CENTRAR EL SOBRE
    // ----------------------------------------------

    if (pantallaMostrar === carta) {

        pantallaMostrar.style.display =
            "flex";

    } else {

        pantallaMostrar.style.display =
            "block";

    }

}


// ==================================================
// PANTALLA 1
// ==================================================

btnSi.addEventListener(
    "click",
    function () {

        mostrarPantalla(acertijo);

        setTimeout(function () {

            respuesta.focus();

        }, 100);

    }
);


btnNo.addEventListener(
    "click",
    function () {

        mensaje.textContent =
            "Mmm... creo que debes pensarlo mejor 👀";


        btnNo.style.transform =
            "translateX(8px)";


        setTimeout(function () {

            btnNo.style.transform =
                "translateX(-8px)";

        }, 100);


        setTimeout(function () {

            btnNo.style.transform =
                "translateX(0)";

        }, 200);

    }
);


// ==================================================
// ACERTIJO
// ==================================================

function comprobarRespuesta() {

    const valor =
        respuesta.value
        .trim()
        .toUpperCase();


    if (valor === "") {

        mensajeAcertijo.textContent =
            "Primero tienes que intentar responder 👀";


        respuesta.focus();

        return;

    }


    if (valor === "LUZ") {

        mensajeAcertijo.textContent =
            "✨ Correcto...";


        setTimeout(function () {

            mostrarPantalla(pregunta1);

        }, 900);


        return;

    }


    mensajeAcertijo.textContent =
        "Mmm... piensa en esa palabra que elegiste para describirte 💭";


    respuesta.value =
        "";


    respuesta.focus();

}


btnDescubrir.addEventListener(
    "click",
    function () {

        comprobarRespuesta();

    }
);


respuesta.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Enter") {

            comprobarRespuesta();

        }

    }
);


// ==================================================
// PREGUNTA 1
// ==================================================

const opciones1 =
    document.querySelectorAll(
        "#pregunta1 .opcion"
    );


opciones1.forEach(
    function (opcion) {

        opcion.addEventListener(
            "click",
            function () {

                mensajePregunta1.textContent =
                    "Mmm... interesante elección 💭";


                setTimeout(
                    function () {

                        mostrarPantalla(
                            revelacion1
                        );

                    },
                    1000
                );

            }
        );

    }
);


// ==================================================
// PASAR A PREGUNTA 2
// ==================================================

btnPregunta2.addEventListener(
    "click",
    function () {

        mostrarPantalla(
            pregunta2
        );

    }
);


// ==================================================
// PREGUNTA 2
// ==================================================

const opciones2 =
    document.querySelectorAll(
        "#pregunta2 .opcion"
    );


opciones2.forEach(
    function (opcion) {

        opcion.addEventListener(
            "click",
            function () {

                const esCorrecta =
                    opcion.getAttribute(
                        "data-correcta"
                    ) === "si";


                // ----------------------------------
                // RESPUESTA INCORRECTA
                // ----------------------------------

                if (!esCorrecta) {

                    mensajePregunta2.textContent =
                        "Mmm... no exactamente 😌";

                    return;

                }


                // ----------------------------------
                // RESPUESTA CORRECTA
                // ----------------------------------

                mensajePregunta2.textContent =
                    "Creo que por fin llegaste a la correcta... 💛";


                setTimeout(
                    function () {

                        mostrarPantalla(
                            revelacion2
                        );

                    },
                    1000
                );

            }
        );

    }
);


// ==================================================
// PASAR AL SOBRE
// ==================================================

btnCarta.addEventListener(
    "click",
    function () {

        // Reiniciamos el sobre por si se vuelve
        // a abrir la página durante pruebas

        sobre.classList.remove(
            "abierto"
        );


        papelCarta.classList.remove(
            "mostrar-carta"
        );


        papelCarta.style.display =
            "none";


        sobreContenedor.style.display =
            "flex";


        textoAbrir.style.display =
            "block";


        mostrarPantalla(carta);

    }
);


// ==================================================
// ABRIR LA CARTA
// ==================================================

btnAbrirCarta.addEventListener(
    "click",
    function () {

        // Evitamos múltiples clics

        if (
            sobre.classList.contains(
                "abierto"
            )
        ) {

            return;

        }


        // Abrimos el sobre

        sobre.classList.add(
            "abierto"
        );


        textoAbrir.textContent =
            "Abriendo tu carta... 💛";


        // ------------------------------------------
        // Después de la animación mostramos
        // la carta completa
        // ------------------------------------------

        setTimeout(
            function () {

                sobreContenedor.style.opacity =
                    "0";


                sobreContenedor.style.transform =
                    "scale(0.95)";


                sobreContenedor.style.transition =
                    "opacity 0.6s ease, transform 0.6s ease";


            },
            1500
        );


        setTimeout(
            function () {

                sobreContenedor.style.display =
                    "none";


                papelCarta.style.display =
                    "block";


                papelCarta.classList.add(
                    "mostrar-carta"
                );

            },
            2100
        );

    }
);
