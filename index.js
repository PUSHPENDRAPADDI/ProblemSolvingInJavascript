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

