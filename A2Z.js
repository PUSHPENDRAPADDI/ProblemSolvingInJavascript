// Largest Element in an Array

// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 10]
// let max = arr[0]
// for (let i of arr) {
//     if (i > max) {
//         max = i
//     }
// }
// console.log(max);

// Second Largest Element in an Array without sorting

// let arr = [1, 2, 3, 4, 5, 6, 5000, 400, 100000]
// let max = arr[0]
// let secMax = 0
// for (let i of arr) {
//     if (i > max) {
//         secMax = max
//         max = i
//     }
// }
// console.log(secMax);


// document.addEventListener('DOMContentLoaded', function() {
//     for(let i = 0; i < 5; i++) {
//         const button = document.createElement('button');
//         button.innerHTML = `Button ${i}`;
//         button.onclick = function() {
//             alert(`You clicked button ${i}`);
//         };
//         document.body.appendChild(button);
//     }
// });



// function wordBreak(s, wordDict) {
//     debugger
//     const wordSet = new Set(wordDict);
//     const dp = new Array(s.length + 1).fill(false);
//     dp[0] = true;
//     for (let end = 1; end <= s.length; end++) {
//         for (let start = 0; start < end; start++) {
//             if (dp[start] && wordSet.has(s.substring(start, end))) {
//                 dp[end] = true;
//                 break;
//             }
//         }
//     }
//     return dp[s.length];
// }

// // Example usage:
// const s3 = "catsandog";
// const wordDict3 = ["cats", "dog", "sand", "and", "cat","cats"];
// console.log(wordBreak(s3, wordDict3)); // Output: false



// function multiplyStrings(num1, num2) {
//     debugger
//     const len1 = num1.length;
//     const len2 = num2.length;
//     const result = Array(len1 + len2).fill(0);
//     for (let i = len1 - 1; i >= 0; i--) {
//         for (let j = len2 - 1; j >= 0; j--) {
//             const product = parseInt(num1[i]) * parseInt(num2[j]);
//             const sum = product + result[i + j + 1];

//             result[i + j + 1] = sum % 10;
//             result[i + j] += Math.floor(sum / 10);
//         }
//     }
//     while (result[0] === 0) {
//         result.shift();
//     }
//     return result.length ? result.join('') : '0';
// }
// const num1 = "987654321";
// const num2 = "123456789";
// console.log(multiplyStrings(num1, num2)); 



// let num = 5

// for (let i = 0; i < num; i++) {
//     for (var j = 0; j < num; j++) {
//         if (j >= i) {
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }
// for (let i = 0; i < num; i++) {
//     for (var j = 0; j < num; j++) {
//         if (j <= i) {
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }


// #####
// #   #
// #   #
// #   #
// #####

// let num = 5
// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//         if (i === 0 || j === 0 || i === num - 1 || j === num - 1) {
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }


// #####
//  #####
//   #####
//    #####
//     #####

// let num = 5
// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num + i; j++) {
//         if (j < i) {
//             process.stdout.write(" ")
//         } else {
//             process.stdout.write("* ")
//         }
//     }
//     console.log();
// }


// 4 3 2 1
//  3 2 1
//   2 1
//    1

// let num = 5

// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//         if(i <= j){
//             process.stdout.write(`${num-j} `)
//         }else{
//             process.stdout.write(` `)
//         }
//     }
//     console.log();
// }


// check palindrome

// let str = 'abca'

// if (str.split('').reverse().join('') === str) {
//     return true
// } else {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str.slice(i,i+ 1));
//     }
// }


// let nums = [4, 1, 2, 1, 2]

// for (let i in nums) {
//     if (!(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[[i]]))) {
//         console.log(nums[i]);
//     } 
// }

// let nums =  [1,2,1,3,2,5]
// let obj = {}
// for (const i of nums) {
//     if (!obj[i]) {
//         obj[i] = 1
//     } else {
//         obj[i]++
//     }
// }
// let result=[];
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         if (obj[key] === 1) {
//             result.push(+key);
//         }
//     }
// }
// console.log(result);

// let nums = [4, 3, 2, 9, 71, 1, 1, 1, 6, 6, 6]
// if (nums.length < 2) {
//     console.log(0);
// }
// nums.sort((a, b) => a - b)
// let max = 0
// debugger
// for (let i = 1; i < nums.length; i++) {
//     max = Math.max(max, nums[i] - nums[i - 1])
// }
// console.log(max);

// function removeKDigits(num, k) {
//     debugger
//     const stack = [];
//     for (let digit of num) {
//         while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
//             stack.pop();
//             k--;
//         }
//         stack.push(digit);
//     }
//     while (k > 0) {
//         stack.pop();
//         k--;
//     }
//     let result = stack.join('').replace(/^0+/, '');
//     return result === '' ? '0' : result;
// }
// const num = "1432219";
// const k = 3;
// console.log(removeKDigits(num, k)); 


// let height = [1,8,6,2,5,4,8,3,7]

// var maxArea = function (height) {
//     debugger
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length - 1;
//     while (left < right) {
//         const currentArea = Math.min(height[left], height[right]) * (right - left);
//         maxArea = Math.max(maxArea, currentArea);
//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return maxArea;
// };

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// console.log(maxArea(height));



let data = [
    {
        "id": "WD101",
        "title": "Web Development Fundamentals",
        "description": "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
        "image": {
            "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
            "alt": "Web Development Fundamentals"
        },
        'num': [
            1, 2, 3, 4, 56, 6, 7, 8
        ]
    },
    {
        "id": "DS201",
        "title": "Data Science Essentials",
        "description": "This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
        "image": {
            "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Data%20Science%20Essentials.png",
            "alt": "Data Science Essentials"
        },
        'num': [
            1, 2, 3, 4, 56, 6, 7, 8
        ]
    },
    {
        "id": "ST301",
        "title": "Software Testing Fundamentals",
        "description": "This course covers the basics of software testing, including test planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
        "image": {
            "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png",
            "alt": "Software Testing Fundamentals"
        },
        'num': [
            1, 2, 3, 4, 56, 6, 7, 8
        ]
    },
    {
        "id": "MD401",
        "title": "Mobile App Development with React Native",
        "description": "This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
        "image": {
            "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png",
            "alt": "Mobile App Development with React Native"
        }
        , 'num': [
            1, 2, 3, 4, 56, 6, 7, 8
        ]
    },
    {
        "id": "DO501",
        "title": "DevOps for Agile Teams",
        "description": "This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
        "image": {
            "url": "https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png",
            "alt": "DevOps for Agile Teams"
        },
        'num': [
            1, 2, 3, 4, 56, 6, 7, 8
        ]
    }
]

// let num = [
//     1, 2, 3, 4, 56, 6, 7, 8
// ]

// let avg = 0
// let temp = 0
// avg = num.map((item, index) => (temp += item))
// console.log(avg/ num.length);
//  avg =num.reduce((abc, def) => abc + def)/num.length

// let out = data.map(obj => console.log(Object.values(obj).length))
// console.log(avg);
// let s = "zaz"
// let sum = 0

// for (let i = 0; i < s.length-1; i++) {
//     let sub = 0
//     sub += s.charCodeAt(i) - s.charCodeAt(i + 1)
//     sum += Math.abs(sub)
// }
// console.log( sum);

// Array.prototype.myMap = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp
// }

// const nums = [1, 2, 3, 4]

// const multiplyThree = nums.myMap((num, i, arr) => {
//     return num * 3
// })
// console.log(multiplyThree);

// let n = 10
// let m = 3

// let div = 0
// let nonDiv = 0

// while ( 1< 3) {
//     console.log(true);
// }

// for (let i = 1; i <= n; i++) {
//     if(i % m === 0){
//         div += i
//     }else{
//         nonDiv += i
//     }
// }
// console.log(" and ", nonDiv - div);

// var getSum = function (a, b) {
//     while (b !== 0) {
//         let carry = a & b;
//         a = a ^ b;
//         b = carry << 1;
//     }
//     return a;
// };

// console.log(getSum(3, 5));

// function outer(outerParm) {
//     return function inner(innerParm) {
//         console.log('Outer Variable: ', outerParm);
//         console.log('Inner Variable: ', innerParm);
//     }
// }
// const newfun = outer('outSide')
// newfun('inner')


// let nums = [-1]
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//     let max = 0    
//     debugger
//     for (let j = i; j < nums.length; j++) {
//         max += nums[j]
//         sum = Math.max(sum, max)
//     }
// }
// console.log(sum);

// let nums = [-1, 0, 3, 5, 9, 12, 13]
// let target = 9

// let low = 0
// let high = nums.length - 1
// let mid = Math.floor((high - low) / 2)
// // let 

// while (low <= high) {
//     if (target === nums[mid]) return mid
//     else if (nums[mid] < target) {
//         low = mid + 1
//         mid = Math.floor((high + low) / 2)
//     } else {
//         high = mid - 1
//         mid = Math.floor((high + low) / 2)
//     }
// }

let N = 4
let arr = [1, 2, 2, 3]
let x = 2


// let sm = 0
// let lg = arr.length - 1
// let resutl = N
// let mid = Math.floor((sm + lg) / 2)
// while (sm <= lg) {
//      if (arr[mid] < x) {
//         sm = mid + 1
//         mid = Math.floor((sm + lg) / 2)
//     } else {
//         lg = mid - 1
//         resutl = mid
//         mid = Math.floor((sm + lg) / 2)

//     }
// }
// console.log(resutl);

// let word = "abc"
// let count = 0
// for (let i = 0; i < word.length; i++) {
//     if (word.includes(word[i]))
//     }
// }

// let word = "xyxzxe"
// let ch = "z"

// let ind = word.indexOf(ch)
// let sub = word.substring(0, ind + 1)
// console.log(sub.split('').reverse().join('') + word.substring(ind + 1, word.length));
// let version1 = "1.01"
// let version2 = "1"
// let temp1 = version1.replace('.', '')
// let temp11 = temp1.replace('0', '')
// let temp2 = version2.replace('.', '')
// let temp22 = temp2.replace('0', '')

// if (temp11 > temp22) {
//     console.log('1');
// } else if (temp11 < temp22) {
//     console.log('-1');
// } else {
//     console.log('-1');
// }

// leethcode problem 

// let people = [3,5,3,4]
// let limit = 5
// let count = 0
// people.sort((a,b) => a-b)
// for (let i = 0, j = people.length-1; i <= j ; j--) {
//     if(people[i] + people[j] <= limit){
//         i++
//     }
//     count++
// }
// console.log(count);