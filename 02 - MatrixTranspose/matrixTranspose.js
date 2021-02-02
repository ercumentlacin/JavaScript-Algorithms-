function makeTranspose(arr) {
  return arr[0].map((x, i) => arr.map((x) => x[i]));
}
