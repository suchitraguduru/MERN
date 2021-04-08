/*
     1
    232
   34543
  4567654
 567898765
 */



var n = 6, i=1;
while(i<n){
    var k=1;
    while(k<(n-i)){
        process.stdout.write(" ");
        k++;

    }
    var j=i;
    var l=1;
    var col = 1;
    while(col<=i){
        process.stdout.write(String(j));
        j++;
        col++;
        l++;
    }
    var x = (2 * i) - 2;
    var col2 = 1;
    while(col2 <= i-1){
        process.stdout.write(String(x));
        x--;
        col2++;
    }
    process.stdout.write("\n");
    i++;
}