/**
 * Return the count of all strings in an array of numbers and strings.  
 * Use array functions, not a loop. (TypeScript)
 * @param inputArray - the array of strings and numbers
 * @returns the ...
 */
function sum(a: number, b: number): number {
  return a + b;
}

export default sum;

console.log( countStrings([1,2,3,'a','b','c']), 3)
console.log( countStrings([10,2,3,'ab','bc','cdef']), 3)
console.log( countStrings([1,2,3,'a','']), 2)
console.log( countStrings([1,2,3,'1','b','c']), 3)
console.log( countStrings([1,2,3,'~[]//:','b','c']), 3)