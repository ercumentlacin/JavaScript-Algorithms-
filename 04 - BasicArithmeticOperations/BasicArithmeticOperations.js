const operation = (a, b, op) => {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  if (op === "add") {
    return num1 + num2;
  } else if (op === "divide") {
    if (num2 === 0) {
      return "undefined";
    } else {
      return num1 / num2;
    }
  } else if (op === "multiply") {
    return num1 * num2;
  } else if (op === "subtract") {
    return num1 - num2;
  }
};
