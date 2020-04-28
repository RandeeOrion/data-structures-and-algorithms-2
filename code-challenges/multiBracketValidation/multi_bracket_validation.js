'use strict '

function multiBracketValidation(str){
  if(typeof str !== 'string'){
    return false;
  }
  let charArr = str.split('');
  if(charArr.length <= 1){
    return false;
  }
  let openBracket = /[{([]/gm;
  let openCounter = 0;
  let closeBracket = /[})]]/gm;
  let closeCounter = 0;
  for (let i = 0; i < charArr.length; i++ ){
    if (openBracket.test(charArr[i]) ){
      openCounter ++;
      console.log('open counter', openCounter);
    }
    if (closeBracket.test(charArr[i]) ) {
      console.log('inside second if');
      closeCounter ++;
      console.log('close counter', closeCounter)
    }
  }
  if (openCounter === closeBracket){
    return true;
  }
  else return false;
}


const good = '(){}[]';
const bad = '({[}}]';
const ugly = '{{{sd)))'
console.log('---------------- GOOD ---------------');
console.log(multiBracketValidation(good));
console.log('---------------- BAD ---------------');
console.log(multiBracketValidation(bad));
console.log('---------------- UGLY ---------------');
console.log(multiBracketValidation(ugly));


module.exports = multiBracketValidation;
