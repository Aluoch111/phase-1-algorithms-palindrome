function isPalindrome(word) {
  // Write your algorithm here
  let str = word.split("").reverse().join("");
  const checkStr = str === word ? true : false ;
  return checkStr ;
}

/* 
  Add your pseudocode here
  str = variable to store the reversed arguement
  checkStr = checks if the passed arguement is a palindrome
*/

/*
  Add written explanation of your solution here
  the string passed as an arguement is split,reversed and joined to form a new string and stored in the variable str
  const checkStr tests if it a palindrome and returns the value found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
