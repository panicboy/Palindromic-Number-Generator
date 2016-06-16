
function isPalindrome(theString){
  return (String(theString) == reverse(theString));
//return theNumber.slice(0,midpoint) ===
}

function reverse(theString) {
  return String(theString).split('').reverse().join('');
}


function getPalindromeFromNumber(theNumber){
  var iterations = 0;
  var currentNumber = theNumber;
  for (var max = 100; iterations < max; iterations++ ) {
    if(isPalindrome(currentNumber)){
      return {value: currentNumber, steps: iterations};
    }
    currentNumber = Number(currentNumber) + Number(reverse(currentNumber));
  }
  return "more than 100 iterations!";
}

console.log('1001 is palindrome: ' + isPalindrome(1001));
console.log('10000002 is palindrome: ' + isPalindrome(10000002));
console.log('9191919 is palindrome: ' + isPalindrome(9191919));
console.log('123454321 is palindrome: ' + isPalindrome(123454321));
console.log('test: palindrome from 87: ');
console.log(getPalindromeFromNumber(87));
console.log('test: palindrome from 1331: ');
console.log(getPalindromeFromNumber(1331));