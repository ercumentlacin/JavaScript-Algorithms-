const getDet = (squareMatrix) => {
  if (squareMatrix.length === 1)
    return Array.isArray(squareMatrix[0])
      ? squareMatrix[0][0]
      : squareMatrix[0];
  let determinant = 0;
  for (let i = 0; i < squareMatrix.length; i++)
    determinant +=
      squareMatrix[0][i] *
      getDet(squareMatrix.slice(1).map((x) => x.filter((_, j) => i !== j))) *
      (-1) ** i;
  return determinant;
};
