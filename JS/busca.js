let btn = document.querySelector("#pesquisar");
let busca = document.querySelector('#termo-de-busca');
let areaResultados= document.querySelector("#resultados");

btn.addEventListener("click", function() {

    areaResultados.innerHTML = "..."
    PesquisarlivroseExibir(busca.value);

})


function PesquisarlivroseExibir(termo) {

    termo = encodeURIComponent(termo);

    fetch('http://openlibrary.org/search.json?q=' + termo)
    .then(resp => resp.json())
    .then(dados => anexarResultados(dados.docs))

}



function anexarResultados(resultados) {

    areaResultados.innerHTML = ""

    resultados // docs 

    .forEach(resultado => {

        let titulo = resultado.title
        let p = document.createElement('p')
        p.textContent = titulo

        areaResultados.appendChild(p)
    })

}