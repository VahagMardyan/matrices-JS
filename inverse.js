import determinant from "./determinant.js";
import {getSubMatrix} from "./determinant.js";

const inverse = (matrix) => {
    if (matrix.length !== matrix[0].length) {
        return alert('Matrix must be square to have an inverse');
    }
    const det = determinant(matrix);
    const result = new Array(matrix.length);
    for(let i=0;i<result.length;i++) {
        result[i] = new Array(matrix[0].length);
        for(let j=0;j<result[0].length;j++) {
            const cofactor = Math.pow(-1,i+j) * determinant(getSubMatrix(matrix,j,i));
            result[i][j] = cofactor/det;
        }
    }
    return result;
}

export default inverse;