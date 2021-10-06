// palindrome means which word we are giving if ve reverse the word that will gives same word like level,madam,refer.
//${variable name}  ex ${string} --->it use to print the run time input from user
function palinStr()
 {
  /*const stringArray = str.split("");
    console.log("its a split:",stringArray);
  const reverseArray = stringArray.reverse("");
    console.log("its a reverse:",reverseArray);
  const joinArray = reverseArray.join("");
    console.log("its a join:",joinArray);  */
   let value = string.split('').reverse('').join('');
    if(value === string)
      {
         console.log(`${string}:its a palindrome string`);
      }
    else
      {
         console.log(`${string}:its not a palindrome string`)
      }
 }
 // we get a runtime input
 const prompt = require('prompt-sync')();
 const string = prompt("Enter a string for palindrome:");
console.log(string.length);
console.log(palinStr());
