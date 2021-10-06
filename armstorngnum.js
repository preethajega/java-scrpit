
function armstr()
{
   let arm=0;
   let prompt = require('prompt-sync')();
   let num = prompt('Enter the number:');
   temp=num;
  while(temp>0)
      {
          let a=temp%10;
          temp=parseInt(temp/10); // convert float into Integer
          arm=arm+a*a*a;
           console.log("avalue:",a);
           console.log("tempvalue:",temp);
           console.log("armvalue:",arm);
     }
    if(arm == num)
      {
        console.log(`${num}:its a Armstrong number`);
      }
    else
       {
          console.log(`${num}:its Not Armstrong number`);
      }
}
console.log(armstr());
