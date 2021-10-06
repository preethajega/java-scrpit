// fibonacci series
function fibo()
{
    const prompt = require("prompt-sync")();
    let number = prompt("Enter the number for fibonacci series:");
    let n1 = 0, n2 = 1,nextTerm;
  for (let i = 1; i <= number; i++)
     {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
     }
}
console.log(fibo());
/* 1.n1= 0,n2=1,i=1
condition then print n1=0
nextTerm=n1+n2=0+1=1
n1=n2,n2=1 so it will store n2 value in n1 now n1=1
n2=nextTerm,so it will store nextTerm value in n2 now n2=1
 2.n1= 1,n2=1,i=2
condition then print n1=1
nextTerm=n1+n2=1+1=2
n1=n2,n2=1 so it will store n2 value in n1 now n1=1
n2=nextTerm,so it will store nextTerm value in n2 now n2=2
 3.n1= 1,n2=2,i=3
condition then print n1=2
nextTerm=n1+n2=1+2=3
n1=n2,n2=2 so it will store n2 value in n1 now n1=2
n2=nextTerm,so it will store nextTerm value in n2 now n2=3
 4.n1= 2,n2=3,i=4
condition then print n1=3
nextTerm=n1+n2=2+3=5
n1=n2,n2=3 so it will store n2 value in n1 now n1=3
n2=nextTerm,so it will store nextTerm value in n2 now n2=5
 5.n1= 3,n2=5,i=5
condition then print n1=5
nextTerm=n1+n2=3+5=7
n1=n2,n2=5 so it will store n2 value in n1 now n1=5
n2=nextTerm,so it will store nextTerm value in n2 now n2=7




*/
