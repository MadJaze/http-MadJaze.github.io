let form = document.getElementById('formulario');


// dados do formulario, explicação dos erros 


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(form);

    let dados = {

        nome: formData.get("username").trim(),
        email: formData.get("email").trim(),
        telefone: formData.get("telefone").trim(),
        idade: +formData.get("idade"),
        senha: formData.get("password"),
        senhaConfirm: formData.get("password_confirm"),
        termoseCondicoes: !!formData.get("termos-e-condicoes")

    };


    let erros = [];

    if (!ValidaObrigatorio(dados.nome)) {
        erros.push("Username é obrigatorio"); 
    } else if (!ValidaPeloMenosDosCarateres(dados.nome)) { 
        erros.push("O nome precisa pelo menos ter dois carateres");
    }


    if (!validaMaiorouIguala18(dados.idade)) {
        erros.push("Precisa ser maior de idade para Login");
    }

    if (!validaFormatoCelular(dados.telefone)) {
        erros.push("Número de telefone inválido (99999-9999)");
    }

    if (!validaFormatoEmail(dados.email)) {
        erros.push("email inválido");
    }


    if (!ValidaObrigatorio(dados.senha)) {
        erros.push("Uma senha é obrigatoria");
    } else if (!ValidarSenha(dados.senha)) {
        erros.push("A senha deve seguir o formato indicado");
    } else if (!ValidarIguais(dados.senha, dados.senhaConfirm)) {
        erros.push("A senha deve conferir com sua confirmação");
    }

    if(!ValidartermoseCondicoes(dados.termoseCondicoes)){
        erros.push("Aceite os terminos e condições para continuar")
    }

    Exibirerros(erros)
        if(!erros.length) {
            setTimeout(() => alert('Seus dados foram enviados para a lua!'), 0)
        }
    
        console.log(dados);
        console.log(erros);

});




//funçoes condicionales de valor com Regex

function ValidaObrigatorio(valor) {
    return !!valor;
}


function ValidaPeloMenosDosCarateres(valor) {
    return valor.length >= 2; 
}

function validaMaiorouIguala18(valor) {
    return valor >= 18;
}

function validaFormatoEmail(valor) {
    return /^\S+@\S+$/.test(valor);
}


function validaFormatoCelular(valor) {
   

    return /^[0-9]{5}-[0-9]{4}$/.test(valor);
}

function ValidarSenha(valor) {

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(valor)
     
}


function ValidarIguais(valor1, valor2) {

    return valor1 === valor2;
}

function ValidartermoseCondicoes(valor) {
    return !!valor
};

function Exibirerros(erros) {
    let areaErros = document.getElementById("erros_area");
    areaErros.innerHTML = ""

    let listaErros = document.createElement('ul')
    listaErros.style.color = 'red';


    for (let erro of erros) {
        let item = document.createElement('li')
        item.textContent = erro;
        listaErros.appendChild(item);
    }

    areaErros.appendChild(listaErros)
}


