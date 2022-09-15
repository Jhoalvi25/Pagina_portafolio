function seleccionar(link) {
  var opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //   desaparecer
  var x = document.getElementById("nav");
  x.className = "";
}

// funciones del menu
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// scroll

window.onscroll = function(){
    efectoHabilidades();
}

// animacion de scroll

function efectoHabilidades(){
    var skills = getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("react").classList.add("barra-progreso3");
        document.getElementById("vue").classList.add("barra-progreso4");
        document.getElementById("node").classList.add("barra-progreso5");
        document.getElementById("express").classList.add("barra-progreso6");
        document.getElementById("sql").classList.add("barra-progreso7");
        document.getElementById("word").classList.add("barra-progreso8");
    }
}
