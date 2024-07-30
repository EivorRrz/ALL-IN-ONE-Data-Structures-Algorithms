const FizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {// it will run from 1-n>>

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}
FizzBuzz(3)