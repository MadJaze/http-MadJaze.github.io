 //side-bar and bars button (max-width: 700px)
 
 
 document.getElementById('side-bar').addEventListener('click', () => {

  
  return document.querySelector('.nav-menu').classList.toggle('show'); 
 

})


//Scroll Reveal from scroll reveal.com


ScrollReveal().reveal('.showcase', { delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 550});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});

//search content settings

//1. Variaveis 

 bars_search = document.getElementById("ctn-bars-search"); //CONTENEDOR para el input de búsqueda
 cover = document.getElementById("cover-ctn-search"); // cover con transparencia 
 iconSearch = document.getElementById("icon-search"); //icono en forma de lupa 
 box_search = document.getElementById("box-search"); // contenedor para la busqueda de despliegue

 inputSearch = document.getElementById('inputSearch') // input de búsqueda principal

//2.- Functions to show search tool 

iconSearch.addEventListener('click', showSearchTool)

function showSearchTool() {

    bars_search.classList.toggle('unshowed')

    inputSearch.focus();
    cover.classList.toggle('hidden')

}

//3.- Fading out our gray cover and input search

cover.addEventListener("click", fadingoutanything);

function fadingoutanything() {

  inputSearch.innerHTML = '';    //na calculadora funcionou, mais no buscador não
  bars_search.classList.toggle('unshowed')
  cover.classList.toggle('hidden')
  
  

}

//4.- Can I work with API? 

var dica = area_resultados = document.getElementById('consejo');
advice_button = document.getElementById('boton');

advice_button.addEventListener('click', function(){

  gerarDica()

})

function gerarDica() {

  w3.getHttpObject("https://api.adviceslip.com/advice", function(data) {
    advice=data.slip.advice
    area_resultados.innerHTML = "Loading..."

    let h1 = document.createElement('h1');
    area_resultados.appendChild(h1);
    dica.innerHTML = advice
    dica.style.backgroundColor = "red"
    dica.style.borderRadius = "5px"
    dica.style.padding = '5px'
  })

}

/*
function anexarResultados() {

area_resultados.innerHTML = '...'


let h2  = document.createElement('h2')
p.textContent = titulo

area_resultados.appendchild(p)


}*/