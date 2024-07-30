function reverseString(str) {
    //push all the characters of str into stack>>
    const stack = [];
    for (let char of str) {
        stack.push(char);
    }
    let reverseStrig = '';//let it be empty
    //perform pop>>
    while (stack.length > 0) {
        reverseStrig += stack.pop();
    }
    return reverseStrig;
}

console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("world"));  // Output: "dlrow"