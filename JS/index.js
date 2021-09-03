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

  inputSearch.innerHTML = '';
  bars_search.classList.toggle('unshowed')
  cover.classList.toggle('hidden')
  
  

}

//na calculadora funcionou, mais no buscador não