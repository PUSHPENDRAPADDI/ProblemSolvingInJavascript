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
