'use strict';

const Stack = require('../stacksAndQueues/stack.js');

function multiBracketValidation(str){
  if(typeof str !== 'string'){
    return false;
  }
  let charArr = str.split('');
  let stackOBrackets = new Stack();
  let openBracket = /[{[(]/m;
  for (let i = 0; i < charArr.length; i++ ){
    console.log('charArr at i', charArr[i]);
    // console.log('openBrack test', openBracket.test(charArr[i]));
    if (openBracket.test(charArr[i]) ){
      stackOBrackets.push(charArr[i]);
      // console.log('pushed to stackOBrackets', charArr[i]);
    } else if (charArr[i] === '}' || charArr[i] === ']' || charArr[i] === ')') {
      let poppedVal = stackOBrackets.pop();
      // console.log(poppedVal.val, charArr[i]);
      if (charArr[i] === "}" && poppedVal.val !== '{') return false;
      if (charArr[i] === "]" && poppedVal.val !== '[') return false;
      if (charArr[i] === ")" && poppedVal.val !== '(') return false;
    }
  }
  if (stackOBrackets.top) return false;
  return true;
}


// const good = '({[]})';
// // const bad = '({[}}]';
// // const pretendGood = '([])'
// console.log('---------------- GOOD ---------------');
// console.log(multiBracketValidation(good));
// console.log('---------------- BAD ---------------');
// console.log(multiBracketValidation(bad));
// console.log('---------------- PRETENDGOOD ---------------');
// console.log(multiBracketValidation(pretendGood));



module.exports = multiBracketValidation;
