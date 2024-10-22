var arr=[1,9,3,4,5]
function isSorted(){
for(var i=1;i<arr.length;i++){
  if(arr[i]<arr[i-1]){
    return false;
  }
}
  return true;

}
console.log(isSorted(arr))