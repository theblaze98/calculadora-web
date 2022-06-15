/* ------------------------ */
/* Variables */
/* ------------------------ */

const botones = document.querySelectorAll('.btn');
const pDisplay = document.getElementById('pDisplay');

/* ------------------------ */
/* Eventos */
/* ------------------------ */

botones.forEach(boton => {
    if (boton.id === 'btnAC') {
        boton.addEventListener('click', (e) => pDisplay.innerText = '0');
    } else if (boton.id === 'btnDel') {
        boton.addEventListener('click', (e) => {
            if (pDisplay.innerText !== '0') {
                pDisplay.innerText = pDisplay.innerText.slice(0,-1);
            }
        });
    } else if (boton.className.includes('numeros') || boton.className.includes('operadores')) {
        if (boton.id !== 'igual') {
            boton.addEventListener('click', (e) => {
                if (pDisplay.innerText === '0') {
                    pDisplay.innerText = '';
                }
                pDisplay.innerText += e.target.innerText;
            });
        } else if (boton.id === 'igual') {
            boton.addEventListener('click', (e) => {
                pDisplay.innerText = eval(pDisplay.innerText);
            })
        }
    }
});