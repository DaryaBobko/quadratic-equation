module.exports = function solveEquation(equation) {
  // your implementation
  let operandsArr = equation.split(" ");
  let d = 0;
  let a = +operandsArr[0];
  let b = (operandsArr[3] === '-') ? +operandsArr[4] * -1 : +operandsArr[4];
  let c = (operandsArr[7] === '-') ? +operandsArr[8] * -1 : +operandsArr[8];
  let x1, x2;

  d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0){
    x1 =Math.round((-b + Math.sqrt(d)) / (2 * a));
    x2 =Math.round((-b - Math.sqrt(d)) / (2 * a));
  }
let solutions = [x1, x2].sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
return solutions;
}
