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

        pantalla.style.display = "none";

    });


    pantallaMostrar.style.display = "block";

}


// ==================================================
// PANTALLA 1
// ==================================================

btnSi.addEventListener("click", function () {

    mostrarPantalla(acertijo);

    respuesta.focus();

});


btnNo.addEventListener("click", function () {

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

});


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


    respuesta.value = "";

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


opciones1.forEach(function (opcion) {

    opcion.addEventListener(
        "click",
        function () {

            mensajePregunta1.textContent =
                "Mmm... interesante elección 💭";


            setTimeout(function () {

                mostrarPantalla(revelacion1);

            }, 1000);

        }
    );

});


// ==================================================
// PASAR A PREGUNTA 2
// ==================================================

btnPregunta2.addEventListener(
    "click",
    function () {

        mostrarPantalla(pregunta2);

    }
);


// ==================================================
// PREGUNTA 2
// ==================================================

const opciones2 =
    document.querySelectorAll(
        "#pregunta2 .opcion"
    );


opciones2.forEach(function (opcion) {

    opcion.addEventListener(
        "click",
        function () {

            const esCorrecta =
                opcion.getAttribute(
                    "data-correcta"
                ) === "si";


            // --------------------------------------
            // RESPUESTA INCORRECTA
            // --------------------------------------

            if (!esCorrecta) {

                mensajePregunta2.textContent =
                    "Mmm... no exactamente 😌";

                return;

            }


            // --------------------------------------
            // RESPUESTA CORRECTA
            // --------------------------------------

            mensajePregunta2.textContent =
                "Creo que por fin llegaste a la correcta... 💛";


            setTimeout(function () {

                mostrarPantalla(revelacion2);

            }, 1000);

        }
    );

});


// ==================================================
// PASAR A LA CARTA
// ==================================================

btnCarta.addEventListener(
    "click",
    function () {

        mostrarPantalla(carta);

    }
);