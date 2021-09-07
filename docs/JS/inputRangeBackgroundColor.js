console.log("hello!")

function changeColor() {

//declara as variaveis do range 

    let red = document.getElementById('rangeRed').value; 
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    console.log(red ,  blue , green)
    // color é a mistura das tres cores: red, green and blue. 
    // color é a variavel que vai se reflexar no fundo 

    let color= `rgb(${red}, ${green}, ${blue})` ;
    
    document.body.style.backgroundColor = color;

    document.getElementById('colorOutput').innerHTML = ': ' + color;

    console.log(color)
//textos

let title = document.getElementById('title')
let select = document.getElementById('title_select')


    if(red == 0 && blue == 0 && green == 0) {
        title.style.color = "white"
        select.style.color = "white"
    } else if (red == 255 && blue == 255 && green == 255) {
        title.style.color = 'black'
        select.style.color = 'black'        
    }

}

document.getElementById('rangeRed').addEventListener('input', changeColor); 
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);