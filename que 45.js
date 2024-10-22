let sen="I love programming Javascript"
let words=sen.split(' ')
let longestword=[]
for(let word of words)
if(word.length>longestword.length){
  longestword=word;
}console.log(longestword)