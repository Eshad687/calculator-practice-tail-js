const buttons = document.getElementsByTagName('button');

for (const button of buttons) {
    button.addEventListener('click', function () {
        const display = document.getElementById('display');

        if (button.innerText == '=') {
            display.value = eval(display.value);
        }
        else if (button.innerText == 'AC') {
            display.value = '';
        }
        else if (button.innerText == 'DEL') {
            display.value = display.value.slice(0, -1);
        }
        else {
            display.value = display.value + button.innerText;
        }


    })
}