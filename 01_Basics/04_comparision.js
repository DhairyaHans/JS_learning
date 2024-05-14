// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 != 1);

/*
    In JS, equality operator (==) and comparision operators (<, >, >=, <=) work differently
    Comparisions convert null to number, treating it as zero(0) thats why 
        <12> is False (0>0) and <14> is True (0>=0).

    Undefined is converted to NaN.
*/

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);

// === (STRICT CHECK) compares Value as well as Data Type
console.log("2" === 2);
console.log(2 === 2);
