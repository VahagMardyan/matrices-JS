import determinant from "./determinant.js";
import product from "./product.js";
import sum from "./sum.js";
import { subtraction } from './subtraction.js';
import inverse from "./inverse.js";

const tableX = document.querySelectorAll('table')[0];
const tableY = document.querySelectorAll(`table`)[1];
const tableProduct = document.querySelectorAll('table')[2];
const tableSum = document.querySelectorAll('table')[3];
const tableSubtraction = document.querySelectorAll('table')[4];
const inverseX = document.querySelectorAll('table')[5];
const inverseY = document.querySelectorAll('table')[6];

const startButton = document.querySelector(`button`);
const reloadButton = document.querySelectorAll('button')[1];
const matrixX = document.querySelector('.matrix-X');
const matrixY = document.querySelector('.matrix-Y');
const determinantX = document.querySelector('.determinant-X');
const determinantY = document.querySelector('.determinant-Y');

const start = () => {

    document.querySelector('.display').style.display = 'block';

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

    nX === mX ? determinantX.innerHTML = `<i>Det(x)=${determinant(x)};</i>` : null;
    nY === mY ? determinantY.innerHTML = `<i>Det(y)=${determinant(y)};</i>` : null;
    if (mX === nY) {
        for (let i = 0; i < nX; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < mY; j++) {
                const col = document.createElement('td');
                col.innerText = product(x, y)[i][j];
                row.append(col);
            }
            tableProduct.append(row);
        }
    } else {
        tableProduct.innerHTML = `<p>Can't calculate X×Y</p>`;
    }
    if (nX === nY && mX === mY) {
        for (let i = 0; i < nX; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < mY; j++) {
                const col = document.createElement('td');
                col.innerText = sum(x, y)[i][j];
                row.append(col);
            }
            tableSum.append(row);
        }
    } else {
        tableSum.innerHTML = `<p>Can't calculate X+Y</p>`;
    }

    if (nX === nY && mX === mY) {
        for (let i = 0; i < nX; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < mY; j++) {
                const col = document.createElement('td');
                col.innerText = subtraction(x, y)[i][j];
                row.append(col);
            }
            tableSubtraction.append(row);
        }
    } else {
        tableSubtraction.innerHTML = `<p>Can't calculate X-Y</p>`;
    }

    if (nX === mX && determinant(x) !== 0) {
        for (let i = 0; i < nX; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < mX; j++) {
                const col = document.createElement('td');
                col.innerText = inverse(x)[i][j];
                row.append(col);
            }
            inverseX.append(row);
        }
    } else {
        inverseX.innerHTML = `<p>X<sup>-1</sup> is not defined</p>`;
    }

    if (nY === mY && determinant(y) !== 0) {
        for (let i = 0; i < nY; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < mY; j++) {
                const col = document.createElement('td');
                col.innerText = inverse(y)[i][j];
                row.append(col);
            }
            inverseY.append(row);
        }
    } else {
        inverseY.innerHTML = `<p>Y<sup>-1</sup> is not defined</p>`;
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
