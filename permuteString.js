/* 
  2.Show coding logic and unit test Permutations (Choose your the most skilled)
  your task is to create all permutations of a non-empty input string and remove 
  duplicates, if present. Create as many "shufflings" as you can!
*/
function permuteString(input) {
    const permuteArray = []; // create blank array
    const permute = (input, prefix = "") => {    
      if (input.length === 0) {
        permuteArray.push(prefix);
      } 
      else {
        for (let i = 0; i < input.length; i++) {
          const char = input[i];
          const remaining = input.substring(0, i) + input.substring(i + 1);
          permute(remaining, prefix + char);
        }
      }
    }
    permute(input);
  
    let result = permuteArray.reduce((accumulator, stringInput) => {
      return accumulator.includes(stringInput) ? accumulator : [...accumulator, stringInput]
    }, "");

    return result;
}
     
module.exports = permuteString;