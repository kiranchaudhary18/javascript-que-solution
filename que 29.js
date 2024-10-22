var arr=[2,7,11,15]
var target=9
for(var i=0;i<arr.length;i++){
  for(var j=i;j<arr.length;j++){
    if(arr[i]+arr[j]==target){
      console.log(i,j)
    }
  }
}