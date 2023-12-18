import determinant from "./determinant.js";
import product from "./product.js";

const tableX = document.querySelectorAll('table')[0];
const tableY = document.querySelectorAll(`table`)[1];
const tableProduct = document.querySelectorAll('table')[2];
const startButton = document.querySelector(`button`);
const reloadButton = document.querySelectorAll('button')[1];
const matrixX = document.querySelector('.matrix-X');
const matrixY = document.querySelector('.matrix-Y');
const determinantX = document.querySelector('.determinant-X');
const determinantY = document.querySelector('.determinant-Y');

const start = () => {
    const nX = Number.parseInt(prompt('Enter value for rows for first matrix'));
    const mX = Number.parseInt(prompt('Enter value for columns for first matrix'));

    const nY = Number.parseInt(prompt('Enter value for rows for second matrix'));
    const mY = Number.parseInt(prompt(`Enter value for columns for second matrix`));

    const x = [];
    const y = [];

    for (let i = 0; i < nX; i++) {
        x[i] = [];
        for (let j = 0; j < mX; j++) {
            x[i][j] = Number(prompt(`x[${i}][${j}]=`));
        }
    }

    for (let i = 0; i < nY; i++) {
        y[i] = [];
        for (let j = 0; j < mY; j++) {
            y[i][j] = Number(prompt(`y[${i}][${j}]=`));
        }
    }

    matrixX.innerHTML = `<i>X=Matrix(${nX}×${mX})=</i>`;
    
    const rowsX = nX;
    const colsX = mX;
    
    for (let i = 0; i < rowsX; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colsX; j++) {
            const col = document.createElement('td');
            col.innerText = x[i][j];
            row.append(col);
        }
        tableX.append(row);
    }

    matrixY.innerHTML = `<i>Y=Matrix(${nY}×${mY})=</i>`;
    
    const rowsY = nY;
    const colsY = mY;
    
    for (let i = 0; i < rowsY; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colsY; j++) {
            const col = document.createElement('td');
            col.innerText = y[i][j];
            row.append(col);
        }
        tableY.append(row);
    }

    nX === mX ? determinantX.innerHTML = `<i>Det(x)=${determinant(x)}</i>` : null;
    nY === mY ? determinantY.innerHTML = `<i>Det(y)=${determinant(y)}</i>` : null;
    if(mX===nY) {
        for(let i=0;i<nX;i++) {
            const row = document.createElement('tr');
            for(let j=0;j<mY;j++) {
                const col = document.createElement('td');
                col.innerText = product(x,y)[i][j];
                row.append(col);
            }
            tableProduct.append(row);
        }
    }

}

const keyPress = (key, func) => {
    document.addEventListener('keyup', (event) => {
        event.key === key ? func() : null;
    });
}

startButton.addEventListener('click', start);
reloadButton.addEventListener('click', () => {
    confirm(`There're unsaved changes. Reset page?`) ? location.reload() : null;
});
document.addEventListener('keyup', keyPress('Enter', start));
