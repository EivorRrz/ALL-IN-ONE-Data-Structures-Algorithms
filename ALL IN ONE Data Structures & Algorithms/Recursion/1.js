function countDown(number) {
  //base case;
  if (number === 0) {
    console.log("and finally the stop");
    return;
  }
  console.log(number);
  countDown(number - 1);
}
countDown(5);

function factorial(number) {
  //base case;
  if (number === 0) {
    return 1;
  } //Recursive Case;
  return number * factorial(number - 1);
}
console.log(factorial(5));
