var a=60
var b=60
var c=60
if(a==b && b==c && a==c){
  console.log("equilateral")
}else if(a==b || b==c || a==c){
  console.log("isosceles")
}else{
  console.log("scalene")
}