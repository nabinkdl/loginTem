function validateForm()
{


    let x= document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }

}
