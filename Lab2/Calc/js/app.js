let sym = ['C','1', '2', '3', '+', '4', '5', '6', '-','7', '8', '9', '/', '0', '.', '=', '*'];

let calc = document.getElementsByClassName('calc')[0];
    
let text = document.createElement('p');
text.className = 'text_area';
calc.appendChild(text);

sym.forEach(function (symbol) {
    var symbolElement = document.createElement('div');
    symbolElement.className = 'button';        
    symbolElement.innerHTML = symbol;
    calc.appendChild(symbolElement);
});

document.querySelectorAll('.button').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(button_click) {
    if (button_click.target.innerHTML === 'C') {
        text.innerHTML = '0';
    } else if (button_click.target.innerHTML === '=') {
        try{
            text.innerHTML = eval(text.innerHTML);
        }
        catch{
            text.innerHTML = 'Невалидные данные';
        }
        
    } else if (text.innerHTML === '0' && button_click.target.innerHTML !== '.') {
        text.innerHTML = button_click.target.innerHTML;
    } else {
        text.innerHTML += button_click.target.innerHTML;
    }
};