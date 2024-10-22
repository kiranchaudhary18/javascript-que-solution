var score=40;
if(score<=100 && score>=90){
    console.log("A")
}else if(score<=89 && score>=80){
    console.log("B")
}else if(score<=79 && score>=70){
    console.log("C")
}else if(score<=69 && score>=60){
    console.log("D")
}else{
    console.log("f")
}                                       Ans:f






#include <stdio.h>

int num=10; global scope
int number(){
    int num=30;
    printf("%d",num);
    // number();
}
int main(){
    int num=20;   local scope
    printf("%d\n",num);
    number();
}