const determinant = (matrix) => {
    const n = matrix.length;
    if (n == 1) {
        return matrix[0][0];
    }
    if (n == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let det = 0;
    for (let j = 0; j < n; j++) {
        const cofactor = matrix[0][j] * determinant(getSubMatrix(matrix, 0, j));
        det += (j % 2 === 0 ? 1 : -1) * cofactor;
    }
    return det;
}

const getSubMatrix = (matrix, rowToRemove, colToRemove) => {
    return matrix.filter((row, rowIndex) => rowIndex !== rowToRemove)
        .map(row => row.filter((_, colIndex) => colIndex !== colToRemove));
}

export default determinant;

// for(let i=0;i<n;i++) {
//     x[i]=[];
//     for(let j=0;j<n;j++) {
//         x[i][j] = prompt(`x[${i}][${j}]=`);
//     }
// }

// for(let i=0;i<n;i++) {
//     let str = '';
//     for(let j=0;j<n;j++) {
//         str += x[i][j]+`\t`;
//     }
//     console.log(str);
// }
// console.log(`det(x)=${determinant(x)}`);