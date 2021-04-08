/*a. *
     * *
     * * *
     * * * *
     * * * * * */

var n = 5;
var row=0;
while(row<n){
    col=0;
    while(col<=row){
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}