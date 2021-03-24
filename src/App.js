// import ArrayComponent from './Components/NewArray';
// import ReverseComponent from './Components/Reverse';
// import RemoveComponent from './Components/Remove';
  // import uniqueChars from './Components/Duplicate';

import './App.css';



function App() {


// new array with a given value


// const someArrayFunc = () => {
//   return (
   
//   )
// }; 

// console.log(someArrayFunc);

// reversing the order of the items in the array 
  const originalArray = [1, 2, 3];
  const newArray = originalArray.slice().reverse();

  console.log(originalArray); // [ 1, 2, 3 ]
 console.log(newArray); // [ 3, 2, 1 ]

// removing all unnecessary elements from an array
let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
  
for( let i = 0; i < dirtyArray.length; i++){ 
    
  if ( dirtyArray[i] === false) { 
      dirtyArray.splice(i, 2); 
  }

  if ( dirtyArray[i] === '') { 
    dirtyArray.splice(i, 1); 
}

  if ( dirtyArray[i] === undefined) { 
      dirtyArray.splice(i, 1); 
  }

}

// dirtyArray.splice(2, 2); 
// dirtyArray.pop();

// dirtyArray.splice(6,1);

console.log(dirtyArray);

// returning a duplicate free array
let chars = [1, 4, 9, 4, 100, 4, 30, 1];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);

  return (
    <div className="App">

     <div className="header">
       <h1 style={{border: '2px solid black',}}>Coding Challenge: Javascript Arrays 3.24.21</h1>
       <h4>
         <li>A function that creates a new array with a given value: expected result someArrayFunction(3, 'apples')=['apples', 'apples', 'apples']</li>
         <li>A function that reverses the order of the items in the array: [1, 2, 3] = [3, 2, 1]</li>
         <li>A function that removes all unnecessary elements from an array: let dirtyArray=[1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined]; which returns [1, 'apple', 'bananas', 45, 'alkali'];</li>
         <li>A function that returns a duplicate free array: let duplicateArray=[1, 4, 9, 4, 100, 4, 30, 1] which returns [1, 4, 9, 100, 30]</li>
       </h4>
     </div> 

     <div className="body">
       


       {/* <ArrayComponent  /> */}
        {/* <ReverseComponent /> */}
       {/* <RemoveComponent /> */}
       {/* <DuplicateComponent />  */}
     </div>
     
    
    </div>
  );
}

export default App;
