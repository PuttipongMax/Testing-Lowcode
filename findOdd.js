/*
  3.Show coding logic and unit test Find the odd int (Choose your the most skilled)
  Given an array of integers, find the one that appears an odd number of times.
  There will always be only one integer that appears an odd number of times.
*/
function findOdd(array){
  let count = 0;
  
  for(let i=0; i<array.length; i++){
    let tempNumber = array[i];
    let tempCount = 0;
    for(let j=0; j<array.length; j++){
      if(array[j] === tempNumber){
        tempCount++; 
      }
    }
    if(tempCount%2 === 1){
      count = tempCount;
    }
  } 
  let result = count%2 === 1 ? "which is odd" : "";
    
  return result;   
}
  
module.exports = findOdd;