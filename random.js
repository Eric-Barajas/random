/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(?) linearithmic.
    - Average case: O(?) linearithmic.
    - Worst case: O(?) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
    // Variable Declaration: the current index of the left array
    let leftIndex = 0;
    // Variable Declaration: the current index of the right array
    let rightIndex = 0;
    // Varaible declaration: the new combined array
    const result = [];
    // Interate through the left and right indexes until we hit the end of the two array's lengths.
    while (leftIndex < left.length && rightIndex < right.length) {
        // If the value on the right is smaller than the value on the 
        // left, push in the value on the right to the new array and 
        // increment by 1.
        if (right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
        // push left value in all other cases
        else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    // after initial loop ends, push the rest
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex])
        rightIndex++;
    }
    return result;
}


// mergeSort            
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(?) linearithmic.
 * Avg: O(?) linearithmic.
 * Worst: O(?) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */

//should (??) be O(n) time complexity
function mergeSort(nums = []) {
    // Base case: If only 1 or less items in the array
    if (nums.length <= 1) {
        return nums;
    }
    // Variable declaration: the midpoint of the array
    const middle = Math.floor(nums.length / 2);
    // Variable declaration: all values to the left of the midpoint placed into a new array on their own.
    const left = nums.slice(0, middle);
    // Variable delcaration: all values to the right of the midpoint placed in a new array on their own.
    const right = nums.slice(middle, nums.length);
    // Recursively call the two sliced arrays and merge them together
    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)
    return merge(sortedLeft, sortedRight);
}

// OR 
// function mergeSort(nums = []) {
//     // Base case: If only 1 or less items in the array
//     if (nums.length <= 1) {
//         return nums;
//     }
//     // Variable declaration: the midpoint of the array
//     const middle = Math.floor(nums.length / 2);
//     // Variable declaration: all values to the left of the midpoint placed into a new array on their own.
//     const left = nums.slice(0, middle);
//     // Variable delcaration: all values to the right of the midpoint placed in a new array on their own.
//     const right = nums.slice(middle, nums.length);
//     // Recursively call the two sliced arrays and merge them together
//     //      o(n)  //o(log n)       o(log n)   o(n log n)
//     return merge(mergeSort(left), mergeSort(right));
// }

// OR
// function mergeSort(nums = []) {
//     // base case
//     if (nums.length === 1) {
//         return nums;
//     }
//     // split nums and recursive call
//     const left = nums.slice(0, Math.floor(nums.length / 2));
//     const right = nums.slice(Math.floor(nums.length / 2));

//     // recursive call
//     return merge(mergeSort(left), mergeSort(right));
// }



console.log(mergeSort(numsOrdered));
console.log(mergeSort(numsRandomOrder));
console.log(mergeSort(numsReversed));
console.log(mergeSort(expectedSort)); //all outputs working as expected
