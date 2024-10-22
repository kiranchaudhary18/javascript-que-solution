let event1={starttime:1,endtime:5}
let event2={starttime:2,endtime:3}
if(event1.starttime<event2.endtime && event2.starttime<event1.endtime){
  console.log("true")
}else{
  console.log("false")
}
