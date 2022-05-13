// function radixSort(arr) {
//     // Find the max number and multiply it by 10 to get a number
//     // with no. of digits of max + 1
//     const maxNum = Math.max(...arr) * 10;
//     let divisor = 10;
//     while (divisor < maxNum) {
//        // Create bucket arrays for each of 0-9
//        let buckets = [...Array(10)].map(() => []);
//        // For each number, get the current significant digit and put it in the respective bucket
//        for (let num of arr) {
//           buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
//        }
//        // Reconstruct the array by concatinating all sub arrays
//        arr = [].concat.apply([], buckets);
//        // Move to the next significant digit
//        divisor *= 10;
//     }
//     return arr;
//  }

// module.exports = radixSort;

function getDigit(num, i) {
   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
 }
 
 function digitCount(num) {
   if (num === 0) return 1;
   return Math.floor(Math.log10(Math.abs(num))) + 1;
 }
 
 function mostDigits(nums) {
   let maxDigits = 0;
   for (let i = 0; i < nums.length; i++) {
     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
   }
   return maxDigits;
 }
 
 function radixSort(nums) {
   let maxDigitCount = mostDigits(nums);
   for (let k = 0; k < maxDigitCount; k++) {
     let digitBuckets = Array.from({ length: 10 }, () => []);
     for (let i = 0; i < nums.length; i++) {
       let num = nums[i];
       let digit = getDigit(num, k);
       digitBuckets[digit].push(num);
     }
     nums = [].concat(...digitBuckets);
   }
   return nums;
 }
 
 module.exports = { getDigit, digitCount, mostDigits, radixSort };