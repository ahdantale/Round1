
//Creating JSON for ids and passwords
var credentials_teams = [
  {"Teampass":16201},
  {"Teampass":16202},
  {"Teampass":16203},
  {"Teampass":16204},
  {"Teampass":16205},
  {"Teampass":16206},
  {"Teampass":16207},
  {"Teampass":16208},
  {"Teampass":16209},
  {"Teampass":162010},
  {"Teampass":162011},
  {"Teampass":162012},
  {"Teampass":162013},
  {"Teampass":162014},
  {"Teampass":162015},
  {"Teampass":162016},
  {"Teampass":162017},
  {"Teampass":162018}
]
var userids = [
  "Team1","Team2","Team3","Team4","Team5","Team6","Team7","Team8","Team9","Team10","Team11","Team12","Team13","Team14","Team15","Team16","Team17","Team18"
]
//Function To Check For Correct Credentials
function checkcreds(){
  //loop invariant
  var i
  var j
  //Get the values from the HTML page
  var logid=document.getElementById("logid").value
  var pass=document.getElementById("pass").value

  for(j=0;j<userids.length;j++)
  {
   if(logid==userids[j])
   {  
     var _pass = credentials_teams[j]
         if(_pass.Teampass==pass){
           return true
         } 
         else
    {
      return false
    }
    }
    
}
}
//Function to accept forms
function logincheck(form){
     
    //Variables
    var logid=document.getElementById("logid").value
     var pass=document.getElementById("pass").value
    //Credential authentication start
    if(checkcreds()){
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



