/*
  4.Show coding logic and unit test Count the smiley faces! (Choose your the most skilled)
  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:
  Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  Every smiling face must have a smiling mouth that should be marked with either ) or D

  No additional characters are allowed except for those mentioned.

  Valid smiley face examples:  :) :D ;-D :~)
  Invalid smiley faces:  ;( :> :} :]
*/
function countSmileys(smileysArray){
  const pattern = /[:;]{1}[-~]{0,1}[)D]{1}/; // pattern check string.
  
  const matchingStrings = smileysArray.filter((smileyString) => {
    let result = pattern.test(smileyString);
    return result;
  });
  
  return matchingStrings.length;
}

module.exports = countSmileys;