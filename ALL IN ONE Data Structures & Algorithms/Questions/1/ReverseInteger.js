const reverseInt = (n) => {

    //convert it to string then reverse it>>

    const reversed = n.toString().split('').reverse().join('');
    //then convert it to int and then return it>>
    return parseInt(reversed) * Math.sign(n);

};

console.log(reverseInt(456));