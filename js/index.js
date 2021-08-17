const buttons = document.getElementsByTagName('button');

for (const button of buttons) {
    button.addEventListener('click', function () {
        const display = document.getElementById('display');
        if (display.innerText == '00') {
            display.innerText = '';
        }
        if (button.innerText == '=') {
            display.innerText = eval(display.innerText);
        }
        else if (button.innerText == 'AC') {
            display.innerText = '00';
        }
        else {
            display.innerText = display.innerText + button.innerText;
        }


    })
}