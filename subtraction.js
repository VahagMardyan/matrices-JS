const sum = (matrixA,matrixB) => {
    if(matrixA.length !== matrixB.length || matrixA.length!==matrixB[0].length) {
        return alert(`Error`);
    }
    const result = new Array(matrixA.length);
    for(let i=0;i<result.length;i++) {
        result[i] = new Array(matrixA[0].length);
        for(let j=0;j<result[i].length;j++) {
            result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
    }
    return result;
}
export {sum as subtraction};