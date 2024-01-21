// Shorts



// Push

// const num = [1,2,3,4,5]

// num.push(1, 3,3,4,5,6)

// console.log(num);


// Unshift()


// let arr = [1,2,3,4,5,6]

// arr.unshift(7,8,9)

// console.log(arr);


// Pop

// let arr = [1,2,3,4,5,6]

// arr.pop()

// const num = 3;
// for (let i = 0; i < num; i++) {
//   arr.pop();
// }


// console.log(arr);



// shift()

// let arr = [1,2,3,4,5,6]

// arr.shift()

// const num = 3;
// for (let i = 0; i < num; i++) {
//   arr.shift();
// }

// console.log(arr);

// Splice

// Array.splice(startIndex, deleteCount, item1, item2,..)


// const arr = [1,2,3,4,5,6]

// arr.splice(2, 2,9,8,7,10)

// console.log(arr);


// fill()

// const arr = new Array(10)

// arr.fill(1)



// let arr = [1,2,3,4,5,6]

// arr.fill(10, 1, 4)


// console.log(arr);


// Palindrome number

// let num = -1234
// let rev = parseFloat(num.toString()
// .split('').reverse().join('')
// )* Math.sign(num)

// console.log(rev);

// Array.from()

// const num = 5

// console.log(Array.from(
//     {length: num},
//      (_, i)=> i + 1
// ));


// Factorial of num

// const num = 5

// console.log(
//     Array.from({length:num},
//         (_, i)=> i + 1).reduce
//         ((acc, j) => acc*j)
// );

// Factors of number

// const num = 9

// console.log(
// Array.from({length: num},
//     (_,i)=> i +1).filter(
//         (i)=> num % i === 0
//     )
//     );





// Objects in javascripts

// class Phone {
//     constructor(brand, model, country) {
//         this.brand = brand;
//         this.model = model,
//             this.country = country
//     }
// }
// const phone1 = new Phone("Iphone", "5", "USA")
// const phone2 = new Phone("Micromax", "i2", "INDIA")
// const phone3 = new Phone("Realme", "5i", "China")
// console.log(phone1, phone2, phone3);

// console.table({phone1,phone2,phone3})


// Count in console

// console.count("a")
// console.count("a")
// console.count("b")
// console.count("b")


// for (let i = 0; i < 5; i++) {
//    console.count("i")
// }

// console table

// const train = {
//     name: "Delhi Express",
//     start: "lko"
// }

// console.table(train)
// console.clear()

// const train2 = {
//     name: "Mumbai Express",
//     start: "Delhi"
// }

// console.table([train, train2])

// console.clear()
// const train1 = [train,train2]
// console.table(train1, "start")

// const num = 1

// if(isNaN(num)){
//     console.log(typeof num,"Not a number");
// }else{
//     console.log(typeof num,"Is number");
// }

// Merge 2 array

// const a  = [1,2]
// const b = [3,4]


// const c = [...a, ...b]
// console.log(c)

// Convert  array to String

// const names = ["Peter", "Parker", "Tony"]

// const str = names.toString()

// console.log(str);

// Convert String to array

// const str = "Peter, Parker, Tony"


// const arr = str.split(",")

// console.log(arr);


// GetCountryCd

// let regionName = new Intl.DisplayNames(['En'],
// {type:'region'});

// let countryCode = 'ID'

// // "ID", IN, UK

// console.log(regionName.of(countryCode));

// Cut last n characters or elements

// const num = [1, 2, 3, 4, 5, 6]
// const n = num.slice(-3)

// console.log(n);

// let lesson = "Javascript"
// let l = lesson.slice(-1)

// console.log(l);

// Change arr length

// const a = [1,2,3,4,5]
// a.length =13
// console.log(a);


// Compare 2 array

// const n1 = [1,2,3]
// const n2 = [1,2,3]

// console.log(JSON.stringify(n2)  === JSON.stringify(n1))



























// replace all accurrences

// let text = "Hi&dfgtr&ertvf&-sdf&"

// console.log(text);

// let newText = text.replace("&", " ")
// console.log(newText);




// newText = text.replaceAll("&", " ")
// console.log(newText);





// Strong Number

// 1! + 4! + 5!

// let num = 145

// const numstr =
//     num.toString()
// const result = numstr.split('').reduce((acc, digit) =>
//     parseInt(acc) + Array.from({ length: digit },
//         (_, i) => i + 1)
//         .reduce((acc, cur) => acc * cur)
// )

// console.log(result === num);


// Square root

// const num = 15

// console.log(Math.sqrt(num));


// ParseInt
// const str = '50.565'
// console.log(typeof parseFloat( str));


// Automorphic number
//  5 * 5 = 25
// const num = 4

// const res = (num * num).toString().endsWith(num.toString())

// console.log(res);

// Absolute

// const n = -3
// console.log(Math.abs(n));

// Min
// console.log(Math.min(3,4,5,2, 1.9))

// Max
// console.log(Math.max(3,4,9,1,23, 23.5));

// Sum of Digits

// let num = 378
// let sum = 0
// sum = [...num.toString()].reduce((acc,digit) =>
//  acc + parseInt(digit, 10), 0)
//  console.log(sum);

// Math floar

// num = 0
// num = 7 /3
// console.log(Math.floor(num));

// Sum of digits

// let num = 2341

// let digit = num.toString().split('').map(Number)

// console.log(digit.reduce((sum, digit) => sum + digit, 0));

// Replace all the 0's with 1 in a given integer

// let num = 102000032

// console.log(num.toString().split('0').join('1'));

// console.log(num.toString().replace(/0/g, '1'));




// Find the largest word in a String

// let str = "This code is little different from other"

// let result =  str.split(' ').reduce((largest, current) => {
//     return current.length > largest.length ? current : largest
// },'')

// console.log(result);






// Replace characters by next character

// let str = "Hello"

// let result = str.replace(/[a-zA-Z]/g, (ch) => {
//     return String.fromCharCode(ch.charCodeAt(0) + (ch < 'z' ? 1 : -25))
// })

// console.log(result);

// 2-D Array

// const array = Array.from({length: 5}, () => Array(5).fill(2))

// console.log(array);




// Count the number of words in a given string


// let str = "This is a good boy fg"

// let result = str.split(' ').filter(word => { return word.length > 0 }).length

//  console.log(result);


// Maximum from Array

// let arr = [1,20,3,4]

// console.log(Math.max(...arr));


// Capitalize String

// let str = 'hello world'


// console.log(
//   str.replace(/\b\w/g,
//     (st) => st.toUpperCase())
// )


// Remove duplicates from an array

// let arr = [1,2,3,4,32,5,4,5,3,4,5,4,3,2,67]

// uniqueArray = [...new Set(arr)];
// console.log(uniqueArray);


// Check if a string is a palindrome

// let str = "abagbaba"

// console.log(
// str === str.split('').reverse().join(''));


// Check if an object is empty

// let  obj = {}

// console.log(Object.keys(obj).length)


// Create an array of unique values from two arrays

// let arr1 = [1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3]

// let arr2 = [3,4,5,6,7,6,5,4,5,6,7,8,9,0,9,8,7,6,5,6,7,89,90,0,34]

//  let result = [...new Set([...arr1, ...arr2])];

// console.log(result);


// Find the index of the occurrence of a value in an array

// let arr = [1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3]

// console.log(
//   arr.indexOf(2));
// console.log(
//   arr.lastIndexOf(2)
// );

// Check if a number is an integer

// console.log(Number.isInteger(5.6));

// Flatten an array of arrays

// let arr1 = [1,2,[3,4,5],4,3,2,[1,2,3,4],5,6,7,[6,5,4],3]

// console.log(
//   [].concat(...arr1)
// );


// Convert an array of strings to uppercase

// let arr = ["sunny", "code"]

// console.log(
//     arr.map(str => str.toUpperCase())
// );

// Check if an array is sorted

// let arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(
//   arr.every(
//     (value, index, arr) => index === 0 || value >=
//     arr[index - 1])
// );

// Remove false values from an array

// let arr = [true, true, false, true, false]

// console.log(
//   arr.filter(Boolean)
// );



// Get the current date in a specific format

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// console.log(
//   new Date().toLocaleDateString('en-US' , options)
//   );

// Check if an array has duplicates

// let arr = [1,2,3,4,5,6,8]

// console.log(
// new Set(arr).size === arr.length);


// Find the intersection of two arrays

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 7, 9]

// let arr2 = [2, 3, 4, 5, 6, 7, 12, 9, 0]

// console.log(
//   arr1.filter(value => arr2.includes(value))
// );


// Determine if a number is a prime number

// let n = 13

// console.log(
// n > 1 &&
//  Array.from({ length: Math.floor(Math.sqrt(n)) }, (_, i) => i + 2)
//  .every(divisor => n % divisor !== 0)
// );


// Shuffle an array

// let arr = [1, 2, 3, 4, 5]

// console.log(
//     arr.sort(() => Math.random() - 0.5)
// );

// Check if a year is a leap year

// let year = 2001

// console.log(
//     (year % 4 === 0
//         &&
//     year % 100 !== 0)
//     ||
//     (year % 400 === 0)
// );

// Remove all whitespace from a string

// let str = " hello world"

// console.log(
// str.replace(/\s/g, '')
// );

// console.log(
// str.replace(/\s+/g, '')
// );

// Generate a range of numbers between two values

// let start = 5
// let end = 10

// console.log(
//     Array.from({ length: end - start + 1 }, (_, i) => start + i)
// );

// Rotate elements in an array to the right

// let arr = [1, 2, 3, 4, 5]
// arr.unshift(
//     arr.pop()
// )
// console.log(arr);

// Create an object from key-value pairs

// console.log(
//     Object.fromEntries(
//         [
//             ['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']
//         ]
//     )
// );

// Generate a random hexadecimal color code:

// console.log(

// `#${Math.floor(Math.random()*16777215).toString(16)}`
// );

// Calculate the sum of squared values in an array

// let arr = [1, 2, 3]

// console.log(
//     arr.reduce(
//         (sum, num) => sum + num ** 2, 0));

// Count the occurrences of each element in an array

// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 7, 8, 6, 5, 3]

// console.log(
//     arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {}));
