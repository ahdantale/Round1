
//Creating JSON for ids and passwords
var credentials_teams = [
  {"Team1":16201},
  {"Team2":16201}
]

//Function to accept forms
function logincheck(form){
     
    //Variables
    var logid=document.getElementById("logid").value
     var pass=document.getElementById("pass").value
    //Credential authentication start
    if(logid =='given'&&pass =='given'){
     window.localStorage.loginid=logid
     console.log("Login successfull");
     console.log(logid)
     console.log(pass)
     return(true)//Values are returned to the form.This enables the "onsubmit" functionality.
    }
    else{
      console.log("login failed");
      console.log(logid)
      console.log(pass)
      alert("Login failed: Wrong Credentials")//Alert the user on wrong credentials
      return(false)
     }

}



