function mostrarReco(recomendacion) {
  document.querySelector("#mireco").innerHTML = recomendacion;
}

let presupuesto, puntaje;

let humoBlanco, humoCeleste, humoNegro, freno, embrague;
let titulo, libreDeuda, form08, infDominio;
let tapizado, carroceria, pintura, neumaticos;
let presupBajo, presupMedio, presupAlto;

let condicionDelMotor;
let estadoDocumentacion;
let estadoDelAuto;
let recomendacion;
let message;

/***
 * Funcion que devueve la condicion del motor (Bueno, Regular o malo)
 * @return {string}
 ***/
function condicionMotor() {
  //R1
  if (humoBlanco && freno && embrague) {
    condicionDelMotor = "Bueno";
    message = "El Motor esta en buenas condiciones.";
  }
  //R2
  else if (humoNegro && !freno && !embrague) {
    condicionDelMotor = "Malo";
    message =
      "la condicion del motor es MALO libera Humo Negro, el estado de los Frenos y Embrague es MALO.";
  }
  //R3
  else if (humoCeleste && freno && !embrague) {
    condicionDelMotor = "Regular";
    message = "la condicion del Motor es Regular, Falla el embrague.";
  }
  //R4
  else if (humoBlanco && !freno && embrague) {
    condicionDelMotor = "Regular";
    message = "la condicion del Motor es Regular, Falla el Freno.";
  } else {
    condicionDelMotor = "Regular";
    message = "La condición del Motor es Regular.";
  }

  console.log("Condicion del motor: " + condicionDelMotor);
  return condicionDelMotor;
}

/***
 * Funcion que devueve el estado de la documentacion (Completa o Imcompleta)
 * @return {string}
 ***/
function eDocumentacion() {
  if (titulo && libreDeuda && form08 && infDominio) {
    estadoDocumentacion = "Completa";
    message = message + " La documentacion esta completa.";
  } else {
    estadoDocumentacion = "Incompleta";
    message =
      message +
      " La documentacion esta Incompleta, es necesario que este completa para comprar el Auto.";
  }
  console.log("Documentacion: " + estadoDocumentacion);
  return estadoDocumentacion;
}

/***
 * Funcion que devueve el estado del auto (Malo, Regular o Bueno )
 * @return {string}
 ***/
function estadoAuto() {
  if (
    !tapizado &&
    !carroceria &&
    !pintura &&
    !neumaticos &&
    estadoDocumentacion === "Incompleta" &&
    condicionDelMotor === "Malo"
  ) {
    estadoDelAuto = "Malo"; // Regla 7
    message =
      message +
      " El Tapizado, la Pintura, la Carroceria y los Neumaticos se encuentran en malas condiciones.";
  } else if (
    !tapizado &&
    carroceria &&
    !pintura &&
    neumaticos &&
    estadoDocumentacion === "Completa" &&
    condicionDelMotor === "Regular"
  ) {
    estadoDelAuto = "Regular"; // Regla 8
    message =
      message + " Unicamente el Tapiza y la Pintura en malas condiciones.";
  } else if (
    tapizado &&
    carroceria &&
    pintura &&
    neumaticos &&
    estadoDocumentacion === "Completa" &&
    condicionDelMotor === "Bueno"
  ) {
    estadoDelAuto = "Bueno"; // Regla 9
    message = message + " Estética en buenas condiciones.";
  } else {
    estadoDelAuto = "Regular"; // valores por defecto
    message = message + " Estética en condiciones regulares.";
  }
  console.log("Estado auto: " + estadoDelAuto);
  return estadoDelAuto;
}

/***
 * Funcion que recomienda o no comprar el auto usado
 * @return {string}
 ***/
function Recomendacion() {
  if (estadoDelAuto === "Malo") {
    recomendacion =
      "NO ES RECOMENDABLE porque, " +
      message +
      " La condición general del Auto es muy mala. Buscá otro Auto y regresa para ayudarte nuevamente!"; // Regla 10
  } else if (presupBajo && estadoDelAuto === "Regular") {
    recomendacion =
      "NO ES RECOMENDABLE porque, " +
      message +
      " Tu presupuesto es muy bajo para la el estado del Auto"; // Regla 11
  } else if (presupMedio && estadoDelAuto === "Regular") {
    recomendacion =
      "¡FELICIDADES! VE A COMPRAR TU AUTO porque, " +
      message +
      " El estado general del auto es Regular, pero acorde a tu presupuesto."; // Regla 12
  } else if (presupAlto && estadoDelAuto === "Regular") {
    recomendacion =
      "¡FELICIDADES! VE A COMPRAR TU AUTO porque, " +
      message +
      " El estado general del auto es Regular, pero acorde a tu presupuesto."; // Regla 13
  } else if (presupAlto && estadoDelAuto === "Bueno") {
    recomendacion =
      "¡FELICIDADES! VE A COMPRAR TU AUTO porque, " +
      message +
      " El estado general del auto es Bueno."; // Regla 14
  }
  console.log("Recomendacion: " + recomendacion);
  return recomendacion;
}

document.getElementById("botoncito2").addEventListener("click", function () {
  // tabla 1
  humoBlanco = humoCeleste = humoNegro = freno = embrague = false;
  condicionDelMotor = "";
  message = "";
  if (document.getElementById("humo-blanco").checked) {
    humoBlanco = true;
  } else if (document.getElementById("humo-celeste").checked) {
    humoCeleste = true;
  } else if (document.getElementById("humo-negro").checked) {
    humoNegro = true;
  }

  document.getElementById("freno-bueno").checked
    ? (freno = true)
    : (freno = false);

  document.getElementById("embrague-bueno").checked
    ? (embrague = true)
    : (embrague = false);

  // sale condicion del motor
  condicionDelMotor = condicionMotor();

  // tabla 2
  titulo = libreDeuda = form08 = infDominio = false;
  estadoDocumentacion = "";

  document.getElementById("si-titulo").checked
    ? (titulo = true)
    : (titulo = false);

  document.getElementById("si-libre-deuda").checked
    ? (libreDeuda = true)
    : (libreDeuda = false);

  document.getElementById("si-formulario08").checked
    ? (form08 = true)
    : (form08 = false);

  document.getElementById("si-informe-dominio").checked
    ? (infDominio = true)
    : (infDominio = false);
  // sale estado de la documentacion
  estadoDocumentacion = eDocumentacion();

  //tabla 3 - salida de t1 y t2
  tapizado = carroceria = pintura = neumaticos = false;
  estadoDelAuto = "";
  document.getElementById("tapizado-bueno").checked
    ? (tapizado = true)
    : (tapizado = false);
  document.getElementById("carroceria-buena").checked
    ? (carroceria = true)
    : (carroceria = false);
  document.getElementById("pintura-buena").checked
    ? (pintura = true)
    : (pintura = false);
  document.getElementById("neumaticos-buenos").checked
    ? (neumaticos = true)
    : (neumaticos = false);

  //sale stado del auto
  estadoDelAuto = estadoAuto();

  // tabla 4 utliza t3
  presupBajo = presupMedio = presupAlto = false;
  recomendacion = "";
  if (document.getElementById("bajo").checked) {
    presupBajo = true;
  } else if (document.getElementById("medio").checked) {
    presupMedio = true;
  } else if (document.getElementById("alto").checked) {
    presupAlto = true;
  }
  // Si se recomienda comprar o no
  recomendacion = Recomendacion();

  mostrarReco(recomendacion);

  console.log("THE END!");

  return recomendacion;
});
