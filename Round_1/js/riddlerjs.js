//RIDDLERJS JS
//Function to write strings in HTML Page
function write_where_id(id_object,string_to_be_written){
    document.getElementById(id_object).innerHTML = string_to_be_written
}

//Getting the values of the login id and password from LogPage.html

//Next single line is used to get the value of logid from log.js
var logid = localStorage.loginid


//String to be written on Riddler.html
const loginiddisplay = "Login id : " + logid
const htmlid = "log" 

//Now calling function to write_where_id
write_where_id(htmlid, loginiddisplay)
to_check_id_pass()

//Function to check for login id passage and password
function to_check_id_pass(){
    console.log("Success id",logid);
    
}
