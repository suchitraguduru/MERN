var n = 5;
var row=0;
while(row<n){
    col=1;
    while(col<=row+1){
        process.stdout.write(col +" ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}