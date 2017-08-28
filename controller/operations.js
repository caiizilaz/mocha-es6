let addOp = (num1, num2) => {
  let number1 = isNaN(num1) ? 0 : num1
  let number2 = isNaN(num2) ? 0 : num2
  return number1 + number2
}

export default addOp