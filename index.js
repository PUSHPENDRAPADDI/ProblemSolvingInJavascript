// let arr = [5, 4,8,2,1, -2, -3, -56]
// let temp = 0;
// for (let index = 0; index < arr.length; index++) {
//    if(arr[index] < temp){
//     temp = arr[index];
//    }
// }
// temp = Math.min(...arr)
// temp = Math.min(5, 4,8,2,1, -1)
// temp = arr.sort()
// console.log(temp)

// let arr = [5, 7, 3, 8,1, 45]

// let temp  = arr[0];

// for (let index = 0; index < arr.length; index++) {
//        if(arr[index] > temp){
//         temp= arr[index]
//        }
// }

// temp = Math.max(...arr)

// console.log(temp);


// Find second largest and smallest element from array

// let arr = [-2, -3, 1, 5, -6, 3]

// arr.sort((a,b) => a - b);

// let small = Math.min(...arr)
// let large = Math.max(...arr)
// let second_Large = -Infinity;
// let second_small = Infinity;

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > second_Large && arr[index] !== large) {
//         second_Large = arr[index]
//     }
//     if (arr[index] < second_small && arr[index] !== small) {
//         second_small = arr[index]
//     }
// }

// console.log("Second largest element is : ", second_Large);
// console.log("Second smallest element from array is : ", second_small);



// let arr = [5,4,8,9,2,1,6]

// let sm = Math.min(...arr)
// let lg = Math.max(...arr)
// let second_sm = Infinity
// let second_lg = -Infinity

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < second_sm && arr[index] !== sm) {
//         second_sm = arr[index]
//     }
//     if (arr[index] > second_lg && arr[index] !== lg) {
//         second_lg = arr[index]
//     }
// }

// console.log("second Smallest ", second_sm);
// console.log("Second largest :", second_lg);


// arr.sort((a,b) => a-b)

// console.log(arr[1]);
// console.log(arr[arr.length - 2]);

// let arr = [1,2,3,4,8,6,3,5,6]

// let k = arr.length -1
// let l = 0

// while(k > l){
//     let temp = arr[k]
//     arr[k] =arr[l]
//     arr[l] = temp
//     k--;
//     l++
// }


// let ans = []
// let len = arr.length -1;

// for (let i = len; i >= 0 ; i--) {
//     debugger
//     ans[len - i] = arr[i]
// }


// for(let i = 0 ; i < arr.length/2 ; i ++){
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1  - i]
//     arr[arr.length - 1 -  i] = temp;
// }

// arr.reverse();

// console.log(arr)






// const array = [1,2,3,2,1,4,3,2,3,4,5]
// const visit = []
// for (let i = 0; i < array.length; i++) {
//     debugger
//     if(!visit[i]){
//         let count = 1;
//         for (let j = i + 1; j < array.length; j++) {
//              if(array[i] == array[j]){
//                 visit[j] = true
//                 count++
//              }
//         }
//         console.log(array[i], " is time ", count);
//     }
// }



// const array = [1,2,3,2,1,4,3,2,3,4,5]

// const frequency = {}

// for (const ele of array) {
//     debugger
//     if(frequency[ele]){
//         frequency[ele]++
//     }else{
//         frequency[ele] = 1
//     }
// }
// console.log(frequency);



// const array = [1,2,3,2,1,4,3,2,3,4,5]
// const frequency = new Map();

// for (const ele of array) {
//     if (frequency.has(ele)) {
//         frequency.set(ele, frequency.get(ele) + 1)
//     }else{
//         frequency.set(ele, 1)
//     }
// }

// console.log(frequency);



// const array = [7,6,3,2,8,5]

// array.sort((a,b) => a -b)
// debugger
// const mid = Math.floor(array.length/2)
// const ascending = array.slice(0,mid)
// const descending = array.slice(mid)
// descending.reverse()

// const result = [...ascending, ...descending]


// const n = array.length
// const result = []
// for (let i = 0; i < n/2; i++) {
//     result.push(array[i])
// }
// for (let i = n -1; i >= n/ 2; i--) {
//     result.push(array[i])
// }

// console.log(result);


// const arr = [1,2,3,4,5]

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//        sum += arr[i]
// }


// sum = arr.reduce((item, ele) => {
//     return item + ele
// })


// function sumArray(arr, index = 0) {
//     debugger
//     if(index === arr.length){
//         return 0
//     }
//     return arr[index] + sumArray(arr, index + 1)
// }


// console.log(eval(arr.join('+')));



// const array = [1,2,3,4,5]

// let result = 0

// for (let i = 0; i < array.length; i++) {
//     debugger
//     sum += array[i]
// }

// result = array.reduce((item, ele) =>{
//     return item + ele
// })


// function sumData(arr, index = 0) {
//     debugger
//     if(index === arr.length){
//         return 0
//     }
//     return arr[index] + sumData(arr, index + 1)
// }



// console.log(eval(array.join('+')));


// Rotate Array by kth


// const arr = [1, 2, 3, 4, 5, 6]
// let k = 2

// k = k % arr.length
// while (k > 0) {
//   const temp = arr[0]
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1]
//   }
//   arr[arr.length - 1] = temp
//   k--
// }

// k = k % arr.length

// let temp = arr.slice(arr.length - k - 2)
// for (let i = arr.length - 1; i > k+1; i--) {
//   arr[i] = arr[i - k - 2]
// }

// for (let i = 0; i <= k; i++) {
//   arr[i] = temp[i]
// }


// let result = []
// for (let i = k; i < arr.length; i++) {
//   debugger
//   result[i - k] = arr[i]
// }
// for (let i = 0; i < k; i++) {
//   result[i + k + 2] = arr[i]
// }

// console.log(arr);

// const arr = [1,2,3,4,5]

// let sum = 0;
// let avg

// debugger
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }

// avg = sum / arr.length

// const sum = arr.reduce((total, ele) => total + ele)
// const avg = sum / arr.length

// console.log(avg);

// const arr = [7,2,5,1,9]
// arr.sort((a,b) => a-b)
// // const sort = arr.sort((a,b) => a-b)
// const mid = Math.floor(arr.length/2)
// let median = 0;

// debugger
// if (arr.length % 2 === 0) {
//     median = ((arr[mid] + arr[mid - 1]) / 2)
// }else{
//     median = arr[mid]
// }



// console.log(median);




// Remove Duplicates in-place from Sorted Array

// const nums = [0,0,0,1,1,1,2,2,2,3,3,5,5,6,6,7,7]

// let set = new Set(nums)
// let unq = Array.from(set)

// for (let i = 0; i < unq.length; i++) {
//     nums[i] = unq[i]
// }
// debugger

// const count = nums.length - unq.length
// for (let i = 0; i < count; i++) {
//     nums.pop()
// }
// console.log(nums);






// let unique = 0

// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] !== nums[unique]){
//         unique++;
//         nums[unique] = nums[i]
//     }
// }
// unique++;



// console.log(nums.slice(0, unique));







// Remove Duplicates From an Unsorted Array

// let unsorted = [3,1,2,2,1,4,5,4]
// const temp = unsorted

// for (let i = 0; i < unsorted.length; i++) {
//     if(temp[i]){
//         for (let j = i+1; j < unsorted.length; j++) {
//             if(unsorted[i] === unsorted[j]){
//                 temp[j] = true
//             }
//         }
//     }
// }

// unsorted = unsorted.filter(ele => ele !== true)


// console.log(unsorted);

// const set = new Set();
// let result = []








// for (let i = 0; i < unsorted.length; i++) {
//     debugger
//     if(!set.has(unsorted[i])){
//         set.add(unsorted[i])
//         result.push(unsorted[i])
//     }
// }

// debugger
// for (let i = 0; i < unsorted.length; i++) {
//     if(!result.includes(unsorted[i])){
//         result.push(unsorted[i])
//     }
// }

// console.log(result);



// Adding Element in an Array

// const arr = [1,2,3,4,5]
// n= 8
// index = 3
// for first index

// for (let i = arr.length-1; i >= 0; i--) {
//     arr[i + 1] = arr[i]
// }
// arr[0] = n

// arr.unshift(n)

// for last index

// arr[arr.length] = n
// arr.push(n,5,4,3,4,34)

// for (let i = arr.length-1; i >= index; i--) {
//     debugger
//     arr[i+1] =arr[i];
// }
// arr[index] = n
// console.log(arr);








// Find all repeating elements in an array

// const arr = [1,1,2,2,2,2,3,4,4,0]
// const dup = []
// const repeat = []
// count = 0


// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i] == arr[j] && !dup.includes(arr[i])){
//             dup[count++] = arr[i]
//         }
//     }
// }


// arr.sort((a,b) => a-b)
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i+1] && !dup.includes(arr[i])){
//         dup.push(arr[i])
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (dup[arr[i]]) {
//         dup[arr[i]]++
//     }else{
//         dup[arr[i]] = 1
//     }
// }
// for (let i = 0; i < dup.length; i++) {
//     debugger
//     if(dup[i] > 1){
//         repeat.push(i)
//     }
// }

// console.log(repeat);



// Find all the non-repeating elements in an array

// const arr = [4,4,4,4,4,1,2,2,2,2,7,8,9]
// let nonDup = []

// for (let i = 0; i < arr.length; i++) {
//     let chk = false;
//     for (let j = 0; j < arr.length; j++) {
//         debugger
//         if(i != j && arr[i] === arr[j]){
//             chk=true
//             break
//         }
//     }
//     if (!chk) {
//         nonDup.push(arr[i])
//     }
// }


// arr.sort((a,b) => a-b)

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i+1] != arr[i] && arr[i] != arr[i-1]){
//         nonDup.push(arr[i])
//     }
// }

// const freq = arr.reduce((it, item) => {
//     it[item] = (it[item] || 0) + 1;
//     return it
// }, {})

// nonDup = arr.filter(item => freq[item] === 1)

// console.log(nonDup);





// Find all Symmetric Pairs in the array of pairs


// const arr = [[1, 2], [2, 1], [3, 4], [4, 5], [5, 4]]
// let ans = []

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i][1] === arr[j][0] && arr[j][1] === arr[i][0]){
//             ans.push(arr[i,j])
//             break
//         }
//     }
// }
// console.log(ans);


// const arr = [[1, 2], [2, 1], [3, 4], [4, 5], [5, 4]]

// const pair = new Map();
// const symmetric = []

// for (const p of arr) {
//     const[a,b] = p;
//     const pairKey = `${a}-${b}`;
//     const reverspairKey = `${b}-${a}`
//     if(pair.has(reverspairKey)){
//         symmetric.push(p)
//         symmetric.push(pair.get(reverspairKey))
//         pair.delete(reverspairKey)
//     }else{
//         pair.set(pairKey,p)
//     }
// }

// console.log(symmetric);



// Maximum Product Subarray in an Array


// let num = [1,3,-2,5,-4,8,-5];
// let result = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < num.length -1; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//         let prod = 1;
//         for (let k = i; k <= j; k++) {
//             prod = prod * num[k]
//         }
//         result = Math.max(result, prod)
//     }
// }
// console.log(result);

// let pre = 1;
// let last = 1;

// for (let i = 0; i < num.length; i++) {
//     if(pre === 0){
//         pre = 1
//     }if(last === 0){
//         last = 1
//     }
//     pre *= num[i]
//     last *= num[num.length - i -1]
//     result = Math.max(result, Math.max(pre, last))
// }

// console.log(result);



// let maxend = num[0]
// let minend = num[0]
// let maxprod = num[0]

// for (let i = 0; i < num.length; i++) {
//     const temp = maxend;
//     maxend = Math.max(num[i], num[i] * maxend, num[i] * minend)
//     minend = Math.min(num[i], num[i]* temp, num[i]* minend)
//     maxprod = Math.max(maxprod, maxend)
// }

// console.log(maxprod);





// Replace elements by its rank in the array



// let num = [3,53,2,76,98,23,4,1,0,32,101]
// let result = []

// for (let i = 0; i < num.length; i++) {
//     const set = new Set();
//     for (let j = 0; j < num.length; j++) {
//         if (num[j] < num[i]) {
//             set.add(num[j])
//         }
//     }
//     let rank = set.size+1
//     result.push(rank)
// }

// console.log(result);

// const copynum  = [...num]
// copynum.sort((a,b) => a-b)

// const rankMap = new Map();
// let rank = 1

// for (const n of copynum) {
//     if(!rankMap.has(n)){
//         rankMap.set(n, rank)
//         rank++
//     }
// }
// for (let i = 0; i < num.length; i++) {
//     num[i] = rankMap.get(num[i])
// }


// console.log(num);


// Sort Elements of an Array by Frequency


// const num= [1,2,3,4,2,3,4,3,4,5]

// const freqMap = {}

// num.forEach((ele) => {
//     freqMap[ele] = (freqMap[ele] || 0) + 1
// });

// num.sort((a,b) =>{
//     const freqa = freqMap[a]
//     const freqb = freqMap[b]
//     if(freqa === freqb){
//         return a-b
//     }
//     return freqb - freqa
// })

// console.log(num);




// Rotation of elements of array- left and right



// const arr = [10, 11, 12, 3, 7, 8, 9]

// let k = 3

// while (k > 0) {
//     let temp = arr[arr.length - 1]
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i] = arr[i - 1]
//     }
//     arr[0] = temp
//     k--
// }

// console.log(arr);

// let temp = arr.splice(arr.length - k , k)
// arr.unshift(...temp)

// console.log(arr)




// let k = 3

// while (k > 0) {
//     let temp = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = temp
//     k--
// }

// console.log(arr);

// let temp = arr.splice(0, k)

// arr.push(...temp)

// console.log(arr);





// Finding equilibrium index of an array


// let arr = [5, 4, -1, 8, 8]

// for (let i = 0; i < arr.length; i++) {
//     let left = 0
//     for (let j = 0; j < i; j++) {
//         left += arr[j]
//     }
//     let right = 0
//     for (let j = i+1; j < arr.length; j++) {
//         right += arr[j]
//     }
//     if (right === left) {
//         console.log(i);
//         break
//     }
// }





// Sort an array according to the order defined by another array

// let arr = [2,1,2,5,7,1,9,3,8,8,5,3,4]

// let order = [2,1,8,5,3,4]

// let pos = 0

// for (let i = pos; i < order.length; i++) {
//     for (let j = pos; j < arr.length; j++) {
//         if(arr[j] === order[i]){
//             let temp = arr[j]
//             arr[j] = arr[pos]
//             arr[pos] =temp
//             pos++
//         }
//     }
// }

// console.log(arr);


// Search an element in an array


// let arr = [1,2,3,4,3,2,3,4,5,2]

// let k = 2
// let ans = []

// arr.forEach((ele, i)=>{
//     if(ele === k){
//         ans.push(i)
//     }
// })

// console.log(ans);


// Check if array is subset of another array

// const arr1  =[9,1,2,3,4]

// const arr2 = [5,4,3,7,6,4,2,1,3]

// let flag = false
// for (let i = 0; i < arr1.length; i++) {
//     flag = false
//     debugger
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             flag = true
//             break
//         }
//     }
//     if (!flag) {
//         break
//     }
// }

// console.log(flag);


// check a number is palindrome or not

// let num = 121

// let rev = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// let copy = num;
// let rev = 0

// while (copy > 0) {
//     let temp = copy % 10
//     rev = rev * 10 + temp
//     copy = Math.floor(copy / 10)
// }


// if (num === rev) {
//     console.log("Its palindrome");
// }else{
//     console.log(num,"Its not palindrome",rev);
// }



// Find all Palindrome Numbers in a given range

// let min = 10
// let max = 70

// let result = []



// for (let i = min; i <= max; i++) {
//     let rev = parseFloat(i.toString().split('').reverse().join('')) * Math.sign(i)
//     if (rev === i) {
//         result.push(i)
//     }
// }


// for (let i = min; i <= max; i++) {
//     let copy = i;
//     let rev = 0
//     while (copy > 0) {
//         let temp = copy % 10
//         rev = rev *10 + temp
//         copy = Math.floor(copy/10)
//     }
//     if (rev === i) {
//         result.push(i)
//     }
// }


// console.log(result);



// Prime Number


// const num = 15

// let flag = true

// for (let i = 2; i < num; i++) {
//     if(num % i === 0){
//         flag = false
//         break
//     }
// }


// console.log(flag);


// Prime Number in a given range


// let min = 3
// let max = 200
// let result = []
// let flag = true


// for (let i = min; i <= max; i++) {
//     flag = true
//     for (let j = 2; j < i; j++) {
//         if(i % j === 0){
//             flag = false
//             break
//         }
//     }
//     if (flag) {
//         result.push(i)
//     }
// }


// console.log(result);

// Check if a number is Armstrong Number or Not


// const num = 1534


// let result = 0
// let copy = num

// let digit = copy.toString().length

// while (copy > 0) {
//     let temp = copy % 10
//     result = result + Math.pow(temp, digit)
//     copy = Math.floor(copy/10)
// }


// if(result === num){
//     console.log("Its Armstrong Number");
// }else{
//     console.log("Its not Armstrong Number");
// }



// Check whether a number is Perfect number or not


// const num = 21

// let sum = 0

// for (let i = 1; i <= num/2; i++) {
//     if(num % i === 0){
//         sum += i
//     }
// }

// if (sum === num) {
//     console.log("Its perfect number");
// }else{
//     console.log("Its not perfect number");
// }




// Check whether a given number is even or odd


// const num = 11

// if (num % 2 === 0) {
//     console.log("Its even number");
// }else{
//     console.log("Its odd number");
// }


// if ((num & 1) === 0) {
// console.log("Its even number");
// }else{
//     console.log("Its odd number");
// }


// Check whether a given number is positive or negative

// const num = 0

// if (num > 0) {
//     console.log("Its positive");
// } else {
//     console.log("Its negative");
// }

// if(num >> 31 === 0){
//     console.log("Its positive");
// }else{
//     console.log("Its negative");
// }

// console.log((Math.sign(num)));


// Sum of N natural number

// const n = 5

// let sum = 0

// for (let i = 0; i <= n; i++) {
//     sum += i
// }

// sum = n * (n + 1) /2

// console.log(sum);


// Find sum of AP series


// const n = 5
// let a = 1.5
// const d = 3

// let sum = 0

// for (let i = 1; i <= n; i++) {
//     sum += a
//     a += d
// }

// sum = (n / 2) * (2 * a + (n - 1) * d)

// console.log(sum);



// Program to find the sum of GP Series

// const n = 3
// let a = 1
// const r = 0.5
// let sum = 0

// for (let i = 0; i < n; i++) {
//     sum += a
//     a *= r
// }


// sum = a * (Math.pow(r, n) - 1) / (r - 1);

// console.log(sum);



// Greatest of two number

// const a = 5
// const b = 4

// console.log(Math.max(a,b,c));


// if(a>b){
//     console.log(a, " is greater");
// }else{
//     console.log(b, " is greater");
// }


// leap year

// const year = 2000

// if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
//     console.log("Its leap year");
// } else {
//     console.log("Its not leap year");
// }


// Reverse of number

// let num = 723
// let rev = 0

// rev = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// while (num > 0) {
//     let temp = num % 10;
//     rev = rev * 10 + temp
//     num = Math.floor(num/10)
// }
// console.log(rev);


// Maximum and Minimum Digits in a Number


// let num = 432678

// let max = Number.MIN_SAFE_INTEGER
// let min = Number.MAX_SAFE_INTEGER

// while (num > 0) {
//     let temp = num % 10;
//     max = Math.max(temp, max)
//     min = Math.min(temp, min)
//     num = Math.floor(num / 10)
// }

// console.log(max ," is maximum and minimum is ", min);


// Print fibbonacci Nth series
// 0, 1,1,2,3,5

// let n = 5
// let arr = []
// arr[0] = 0
// arr[1] = 1
// for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 2] + arr[i - 1]
// }
// console.log(arr);


// Factorial of a number

// const num2 = 5

// First Way

// console.log(Array.from({length: num}, (_, i)=>i + 1).reduce((acc, j)=> acc * j))



// let result = 1

// for (let i = 2; i <= num; i++) {
//     result *= i
// }

// Recursion Method for

// function fact(num) {
//     if(num === 0 || num === 1){
//         return 1
//     }
//     return num * fact(num -1)
// }

// console.log(fact(num2));



// Power of number

// const num = 5
// const p = 3

// let result = 1

// result = Math.pow(num, p)

// result = num ** p

// for (let i = 0; i < p; i++) {
//     result *= num
// }


// console.log(result);


// Factors of number

// const num = 9
// let result = []
// console.log(Array.from({length:num},(_,i)=> i+1).filter((i)=> num%i===0));

// for (let i = 1; i <=num; i++) {
//     if(num % i === 0){
//         result.push(i)
//     }
// }

// for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         if (num / i === i) {
//             result.push(i)
//         } else {
//             result.push(num / i, i)
//         }
//     }
// }


// console.log(result);


// Prime factors of number



// let num  = 24

// let result = []
// let div = 2

// while (num >= 2) {
//     debugger
//     if(num % div === 0){
//         result.push(div)
//         num /= div
//     }
//     else{
//         div++
//     }
// }

// console.log(result);



// Strong Number


// let num = 145
// const numstr = num.toString()
// const result = numstr.split('').reduce((acc, digit) =>
//     parseInt(acc) + Array.from({ length: digit },
//         (_, i) => i + 1)
//         .reduce((acc, cur) => acc * cur)
// )


// let sum = 0;
// for (let i = 0; i < numstr.length; i++) {
//     const digit = parseInt(numstr[i], 10)
//     let result = 1;
//     for (let j = 2; j <= digit; j++) {
//         result*= j
//     }
//     sum += result
// }

// console.log(sum);


// Automorphic number


// let num = 25
// const res = (num * num).toString().endsWith(num.toString())
// let flag = true
// let sqr = num * num
// while (num > 0) {
//     if (num % 10 !== sqr % 10) {
//         flag = false
//         break
//     }
//     num = Math.floor(num / 10)
//     sqr = Math.floor(sqr / 10)
// }
// console.log(flag);

// Find GCD of two numbers

// const a = 50
// const b = 60

// let ans;

// function gcd(a,b) {
//     return Math.abs(b) === 0 ? Math.abs(a):
//     gcd(b , a%b)
// }

// for (let i = 1; i < Math.min(a,b); i++) {
//     debugger
//     if(a % i === 0 && b % i === 0){
//         ans = i
//     }
// }

// console.log(ans);


// Find LCM of two number

// let gcd = 1
// const a = 4
// const b = 8

// for (let i = 1; i < Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//         gcd = i
//     }
// }

// let lcm = (a * b)/ gcd
// console.log(lcm);



// Check if number is harshed number or not


// let num = 378

// let sum = 0
// let original = num

// sum = [...num.toString()].reduce((acc,digit) =>
//  acc + parseInt(digit, 10), 0)


// while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
//
// let str = num.toString()
// for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i])
// }

// console.log(num % sum === 0);


// Check if the number is an abundant number or not


// let num = 18
// let sum = 1
// for (let i = 0; i < num; i++) {
//     if(num % i === 0){
//         sum += i
//     }
// }

// for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         sum+=i
//         if(i !== num/i){
//             sum += num / i
//         }
//     }
// }

// console.log(sum > num);

// Sum of digits of a number


// let num = 2341

// let digit = num.toString().split('').map(Number)
// console.log(digit.reduce((sum, digit) => sum + digit, 0));

// let sum = 0
// while (num > 0) {
//     sum = sum + num % 10
//     num = Math.floor(num / 10)
// }
// let digit = Array.from(String(num), Number)
// console.log(digit.reduce((sum, digit) =>
//  sum + digit, 0 ));


// Find the sum of number in the given range

// const start = 2
// const end = 9
// let sum = 0
// for (let i = start; i <= end; i++) {
//     sum += i
// }
// sum = (end * (end + 1))/2 - ((start - 1) * (start))/2
// console.log(sum);


// Permutations in which N people can occupy R seats

// const n = 6
// const r = 4
// let num = 1
// let den = 1
// for (let i = 1; i <= n; i++) {
//     num *= i
// }
// for (let i = 1; i <= n - r; i++) {
//     den *= i
// }
// let ans = 1
// for (let i = n; i >= n - r + 1; i--) {
//     ans *= i
// }
// console.log(ans);

// Replace all the 0's with 1 in a given integer


// let num = 102000032

// console.log(num.toString().replace(/0/g, '1'));

// console.log(num.toString().split('0').join('1'));

// let ans = 0
// let tm = 1

// while (num > 0) {
//     let d = num % 10
//     if (d === 0) {
//         d = 1
//     }
//     ans = d * tm + ans
//     num = Math.floor(num / 10)
//     tm = tm * 10
// }

// console.log(ans);



// Check if the given String is Palindrome or not

// const str = "abc1cba"

// const reverse = str.split('').reverse().join('')
// console.log(reverse === str);

// let flag = true

// for (let i = 0; i < str.length/2; i++) {
//     if(str.charAt(i) !== str.charAt((str.length - 1) - i)){
//         flag = false
//         break
//     }
// }

// console.log(flag);



// Count number of vowels, consonants, spaces, numbers in String


// const str = "Hell5o BuddyA 1001"

// let vowel = str.match(/[aeiouAEIOU]/g);
// let consonant = str.match(/[bcdfghjklmnpqrstvwyzHB]/g);
// let spaces = str.match(/[\s]/g)
// let num = str.match(/[0-9]/g)


// console.log(vowel.length);
// console.log(consonant.length);
// console.log(spaces.length);
// console.log(num.length);



// let dummy = str.split('')
// let vowel = dummy.filter(char => /[aeiouAEIOU]/.test(char)).length
// let consonant  =dummy.filter(char => /[a-z]/.test(char) && !/[aeiouAEIOU]/.test(char) ).length

// let space = dummy.filter(char => char === ' ').length
// let num = dummy.filter(char => /[0-9]/.test(char)).length

// console.log(num);


// Find the ASCII value of a character


// const ch = 'ABCD'

// let assciVal = ch.charCodeAt()

// let  assciVal = ch.codePointAt()

// console.log(assciVal);



// ['a', 'e', 'i','o', 'u', 'A', 'E', 'I','O', 'U']

// Remove all vowels from the String


// let str = "Hello, World"
// let ans = str.replace(/[aeiouAEIOU]/g, '')
// console.log(ans);

// let result = str.split("").filter((ch) =>{
//     return 'aeiouAEIOU'.indexOf(ch) === -1
// }).join('')

// console.log(result);


// let vowel = new Set(['a', 'e', 'i','o', 'u', 'A', 'E', 'I','O', 'U']);
// let result = str.split('').filter(ch =>{
//     return !vowel.has(ch);
// }).join('')
// console.log(result);


// Remove Spaces from a String


// let str = "Hello World We are Ready to code"

// let out = str.split(' ').join('')

// console.log(out);


// let out = str.replace(/\s/g, '')

// let out = str.split('').filter(ch => ch !== " ").join('')
// console.log(out);

// Remove characters from a string except alphabets

// const str  ="Hello123 World!$"

// let out = str.replace(/[^a-zA-Z" "]/g, "")


// let out = str.split('').filter(ch => /[a-zA-Z" "]/.test(ch)).join('')

// console.log(out);


// Reverse a String

// const str = "Hello World"
// let out = str.split('').reverse().join('')

// let out = '';
// for (let i = str.length-1; i >= 0; i--) {
//     out += str[i]
// }

// out = [...str].reverse().join('')
// console.log(out);



// const str = "(a+b) * (a-b) / (c -s)";

// let out = ''

// // out = str.replace(/[)(]/g, '')

// for (let i = 0; i < str.length; i++) {
//     if(str.charAt(i) !== ')' && str.charAt(i) !== '('){
//         out += str.charAt(i)
//     }
// }
// console.log(out);



// Sum of the Numbers in a String


// const str = "abc123$54"
// let num = str.match(/\d/g)
// let out = num.reduce((acc, n) =>{
//     return acc+ parseInt(n, 10)
// },0)

// let out = 0

// for (let i = 0; i < str.length; i++) {
//     if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
//         out += +str.charAt(i)
//     }
// }

// console.log(out);


// Capitalize first and last character of each word of a string

// const str = "hello world"

// let out = str.split(' ').map((word) =>{
//     return word.charAt(0).toUpperCase() + word.slice(1,-1)+
//     word.charAt(word.length -1).toUpperCase()
// }).join(' ')

// let out = ''

// const temp = str.split('')

// for (let i = 0; i < temp.length; i++) {
//     if(i === 0 || i == temp.length -1){
//         temp[i] = str.charAt(i).toUpperCase()
//     }else if(str.charAt(i) === ' '){
//         temp[i-1] = str.charAt(i-1).toUpperCase()
//         temp[i+1] = str.charAt(i+1).toUpperCase()
//     }
// }
// out = temp.join('')

// console.log(out);




// Frequency of characters in a String

// const str = "hello world"

// first approach
// const obj = {}

// for(let ch of str){
//     obj[ch] = (obj[ch] || 0) + 1
// }
// console.log(obj);


// Second Approach

// const result = new Map();

// for(let ch of str){
//     result.set(ch, (result.get(ch) || 0) + 1)
// }

// console.log(result);


// Third Approach


// let sort = str.split('').sort().join('')
// let map = new Map()
// let count = 0
// let ch = sort[0]

// for (let i = 0; i < sort.length; i++) {
//     if(sort.charAt(i) === ch){
//         count++
//     }else{
//         map.set(ch, count)
//         count  = 1
//         ch = sort.charAt(i)
//     }
// }

// console.log(map);

// Fourth way


//   const str = "hello world";
//   const charFrequency = str.split('').reduce((frequency, char) => {
//     frequency[char] = (frequency[char] || 0) + 1;
//     return frequency;
//   }, {})
//   console.log(charFrequency);


// Find Non-repeating characters of a String

// const str = "Hello world"

// first Approach

// const obj = {}

// for(let ch of str){
//     obj[ch] = (obj[ch] || 0 ) + 1
// }

// console.log(Object.keys(obj).filter(ch => obj[ch] === 1));


// Second Approach

// for (let i = 0; i < str.length; i++) {
//     if(str.indexOf(str[i])  ===  str.lastIndexOf(str[i])){
//         console.log(str[i]);
//     }
// }


// Check if two Strings are anagrams of each other


// const str1 = 'listenn'
// const str2 = 'silentn'

// first Approach

// const sortStr1 = str1.split('').sort().join('')
// const sortStr2 = str2.split('').sort().join('')

// console.log(sortStr1 === sortStr2);


// Second Approach

// let obj1 = {}
// let obj2 = {}
// let flag = true

//  for(let ch of str1){
//     obj1[ch] = (obj1[ch] || 0) + 1
//  }

//  for(let ch of str2){
//     obj2[ch] = (obj2[ch] || 0) + 1
//  }

//  for(let key in obj1){
//     if(obj1[key] !== obj2[key]){
//         flag = false
//         break
//     }
//  }

//  console.log(flag);

// Count common sub-sequence in two strings


// const str1 = 'ajblqcpdz'
// const str2 = 'aefcnbtdi'

// const len1 = str1.length
// const len2 = str2.length
// const array = Array.from({length: len1 + 1}, () => Array(len2+1).fill(0))

// for (let i = 1; i <= len1; i++) {
//     for (let j = 1; j <= len2; j++) {
//         if(str1[i -1]  === str2[j - 1]){
//         array[i][j] = array[i-1][j-1] + array[i-1][j] +1
//     }else{
//         array[i][j] = array[i-1][j] + array[i][j-1] -array[i-1][j-1]
//     }
// }
// }
// console.log(array);




// Maximum occurring character in a string

// let str = "hello worlddddd"

// first Approach

// let obj = {}
// let maxch = ''
// let maxCount = 0


// for(let ch of str){
//     obj[ch] = (obj[ch] || 0) + 1
//     if(obj[ch] > maxCount){
//         maxCount = obj[ch]
//         maxch = ch
//     }
// }

// console.log(maxCount , " and " , maxch);


// Second Approach

// let chCount = Array(256).fill(0);


// for(let ch of str){
//     chCount[ch.charCodeAt(0)]++
//     if(chCount[ch.charCodeAt(0)] > maxCount){
//         maxCount = chCount[ch.charCodeAt(0)]
//         maxch = ch
//     }
// }

// console.log(maxCount , " and " , maxch);


// Remove All Duplicates from a String

// let str = 'abbaccddeff'

// First Approach

// let result = [...new Set(str)].join('')

// console.log(result);


// Second Approach


// let result = str.split('').filter((val, ind, self) => self.indexOf(val) === ind ).join('')

// third Approach

// let obj = {}
// let result=''
// for(let ch of str){
//     if(!obj[ch]){
//         result += ch
//         obj[ch] = true
//     }
// }
// console.log(result);

// Print all the duplicates in the string

// let str = 'Hello world'

// first Approach
// let obj = {}

// for(let ch of str){
//     obj[ch] = (obj[ch] || 0) +1
// }
// for(let ch in obj){
//     if(obj[ch] > 1){
//         console.log(ch, " is duplicated ", obj[ch]);
//     }
// }

// let result = []

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i]
//     if(str.indexOf(ch) !== str.lastIndexOf(ch) && !result.includes(ch)){
//         result.push(ch)
//     }
// }
// console.log(result);




// Remove Characters from first String present in the Second String


// const str1 = 'abcde'
// const str2 = 'acfh'

// First Approach

// let result = ''

// for (let i = 0; i < str1.length; i++) {
//     if(str2.indexOf(str1[i]) === -1){
//         result += str1[i]
//     }
// }

// console.log(result);


// Second approach


// result = str1.split('').filter(ch => str2.indexOf(ch) === -1)
// console.log(result.join(''));


// Third Approach

// let regex = new RegExp('[' + str2 + ']', 'g')

// console.log(str1.replace(regex, ''));


// Change every letter with next lexicographic alphabet in the given string

// const str = "Hello world z"

// const result = str.split('').map(ch => {
//     if(ch >= 'a' && ch < 'z'){
//         return String.fromCharCode(ch.charCodeAt(0) + 1)
//     }else if(ch >= 'A' && ch < 'Z'){
//         return String.fromCharCode(ch.charCodeAt(0) + 1)
//     } else if(ch === 'z'){
//         return 'a'
//     }else if(ch === 'Z'){
//         return 'A'
//     }else{
//         return ch
//     }
// }).join('')

// Second approach


// let result = str.replace(/[a-zA-Z]/g, (ch) => {
//     return String.fromCharCode(ch.charCodeAt(0) + (ch < 'z' ? 1 : -25))
// })


// console.log(result);


// Find the largest word in a String

// let str = "This code is little different from other"

// First Approach

// let result =  str.split(' ').reduce((largest, current) => {
//     return current.length > largest.length ? current : largest
// },'')

// console.log(result);

// Second approach

// let len = str.length
// let i =0,j=0
// let maxword=''
// let maxLen = 0
// let start = 0

// while(j <= len){
//     if((j < len && str.charAt(j) !== ' ') || j === len){
//         j++
//     }else{
//         let currentLen = j - i
//         if(currentLen > maxLen){
//             maxLen = currentLen
//             start = i
//         }
//         j++
//         i = j
//     }
// }
// maxword = str.substring(start, start + maxLen)
// console.log(maxword);


// Write a program to sort characters in a string

// First Approach

// var str = "helloworld"

// var result = str.split('').sort().join('')
// console.log(result);

// var chArra = str.split('')

// for (let i = 0; i < chArra.length -1; i++) {
//     for (let j = i+1; j < chArra.length; j++) {
//        if(chArra[i] > chArra[j]){
//         let temp = chArra[i]
//         chArra[i] = chArra[j]
//         chArra[j] = temp
//        }
//     }
// }

// console.log(chArra.join(''));



// Count the number of words in a given string


// let str = "This is a good boy"

// let result = str.split(' ').filter(word => { return word.length > 0 }).length

//  console.log(result);


// let count = 0
// let wordcheck = false

// for(let ch of str){
//     if(/\w/.test(ch)){
//         if(!wordcheck){
//             wordcheck = true
//             count++
//         }
//     }else{
//         wordcheck = false
//     }
// }
// console.log(count);


// Integer to roman

// let dict = ['M', "CM", "D", "CD", "C","XC", "L","XL","X","IX","V","IV","I"]
// let index = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
// let num = 832
// let res =""

// for (let i = 0; num !== 0; i++) {
//     debugger
//     {
//         while (num >= index[i]) {
//             num -= index[i]
//             res += dict[i]
//         }
//     }
// }

// console.log(res);

// Convert Number to Roman

// let num = 18
//     const romanMap = new Map([
//       [1000, "M"],
//       [900, "CM"],
//       [500, "D"],
//       [400, "CD"],
//       [100, "C"],
//       [90, "XC"],
//       [50, "L"],
//       [40, "XL"],
//       [10, "X"],
//       [9, "IX"],
//       [5, "V"],
//       [4, "IV"],
//       [1, "I"]
//     ]);

//     let out = ""

//     for(let [val, symbol] of romanMap){
//       while(num >= val){
//         out += symbol
//         num -= val
//       }
//     }


// console.log(out);



// Find word with highest number of repeated letters in string


// const str = "apple banana orange strawbrry kiwoooooooooi"

// const word = str.split(" ")

// const result = word.reduce((maxWord, currenWord) => {
//     const repeatCount = currenWord.split('').filter((ch, index, array) => array.indexOf(ch) !== index).length
//     return repeatCount > maxWord.count ? { word: currenWord, count : repeatCount } :
//     maxWord
// }, {word:'', count: 0})

// console.log(result.word);



// const word = str.split(/\s+/)

// let maxCount = 0
// let maxStr = ''
// for (const w of word) {
//     const charCount = new Map();
//     let repeatCount = 0;
//     for (const ch of w) {
//         charCount.set(ch, (charCount.get(ch) || 0) + 1)
//         repeatCount = Math.max(repeatCount, charCount.get(ch))
//     }
//     if (repeatCount > maxCount) {
//         maxCount = repeatCount
//         maxStr = w
//     }
// }

// console.log(maxStr);


// Change case of each character in a string

// A-Z = 65 - 90
// a-z = 97 - 122

// let str1 = "Hello World"

// let result1 = ''

// for(let i = 0; i < str1.length; i++){
//     let charCode = str1.charCodeAt(i)
//     result1 += (charCode >= 65 && charCode <= 90) ?
//     String.fromCharCode(charCode + 32) :
//     (charCode >= 97 && charCode <= 122) ?
//     String.fromCharCode(charCode - 32)
//     : str1[i]
// }
// console.log(result1);


// Second Approach

// console.log(str1.replace(/./g, char => (char === char.toUpperCase() ?
//     char.toLowerCase() : char.toUpperCase())));


// console.log(str1
//     .split('')
//     .map(char => (char === char.toUpperCase() ? char.toLowerCase :
//     char.toUpperCase())).join(''));

// ;



// Find the Position of a Substring within a String

// const mainString= "Hello, world"
// const subStr = "world"

// const regex = new RegExp(subStr)
// const match = mainString.match(regex)

// const match = mainString.indexOf(subStr)
// const match = mainString.search(subStr)

// console.log(match);



// let N = mainString.length
// let M = subStr.length
// let result = -1

// for(let i = 0 ; i< N; i++){
//     let temp = i;
//     let j = 0;
//     for (j = 0; j < M; j++) {
//         if(mainString[temp] != subStr[j]){
//             break;
//         }
//         temp++;
//     }
//     if(j === M){
//         result = i
//     }
// }

// console.log(result);


// Reverse Words in a String

// let str = "Hello World abssfdsfs sdfdsf"
// let temp = ''
// let result = ''
// result = str.split(' ').reduce((revers, word) => word + " " + revers, '').trim()


// for (let i = str.length-1; i >= 0; i--) {
//     if (str[i] === ' ') {
//         result += temp.split('').reverse().join('') + ' '
//         temp = ""
//     } else {
//         temp += str[i]
//     } if (i === 0) {
//         result += temp.split('').reverse().join('')
//         temp = ''
//     }
// }

// console.log(result);


// Conversion Of Numbers ##########################


// Binary To Decimal Conversion

// var binaryNumber = '1101'
// var decimalNumber = 0

// var binaryLength = binaryNumber.length
// for (let i = 0; i < binaryLength; i++) {
//     var digit = parseInt(binaryNumber[i])
//     var power = binaryLength - i - 1
//     decimalNumber += digit* Math.pow(2, power)
// }

// console.log(decimalNumber);

// Second approach 

// var decimal = parseInt(binaryNumber, 2)
// console.log(decimal);

// Third Approach

// var result  = binaryNumber.split('').reverse().reduce(function (acc,digit, index){
//     return acc + parseInt(digit) * Math.pow(2,index)
// }, 0);

// console.log(result);

// Convert Binary to Octal

// let binaryNumber = '1101101'


// let decimal = parseInt(binaryNumber, 2)
// console.log(decimal.toString(8));




// let result = ''
// while (binaryNumber.length %3 !== 0) {
//     binaryNumber = '0' + binaryNumber
// }

// for (let i = 0; i < binaryNumber.length; i += 3) {
//     let threeDigits = binaryNumber.slice(i, i+ 3)
//     let decimal = parseInt(threeDigits, 2)
//     result += decimal.toString(8)
// }
// console.log(result);




// Convert Decimal to Binary Number


// let decimal = 10
// let binary = ''

// while (decimal > 0) {
//     binary = (decimal % 2) + binary
//     decimal = Math.floor(decimal / 2);
// }
// console.log(binary);


// Second Approach

// function decimalConversion(decimal){
//     debugger
//     if(decimal === 0){
//         return ''
//     }else{
//         return decimalConversion(Math.floor(decimal / 2)) + (decimal % 2).toString()
//     }
// }

// let decimalNum = 10
// console.log(decimalConversion(decimalNum));


// Third approach

// console.log(decimalNum.toString(2));




// Convert Decimal to Octal


// let decimalNum = 42

// console.log(decimalNum.toString(8));

// let octalNum = ''
// while (decimalNum >0 ) {
//     debugger
//     octalNum = (decimalNum % 8).toString() + octalNum
//     decimalNum = Math.floor(decimalNum / 8)
// }
// console.log(octalNum);


// Octal to binary Conversion

// let octalNum = '12'
// let decimal = parseInt(octalNum, 8)

// console.log(decimal.toString(2));

// for (let i = 0; i < octalNum.length; i++) {
//     let octalDigit = parseInt(octalNum[i], 8)
//     for (let j = 2; j >= 0; j--) {
//         binaryNum += (octalDigit & (1 << j)) ? '1' : '0'
//     }
// }

// console.log(binaryNum);


// Convert Octal to Decimal

// let octalNum = '755'

// let deciamlOut = [...octalNum].reduce((decimal, digit) =>
//     decimal * 8 + parseInt(digit, 10), 0)
// console.log(deciamlOut);


// console.log(parseInt(octalNum, 8));


// Convert digits/numbers to words

// const ones = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12: "twelve",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen",
// };
// const prefixes = {
//     2: "twenty",
//     3: "thirty",
//     4: "fourty",
//     5: "fifty",
//     6: "sixty",
//     7: "seventy",
//     8: "eighty",
//     9: "ninety",
// };
// const digitToString = (num) => {
//     let output = 0
//     const numArray = num.split('')
//     if (+num in ones) {
//         output = ones[+num]
//     } else if (numArray.length === 2 && +num > 19) {
//         output = prefixes[numArray[0]] + " " + ones[numArray[1]]
//     } else if (numArray.length === 3) {
//         if (+numArray[1] === 0) {
//             output = ones[numArray[0]] + " hundered " + ones[numArray[2]]
//         } else if (+numArray[1] < 2) {
//             output = ones[numArray[0]] + " hundered " + ones[+[numArray[1], numArray[2]].join("")]
//         } else {
//             output =
//                 ones[numArray[0]] + " hundred " + prefixes[numArray[1]] + " " + ones[numArray[2]]
//         }
//     } else if (numArray.length === 4) {
//         if (+numArray[1] === 0) {
//             output = ones[numArray[0]] + " thousand " +
//                 ones[+[numArray[2], numArray[3]].join('')]
//         } else if (+numArray[1] < 2) {
//             output =
//                 ones[numArray[0]] +
//                 " thousand " + ones[numArray[1]] +
//                 " hundred " +
//                 ones[+[numArray[2], numArray[3]].join('')]
//         } else {
//             output =
//                 ones[numArray[0]] + " thousand " + ones[numArray[1]] +
//                 " hundred " +
//                 prefixes[numArray[2]] +
//                 " " +
//                 ones[numArray[3]]
//         }
//     } else if (numArray.length === 5) {
//         if (+numArray[4] === 0 && +numArray[3] === 0 && +numArray[2] === 0) {
//             if (+[numArray[0], numArray[1]].join('') <= 19) {
//                 output = ones[+[numArray[0], numArray[1]].join('')] + " thousand "
//             } else if (+[numArray[0], numArray[1]].join('') > 19 && +numArray[1] !== 0) {
//                 output = prefixes[numArray[0]] + ones[numArray[1]] + " thousand "
//             } else {
//                 output = prefixes[numArray[0]] + " thousand "
//             }
//         }
//         else if (+[numArray[0], numArray[1]].join('') <= 19 && +numArray[3] < 2 && +numArray[2] === 0) {
//             output = ones[+[numArray[0], numArray[1]].join('')] + " thousand " +
//                 ones[+[numArray[3], numArray[4]].join("")]
//         }
//         else if (+[numArray[0], numArray[1]].join('') <= 19 && +numArray[3] < 2) {
//             output = ones[+[numArray[0], numArray[1]].join('')] + " thousand " +
//                 ones[numArray[2]] + " hundered " + ones[+[numArray[3], numArray[4]].join("")]
//         }
//         else if (+[numArray[0], numArray[1]].join('') <= 19 && +numArray[3] > 1 && +numArray[2] === 0) {
//             output = ones[+[numArray[0], numArray[1]].join('')] + " thousand " +
//                 prefixes[numArray[3]] + " " + ones[+numArray[4]]
//         }
//         else if (+[numArray[0], numArray[1]].join('') <= 19 && +numArray[3] > 1) {
//             output = ones[+[numArray[0], numArray[1]].join('')] + " thousand " +
//                 ones[numArray[2]] + " hundered " + prefixes[numArray[3]] + " " + ones[+numArray[4]]
//         }
//         else if (+[numArray[0], numArray[1]].join('') > 19 && +numArray[3] < 2 && +numArray[2] === 0) {
//             if (+numArray[1] === 0) {
//                 output = prefixes[numArray[0]] + " thousand " +
//                     ones[+[numArray[3], numArray[4]].join("")]
//             } else {
//                 output = prefixes[numArray[0]] + ones[numArray[1]] + " thousand " +
//                     ones[+[numArray[3], numArray[4]].join("")]
//             }
//         }
//         else if (+[numArray[0], numArray[1]].join('') > 19 && +numArray[3] < 2) {
//             if (+numArray[1] === 0) {
//                 output = prefixes[numArray[0]] + " thousand " +
//                     ones[numArray[2]] + " hundered " + ones[+[numArray[3], numArray[4]].join("")]
//             } else {
//                 output = prefixes[numArray[0]] + ones[numArray[1]] + " thousand " +
//                     ones[numArray[2]] + " hundered " + ones[+[numArray[3], numArray[4]].join("")]
//             }
//         }
//         else if (+[numArray[0], numArray[1]].join('') > 19 && +numArray[3] > 1 && +numArray[2] === 0) {
//             if (+numArray[1] === 0) {
//                 output = prefixes[numArray[0]] + " thousand " +
//                     prefixes[numArray[3]] + " " + ones[+numArray[4]]
//             } else {
//                 output = prefixes[numArray[0]] + ones[numArray[1]] + " thousand " +
//                     prefixes[numArray[3]] + " " + ones[+numArray[4]]
//             }
//         }
//         else if (+[numArray[0], numArray[1]].join('') > 19 && +numArray[3] > 1) {
//             if (+numArray[1] === 0) {
//                 output = prefixes[numArray[0]] + " thousand " +
//                     ones[numArray[2]] + " hundered " + prefixes[numArray[3]] + " " + ones[+numArray[4]]
//             } else {
//                 output = prefixes[numArray[0]] + ones[numArray[1]] + " thousand " +
//                     ones[numArray[2]] + " hundered " + prefixes[numArray[3]] + " " + ones[+numArray[4]]
//             }
//         }
//     }
//     return output
// }
// console.log(digitToString('34341'));

// bubble Sort

// a = 5
// b = 10
// a = a + b
// b = a - b
// a = a - b

// let arr = [5, 4, 3, 7, 6]

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             arr[j] = arr[j] + arr[j + 1]
//             arr[j + 1] = arr[j] - arr[j + 1]
//             arr[j] = arr[j] - arr[j + 1]
//         }
//     }
// }
// console.log(arr);


// Selection Sort


// let arr = [3,4,5,1,2,7]

// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] =arr[j]
//             arr[j] = temp
//         }
//     } 
// }

// console.log(arr);


// Insertion Sort

// let arr = [7, 6, 4, 2, 8, 1]

// for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     let j = i - 1
//     while (j >= 0 && current < arr[j]) {
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = current
// }
// console.log(arr);



// Merge Sort
// Divide & Conquer

// let arr = [6, 5, 3, 1, 8, 7]

// function divide(arrParm, start, end) {
//     if (start >= end) {
//         return
//     }
//     let mid = start + Math.floor((end - start) / 2)
//     divide(arrParm, start, mid)
//     divide(arrParm, mid + 1, end)
//     conquer(arrParm, start, mid, end)
// }

// function conquer(arrParm, start, mid, end) {
//     let mergedArr = []
//     let id1 = start
//     let id2 = mid + 1
//     let x = 0
//     while (id1 <= mid && id2 <= end) {
//         if (arrParm[id1] <= arrParm[id2]) {
//             mergedArr[x++] = arrParm[id1++]
//         } else {
//             mergedArr[x++] = arrParm[id2++]
//         }
//     }
//     while (id1 <= mid) {
//         mergedArr[x++] = arrParm[id1++]
//     }
//     while (id2 <= mid) {
//         mergedArr[x++] = arrParm[id2++]
//     }
//     for (let i = 0; i < mergedArr.length; i++) {
//         arrParm[start + i] = mergedArr[i]
//     }
// }

// divide(arr, 0, arr.length - 1)
// console.log(arr);




// Quick Sort

// let unSorted = [3,3,2,5,8,1,6]

// function quick(arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const pivot = arr[0]
//     const less = arr.filter(ele => ele < pivot)
//     const greater = arr.filter(ele => ele > pivot)
//     const equal = arr.filter(ele => ele === pivot)
//     return quick(less).concat(equal, quick(greater))
// }

// console.log(quick(unSorted))
































































// Merge Sort
// Divide & Conquer



// let arr = [6, 4, 3, 7, 8, 2, 1];

// function divide(arrParm, start, end) {
//     if (start >= end) {
//         return;
//     }
//     let mid = start + Math.floor((end - start) / 2);
//     divide(arrParm, start, mid);
//     divide(arrParm, mid + 1, end);
//     conquer(arrParm, start, mid, end);
// }

// function conquer(arrParm, start, mid, end) {
//     let mergedArr = [];
//     let id1 = start;
//     let id2 = mid + 1;
//     let x = 0;
//     while (id1 <= mid && id2 <= end) {
//         if (arrParm[id1] <= arrParm[id2]) {
//             mergedArr[x++] = arrParm[id1++];
//         } else {
//             mergedArr[x++] = arrParm[id2++];
//         }
//     }
//     while (id1 <= mid) {
//         mergedArr[x++] = arrParm[id1++];
//     }
//     while (id2 <= end) {
//         mergedArr[x++] = arrParm[id2++];
//     }
//     for (let i = 0; i < mergedArr.length; i++) {
//         arrParm[start + i] = mergedArr[i];
//     }
// }

// divide(arr, 0, arr.length - 1);
// console.log(arr);


// Quick Sort





















// Convert digits/numbers to words

// const ones = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   10: "ten",
//   11: "eleven",
//   12: "twelve",
//   13: "thirteen",
//   14: "fourteen",
//   15: "fifteen",
//   16: "sixteen",
//   17: "seventeen",
//   18: "eighteen",
//   19: "nineteen",
// };

// const prefixes = {
//   2: "twenty",
//   3: "thirty",
//   4: "fourty",
//   5: "fifty",
//   6: "sixty",
//   7: "seventy",
//   8: "eighty",
//   9: "ninety",
// };

// const nums = '1234'
// let outputData = 0

// const onatad = (num) => {
//   if (+num in ones) {
//     outputData = ones[+num];
//   }
//   const numArray = num.split("");
//   if (numArray.length === 2 && +num > 19) {
//     outputData = prefixes[numArray[0]] + " " + ones[numArray[1]];
//   }
//   if (numArray.length === 3) {
//     if (+numArray[1] === 0) {
//       outputData =
//         ones[numArray[0]] + " hundred " + " " + ones[numArray[2]];
//     } else if (+numArray[1] < 2) {
//       outputData =
//         ones[numArray[0]] +
//         " hundred " +
//         " " +
//         ones[+[numArray[1], numArray[2]].join("")];
//     } else {
//       outputData =
//         ones[numArray[0]] +
//         " hundred " +
//         prefixes[numArray[1]] +
//         " " +
//         ones[numArray[2]];
//     }
//   }
//   if (numArray.length === 4) {
//     if (+numArray[1] === 0) {
//       outputData =
//         ones[numArray[0]] +
//         " thousand " +
//         " " +
//         ones[+[numArray[2], numArray[3]].join("")];
//     } else if (+numArray[1] < 2) {
//       outputData =
//         ones[numArray[0]] +
//         " thousand " +
//         ones[numArray[1]] +
//         " hundred " +
//         " " +
//         ones[+[numArray[2], numArray[3]].join("")];
//     } else {
//       outputData =
//         ones[numArray[0]] +
//         " thousand " +
//         ones[numArray[1]] +
//         " hundred " +
//         prefixes[numArray[2]] +
//         " " +
//         ones[numArray[3]];
//     }
//   }
//   return outputData
// };

// console.log(onatad(nums));




// let data = [1, 2, 3, 4]
// let set = new Set(data)
// let map = new Map();
// for (let i = 0; i < data.length; i++) {
//   map.has(data[i]) ? "":  map.set(data[i], i)
// }

// console.log(!(map.size === data.length) );

// const nums = [10, 20, 30, 5, 10, 50];
// let maxSum = 0;
// let currentSum = 0;

// for (let i = 0; i < nums.length; i++) {
//   if(i > 0 && nums[i] <= nums[i - 1]){
//     currentSum=0
//   }
//   currentSum += nums[i]
//   maxSum = Math.max(maxSum, currentSum)
// }
// console.log(maxSum);


// const allowed = "abc"
// let words = ["a","b","c","ab","ac","bc","abc", "fgda"]
// const result = words.filter((word) => word.split('').every(ch => allowed.indexOf(ch) !== -1)).length
// console.log(result);














































































































































































// Regex Regular Expresion

// Regex provide a powerful and flexible way to search, match, and manipulate text
// You can create a regular expression using a literal notation
// enclosed in slashes /.../modifiers or the RegExp constructor.

// :- g  global
// :- i  case-insensitive
// :- m  multiline matching
// aeiou pttern
//  /aeiou/
//  /aeiou/g

// let regex = /abc/g
// let regex = new RegExp('abc')
// console.log(regex);

// let regex = /Hello/i

// let str = "hll Owrld"
// console.log(regex.test(str));

// let reg = /[aeiou]/i
// console.log(reg.test(str));



// Brackets in Regex

// [] () {}


// ^
// let str = 'hllr'
// let regex = /[aeiou]/

// let str = 'abcdd56ABC54'

// let regex = /[0-4]/
// let regex = /[^t - z]/

// let regex = /[a-zA-Z0-9]/


// console.log(regex.test(str));

// (x|y)

// let regex = /(red|blue|green) car/
// let str = 'I like red car'
// console.log(regex.test(str));



// MetaCharacters


// let regex = /^abc$/gm
// let reg = /car\rriage/

// let text = `
// aabc
// dsfsabcdryy
// sabc
// yy
// sabc123
// carriage
// `

// console.log(reg.test(text));


// The RegExp \r Metacharacter in JavaScript is used to find the carriage return character(Carriage return means to return to the beginning of the current line without advancing downward). If it is found it returns the position else it returns - 1.


// let text = "Visit W3Schools.Learn JavaScript.";
// let pattern = /\r/;
// let result = text.search(pattern);


// console.log(result);



// let  str = ' asd Hello Hello ji'
// let regex = /(Hello)\s\1/

// console.log(str.match(regex));



// Email Validate

// let email = 'codeKaroge123@gmail.com'
// let regex = /^[^\s@A-Z]+@[^\s@0-9]+\.[^\s@]+$/
// console.log(regex.test(email));


// Password Validation

// let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%&?#*])[A-Za-z\d@$%#&?*]{7,}$/

// console.log(regex.test('aA1#asdwertf'));


// UserName Validation


// const str = 'abc_123'
// const reg = /^[a-zA-Z0-9_]{3,16}$/

// console.log(reg.test(str));




// Url Validation


// const url = 'ftp:/chat.openai.com/c/36a084c0-776a-4255-8598-ac0c34679976'

// const regex = /^(https?|http?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
// console.log(regex.test(url));



// Date Formatter

// const date = '0001-12-31'

// const regex = /^(?:(?!0000)[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-9]|3[01]))$/

// console.log(regex.test(date));



// Phone number validation


// const phon = '+011234567'
// const regex = /^(?:[\+0-9]?)[0-9]{6,14}$/
// console.log(regex.test(phon));



// (function(a,b) {
//     console.log("This is an apple", a + b);
// })(1,2)



// const cars = ['Jaguar', 'Lambo', 'Lexus','Porsche','Bentley','Maserati']


// for (let i = 0; i < cars.length; i++)  console.log(cars[i])

// for(let index in cars) console.log(cars[index])

// for (let car of cars) console.log(car)

// cars.forEach((element) => console.log(element))



// const nums =[0,0,0,0,1,2,3,3,4,5,6,6,7,8,8,8,9,9,10,10,11,11]
// const target = 0

// const sttr = nums.join('')
// debugger
// let result = []

// result[0] =sttr.indexOf(target.toString())
// result[1] = sttr.lastIndexOf(target.toString())
// console.log(result);


// const str = '{'
// const flag = []
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
//         if ((flag[flag.length - 1] === '(' && str[i] === ')') ||
//             flag[flag.length - 1] === '{' && str[i] === '}' ||
//             flag[flag.length - 1] === '[' && str[i] === ']'
//         ) {
//             flag.pop()
//         } else {
//             flag.push(str[i])
//         }
//     } else {
//         flag.push(str[i])
//     }
// }
// console.log(flag.length === 0);

// const num = ["linqmafia@leet+code.com","linqmafia@code.com"]

// var numUniqueEmails = function (num) {
//     let result = []
//     for (let j = 0; j < num.length; j++) {
//         const str = num[j]
//         const num2 = str.split('@')
//         const str2 = num2[0]
//         const str3 = []
//         for (let i = 0; i < str2.length; i++) {
//             if (str2[i] === '.') {
//                 continue
//             } else {
//                 if (str2[i] === '+') {
//                     break
//                 } else {
//                     str3.push(str2[i])
//                 }
//             } if (str2[i] === '+') {
//                 break
//             }
//         }
//         if ((num2[1].lastIndexOf('.') === num2[1].indexOf('.') || num2[1].lastIndexOf('.') >= num2[1].indexOf('.'))) {
//             result.push(str3.join('') + '@' + num2[1])
//         }
//     }
//     let len = Array.from(new Set(result))
//     return len
// };

// console.log(numUniqueEmails(num));


// let str =''
// let flag = false

// if (flag) {
//     str = 'if'
// }else{
//     str = 'else'
// }
// // Short Circuit
// let username = userInput || "Guest";
// // or
// str = flag === true ? "if" : "else"
// console.log(str);



// let num = [1,1,2]

// const array =Array.from(new Set(num))
// for (let i = 0; i < num.length; i++) {
//     if(num[i] === num[i+1]){

//     }
// }

// console.log(array);
// let map = new Map();
// let j = 0
// for (let i = 0; i < num.length; i++) {
//     if (!map.has(num[i])) {
//         map.set(num[i], 1)        
//         num[j++] =num[i]
//     }
// }
// console.log(num);
// console.log(j); 

// let nums = [0, 1, 2, 2, 3, 0, 4, 2]

// let val = 2
// let index = 0;
// for (let i = 0; i < nums.length; i++) {
//     debugger
//     if (nums[i] != val) {
//         nums[index] = nums[i];
//         index++;
//     }
// }
// console.log(index);

// let nums = [1, 3, 5, 6]
// let target = 5
// let result = 0

// for (let i = 0; i < nums.length; i++) {    
//     if (nums[nums.length-1] < target) {
//         result = nums.length
//         break
//     }
//     if (nums[i] === target || nums[i] > target) {
//         if (nums[i] === target) {
//             result = i
//             break
//         } else {
//             result = i
//             break
//         }
//     }
// }
// console.log(result);




// let result = []
// for (let j = 0; j < num.length; j++) {
//     const str = num[j]
//     const num2 = str.split('@')
//     const str2 = num2[0]
//     const str3 = []
//     for (let i = 0; i < str2.length; i++) {
//         if (str2[i] === '.') {
//             continue
//         } else {
//             if (str2[i] === '+') {
//                 break
//             } else {
//                 str3.push(str2[i])
//             }
//         } if (str2[i] === '+') {
//             break
//         }
//     }
//     if ((num2[1].lastIndexOf('.') === num2[1].indexOf('.') || num2[1].lastIndexOf('.') >= num2[1].indexOf('.')) && num2[1].indexOf('+') === -1) {
//         result.push(str3.join('') + '@' + num2[1])
//     }
// }
// console.log(Array.from(new Set(result)));


// function normalizeEmail(email) {
//     const [local, domain] = email.split('@');
//     const normalizedLocal = local.split('+')[0].replace(/\./g, '');
//     return normalizedLocal + '@' + domain;
// }

// function countUniqueEmails(emails) {
//     const uniqueEmails = new Set();
//     for (const email of emails) {
//         const normalizedEmail = normalizeEmail(email);
//         uniqueEmails.add(normalizedEmail);
//     }
//     return uniqueEmails.size;
// }

// const emails = ["fg.r.u.uzj+o.pw@kziczvh.com", "r.cyo.g+d.h+b.ja@tgsg.z.com", "fg.r.u.uzj+o.f.d@kziczvh.com", "r.cyo.g+ng.r.iq@tgsg.z.com", "fg.r.u.uzj+lp.k@kziczvh.com", "r.cyo.g+n.h.e+n.g@tgsg.z.com", "fg.r.u.uzj+k+p.j@kziczvh.com", "fg.r.u.uzj+w.y+b@kziczvh.com", "r.cyo.g+x+d.c+f.t@tgsg.z.com", "r.cyo.g+x+t.y.l.i@tgsg.z.com", "r.cyo.g+brxxi@tgsg.z.com", "r.cyo.g+z+dr.k.u@tgsg.z.com", "r.cyo.g+d+l.c.n+g@tgsg.z.com", "fg.r.u.uzj+vq.o@kziczvh.com", "fg.r.u.uzj+uzq@kziczvh.com", "fg.r.u.uzj+mvz@kziczvh.com", "fg.r.u.uzj+taj@kziczvh.com", "fg.r.u.uzj+fek@kziczvh.com"];

// console.log(countUniqueEmails(emails));


// let digits = [9, 9]

// let n = digits.length;
// for (let i = n - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//         digits[i]++;
//         return digits;
//     }
//     digits[i] = 0;
// }

// let ans = new Array(s + 1).fill(0);
// newNumber[0] = 1;

// return newNumber;
// console.log(newNumber);


// let nums = [2, 5, 6, 0, 0, 1, 2]
// let target = 2

// let flag = false
// for (let n of nums) {
//     if (n === target) {
//         flag = true
//         break
//     }
// }
// console.log(nums.join('').indexOf(target));

// let nums = [266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35, 37, 38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104, 108, 114, 115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144, 147, 150, 154, 160, 163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210, 214, 218, 220, 223, 224, 233, 236, 241, 243, 253, 256, 257, 262, 263]
// console.log(nums.sort((a,b) => a-b)[0])


// let nums1 = [1, 3]
// let nums2 = [2]

// let num3 = [...nums1, ...nums2].sort((a, b) => a - b)
// let result = 0
// if (num3.length % 2 === 0) {
//     result = (num3[Math.floor(((num3.length) - 1) / 2)] + num3[Math.floor(((num3.length) - 1) / 2) + 1]) / 2
// } else {
//     result = num3[Math.floor(((num3.length) - 1) / 2)]
// }
// console.log(result);


// let num = [1, 2, -2, -1]
// let result = []
//     num.sort((a, b) => a - b); 
//     const n = num.length;
//     for (let i = 0; i < n - 2; i++) { 
//         if (i === 0 || (i > 0 && num[i] !== num[i - 1])) {
//             let low = i + 1;
//             let high = n - 1;
//             let sum = 0 - num[i];
//             while (low < high) {
//                 if (num[low] + num[high] === sum) {
//                     result.push([num[i], num[low], num[high]]);
//                     while (low < high && num[low] === num[low + 1]) low++;
//                     while (low < high && num[high] === num[high - 1]) high--; 
//                     low++;
//                     high--;
//                 } else if (num[low] + num[high] < sum) {
//                     low++;
//                 } else {
//                     high--;
//                 }
//             }
//         }
//     }
// console.log(result);


// function sum(a) {
//     return a +
// }

// console.log(sum(1, 2));



// let str = "cdd"
// let maxLength = 0;
// let start = 0;
// let charIndexMap = {};

// for (let end = 0; end < str.length; end++) {
//     let currentChar = str[end];
//     if (currentChar in charIndexMap && charIndexMap[currentChar] >= start) {
//         start = charIndexMap[currentChar] + 1;
//     }
//     charIndexMap[currentChar] = end;
//     maxLength = Math.max(maxLength, end - start + 1);
// }
// console.log(maxLength);


// let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
// let sum = 1
// let count = 1
// let key = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         count++
//     } else {
//         if (sum !== Math.max(sum, count)) {
//             key = arr[i]
//         }
//         sum = Math.max(sum, count)
//         count = 1
//     }
// }
// console.log(key);

// let num = 1534236469

// if (num >= 1534236469 || num <= -1534236469) {
//     console.log(0); 
// } else {
//     let result = parseInt(num.toString().split('').reverse().join(''))
//     console.log(num < 0 ? -result : result);
// }



// const oldCars = { name: "Jaguar", country: "India" }
// const changedData = { model: "XDL121", parentCompany: "TATA" }

// const newData = { ...oldCars, ...changedData }

// Output :  {
//   name: 'Jaguar',
//   country: 'India',
//   model: 'XDL121',
//   parentCompany: 'TATA'
// }


// let str = "baaaab"
// let result = ""
// for (let s of str) {    
//     if (str.indexOf(s) !== str.lastIndexOf(s)) {
//         let temp = str.slice(str.indexOf(s), str.lastIndexOf(s) + 1)
//         if (result.length < temp.length && temp === temp.split('').reverse().join('')) {
//             result = temp
//         }
//     }
// }

let s = "3.14159"
// let temp = s.trim()
// let result = ''
// if (temp[0] === '-' || /[0-9]/.test(temp[0])) {
//     result = temp.replace(/[^0-9-.]/g, "");
// } else {
//     result = 0
// }
// console.log(Math.floor(Math.max(Math.min(result, Math.pow(2, 31) - 1), -Math.pow(2, 31))));



// s = s.trim();
// if (s.length === 0) {
//     console.log(0);
// }
// let num = 0;
// let i = 0;
// let sign = 1;
// if (s[i] === '+') {
//     i++;
// } else if (s[i] === '-') {
//     i++;
//     sign = -1;
// }
// while (i < s.length && /^\d$/.test(s[i])) {
//     num = num * 10 + parseInt(s[i]);
//     i++;
// }
// num *= sign;
// num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));
// console.log(num);


// const arrayOfObjects = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' }
// ];
// const swapIndex = arrayOfObjects.findIndex(obj => obj.id === 4);
// let [swappedObject] = arrayOfObjects.splice(swapIndex, 1);
// swappedObject["index"] = 3
// arrayOfObjects.unshift(swappedObject);

// const arrayOfObjects =
// [
//     { id: 3, name: 'David', index: 2 },
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 4, name: 'Charlie' }
//   ]


// const swapIndex = arrayOfObjects.findIndex(obj => obj.id === 3);
// let [swappedObject] = arrayOfObjects.splice(swapIndex, 1);
// arrayOfObjects.splice(swappedObject?.index, 0, swappedObject);
// console.log(arrayOfObjects);


// let matrix = [[1]]
// console.log(matrix.flat(Infinity).indexOf(1) > 0);
// console.log(matrix.flat(Infinity));

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// let nums = [-2, 3, -4]
// let sum = 0

// for (let i = 0; i < nums.length; i++) {
//     let count = nums[i] === 0 ? 1 : nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//         if (count * nums[j] > sum) {
//             count *= nums[j]
//             sum = count
//         } else {
//             break
//         }
//     }
// }
// console.log(Math.max(sum, Math.max(...nums)));


// let haystack = "sdfsadbutsad";
// let needle = "sad"

// console.log(haystack.indexOf(needle));
