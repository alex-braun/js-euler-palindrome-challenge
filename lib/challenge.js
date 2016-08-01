'use strict';



const findPalindrome = function(maxNumber) {
  let palindromeCount = 0;
  for (let i = 0; i <= maxNumber; i++) {
    let binaryNumbers = i.toString(2);

    let origNum = i.toString();
    let stringNum = origNum.split('');
    let reverseNum = stringNum.reverse().join('');
    let result10 = Number(reverseNum);
    let reverseBinaryNum = binaryNumbers.split('').reverse().join('');
    let result2 = Number(reverseBinaryNum);

    if (i === result10 && binaryNumbers === reverseBinaryNum) {
        palindromeCount += result10;
    }
}
  console.log(palindromeCount);
  return palindromeCount;
  // return binaryNumbers;
};




module.exports = () => {
  findPalindrome();
  return true;
};
