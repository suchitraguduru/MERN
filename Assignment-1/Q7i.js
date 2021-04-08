let n=5;

let size = 2*n-1;
let start = 0;
let end = size - 1;
let row = start;
while(n<6){
while(row <= end){
    let col = start;
    while(col <= end){
        if(row==start || col==start || col==end || row==end){
            process.stdout.write(n+" ");
        }
        col+=1;
    }
    
    row+=1;
}
process.stdout.write("\n");
start+=1;
end-=1;
n-=1;

}
