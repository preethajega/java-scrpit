/* anagram is that checks wether we rearange a words that will give another word
like silent-listen,the eyes-they see,rail saftey-fairy tales;    */
function annagram()
{
  const prompt = require("prompt-sync")();
  let str1 = prompt('Enter a input for string1:');
  //   const prompt = require("prompt-sync")();
  let str2 = prompt('Enter a input for string2:');
    if (str1.length !== str2.length)
      {
        console.log("invalid input");
      }

  let a = str1.split('').sort().join('');
  /* str1=listen--->split ['l','i','s','t','e','n']
     sort--->[e,i,l,n,s,t,]
     join--->[elilnst]    */
  let b = str2.split('').sort().join('');
  /*str2=silent ---> split ['s','i','l','e','n','t']
    sort--->[e,i,l,n,s,t,]
    join--->[elilnst]

    str2 = preeth ---> split[p','r','e','e','t','h']
    sort--->[e,e,h,p,r,t]
    join--->[eehprt]   */
    if(a === b)
    {
      console.log("its a Anagram");
    }
    else
    {
      console.log("its not a Anagram");
    }
}
  console.log(annagram());
