 function Delete(){
    document.getElementById("myresult").value="";

 }

 function calclutor(Newvalue){
    document.getElementById("myresult").value+=Newvalue;

 }

 function answer(){
   var a=document.getElementById("myresult").value;
   var b=eval(a);
   document.getElementById("myresult").value=b;


 }