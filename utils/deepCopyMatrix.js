export default function deepCopyMatrix(matrix) {

    return matrix.map((row) => row.map((element) => Object.assign({}, element))
    )
}