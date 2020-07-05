function checkName()
{
  var userName = document.getElementById("bookingPersonName").value;
  var nameRegx = new RegExp("[a-z][A-Z]+");
  var testResult = nameRegx.test(userName);
  if(testResult==false)
       document.getElementById("invalidMsg").value="Invalid Name";
  else
       document.getElementById("invalidMsg").value="";
}

function checkPhone()
{
  var userPhone = document.getElementById("bookingPhone").value;
  var phoneRegx = new RegExp("01-[0-9]{9}");
  var testResult = phoneRegx.test(userPhone);
  if(testResult==false)
       document.getElementById("invalidMsg").value="Invalid Phone Number";
  else
       document.getElementById("invalidMsg").value="";
}

function checkAvailable()
{
  var arrDates = new Array();
  var newDate = document.getElementById("bookingDate").value;
  for(let i=0 ; i < arrDates.length ; i++)
  {
    if(newDate == arrDates[i])
    {alert("The appointment is reserved");}
    else
    {arrDates.push(newDate);}
  }
}

function check()
{
  checkName();
  checkPhone();
  checkAvailable();
}

function success()
{
  alert("Done...Wait For you");
  this.close();
}

function bookingDetails ()
{
  window.open("bookingDetails.html","_blank","top=40,left=500,height=700px,width=500px,toolbar=no,resizable=no");
}
