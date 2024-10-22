var arr=[1,-2,3,-4,5,-6]
var positive=0;
var negative=0;
for(var i=0;i<=arr.length;i++){
  if(arr[i]>0){
  positive++;
}
else if(arr[i]<0){
  negative++;
}
}
console.log(positive)
console.log(negative)