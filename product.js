const product = (matrixA,matrixB) => {
    if(matrixA[0].length !== matrixB.length) {
        return console.error(`Error`);
    }
    const result = new Array(matrixA.length);
    for(let i=0;i<result.length;i++) {
        result[i] = new Array(matrixB[0].length).fill(0);
    }
    for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixB[0].length; j++) {
          for (let k = 0; k < matrixA[0].length; k++) {
            result[i][j] += matrixA[i][k] * matrixB[k][j];
          }
        }
    }
    return result;
}

export default product;