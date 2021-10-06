// first letter is change into capital
function revStr()
{
  let name = "i love my india";
  console.log(name);
  //let str = name.toUpperCase();
  let str = name[0].toUpperCase() + name.slice(1);
  console.log(str);
}
console.log(revStr());
// reversed the string condition are here
function reverseString() {
    // return a new array of strings
    const prompt = require("prompt-sync")();
    let na = prompt('Enter a string for reverse :');
    let value = na.split('').reverse('').join('');
    console.log(`reversed string is : ${value},-->user input: ${na}`);
}
console.log(reverseString());
