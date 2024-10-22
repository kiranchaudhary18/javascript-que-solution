var arr=[80,30,70,50,20]
var max=arr[0];
var min=arr[0];
var total=0;
for(var i=0;i<arr.length;i++){
  if(min>arr[i]){
    min=arr[i];
  }else if(max<arr[i]){
    max=arr[i];
  }
  
  }total=max-min;


console.log(total)