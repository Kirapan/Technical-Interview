matrix = [
  [1, 0, 0, 2],
  [0, 5, 0, 1],
  [0, 0, 3, 5]
]



function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  for (var i = 0; i<rowsToDelete.length; i++) {
    matrix.splice(rowsToDelete[i], 1)
  }
  for (var j=0; j<columnsToDelete.length; j++) {
    for (var k=0; k<matrix.length; k++) {
      matrix[k].splice(columnsToDelete[j]-j,1)
    }
  }
  return matrix;
}


console.log(constructSubmatrix(matrix, [1], [0,2]))