/*6. Write a program to reverse a number (9735 -> 5379)*/
var n=63094;
var rev = "";
while(n>0){
    remainder= n%10;
    rev = rev.join(remainder);
    n=n/10;

}
console.log(rev);