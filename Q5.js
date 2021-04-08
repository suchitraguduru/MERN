/*5. Write a program to count the number of digits in a number.*/
const prompt = require('prompt-sync');

var n=prompt("Enter the number");
var count = 0;
if(n>=1){
    count++;
}
while(n/10 >=1){
    
    
    n=n/10;
    count++;

}
console.log(count);