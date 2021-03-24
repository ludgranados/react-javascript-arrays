const RemoveComponent = () => {
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
}

export default RemoveComponent;  