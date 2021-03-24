const ReverseComponent = () => {

// reversing the order of the items in the array 
const originalArray = [1, 2, 3];
const newArray = originalArray.slice().reverse();

console.log(originalArray); // [ 1, 2, 3 ]
console.log(newArray); // [ 3, 2, 1 ]

//     const originalArray = [1, 2, 3];
//   const newArray = originalArray.reverse();
// }



export default ReverseComponent;  