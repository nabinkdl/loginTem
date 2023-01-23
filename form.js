
function validateForm()
{
    var pas= document.forms["myForm"]["password"].value;
    let x= document.forms["myForm"]["username"].value;
    var W= pas.length;

    if (x == "") {
      alert("Username must be filled out");
      return false;
    }

    if (pas == "") {
      alert("Password must be filled out");
      return false;
    }

else{
  
if(W>6){

  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,28}$/;
     if (re.test(pas))
       {
       
       return true;
  }
  else{
    alert('Your password must satisfy the following. \n\n* Password should be 6 to 28 character long. \n* Password should have at least one alphabet. \n* Password should have at least one numeric value. \n* Password should  have special characters.');
    return false;
  }
}

else{
  alert("Password length must be Greater then 6");
  return false;
}}
}
