var index =0;
var imgSrc= new Array();
imgSrc[0]="pic/s3.jpg";
imgSrc[1]="pic/s1.jpg";
imgSrc[2]="pic/m5.jpg";
imgSrc[3]="pic/m4.jpg";
imgSrc[4]="pic/d6.jpg";
imgSrc[5]="pic/d7.jpg";
imgSrc[6]="pic/m8.jpg";
imgSrc[7]="pic/s6.jpg";
imgSrc[8]="pic/d5.jpg";
imgSrc[9]="pic/m9.jpg";
imgSrc[10]="pic/s4.jpg";
imgSrc[11]="pic/m11.jpg";
function showImg(){
index++;
if (index == 11) {
     index = 0;
 }
 document.images["imgShow"].src=imgSrc[index];
}
var item;
function showImgInfinite(){
item=setInterval("showImg()",2000);
}

function blurname(){
 var chname=document.getElementById("name").value;
 if(chname=="" || chname==" " ){
     document.getElementById("lableName").innerHTML="Invalid Entry ";
     document.getElementById("name").focus();
  
 }
 else{
   document.getElementById("lableName").innerHTML=" ";
 }
}
 function blurphone(){
 var chphone=document.getElementById("phone").value;
 if(isNaN(chphone)){
    
      document.getElementById("lablePhone").innerHTML="Invalid PLZ Enter Numbers";
      document.getElementById("phone").focus();
       chphone.select();
 }   
     else if(chphone=="" || chphone.length<11){
       document.getElementById("lablePhone").innerHTML="Invalid Enter 11 Numbers only";
       document.getElementById("phone").focus();

 }
 else{
   document.getElementById("lablePhone").innerHTML="";
 }
 
}


function bluremail(){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 var chmail=document.getElementById("email").value;
 if(chmail=="" || chmail==" " ){
     document.getElementById("lableEmail").innerHTML="Invalid Entry ";
     document.getElementById("email").focus();
 }
 else{
   document.getElementById("lableEmail").innerHTML=" ";
 }
}

function bluraddress(){
 var chaddress=document.getElementById("address").value;
 if(chaddress=="" || chaddress==" "){
     document.getElementById("lableAddres").innerHTML="Invalid Entry ";
     document.getElementById("address").focus();

 }
 else{
   document.getElementById("lableAddres").innerHTML=" ";
 }
}

function checkData(){
  var nameBt = document.getElementById("name").value;
  var phoneBt = document.getElementById("phone").value;
  var emailBt = document.getElementById("email").value;
  var addressBt = document.getElementById("address").value;
  var response = confirm("Your name is:"+nameBt +".\nYour Phone is :"+phoneBt+".\nYour E-mail is :"+emailBt+".\nYour Address is:"+addressBt+".");

  if(response==true){

    alert("Your Order saved. \n     T H A N K S ");
  }
  else{
    document.getElementById("name").value="";
    document.getElementById("name").focus();
  }
}
