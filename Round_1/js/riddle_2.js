//Keeping track of the login id
var logid = window.localStorage.loginid
var lgid = logid
console.log(logid)
document.getElementById("test").innerHTML = "" + logid

//Setting up riddles for sbround2
var riddles_2 = [
  "EMERGENCY...EMERGENCY!!!!!	Its getting red hot, come fast , spray me and save your life.!!!",
  "I stand alone in one corner of every floor, blue with lonliness.You come and meet me when u run out of life.Guess who i am??",
  "What is black when it is clean and white when it is dirty?I am on the walls.",
  "What object has keys that open no locks, space but no room, and you can enter but not go in ?",
  "I am a level on top of a level, I give a direct view to the blue and serve as  chill out spot for the hot shot."
]
//Setting up answers
var riddle_answers_2 =  [
  {"ridans":"FIREEXTINGUISHER"},
  {"ridans":"WATERCOOLER"},
  {"ridans":"BLACKBOARD"},
  {"ridans":"KEYBOARD"},
  {"ridans":"TERRACE"},

]

//Taking the reference of riddles of round 1.
var riddles = [
    "I drink, but not from a glass. I use thousands of fingers to eat. I live in the parking lot of this college.Guess who i am ?",
    "I'm the only 24*7 supplier of method of exchange.I stay cool through out the day.Who am i?",
    "I am standing where the careers of the student reside.I am the child of Royal Enfield.What u are looking for is inside me.Come and get me.",
    "I'm full of pins and interesting stuff,People stare and can't get enough,Paper and invites hang around,Up on the wall I can be found.",
    "I am the child of a half bitten apple, I inspire you to get through life even though life hits you with bricks."
]
//Setting up answers
var riddle_answers_1 = [
    {"ridans":"TREE"},
    {"ridans":"IDBIATM"},
    {"ridans":"HELMET"},
    {"ridans":"NOTICEBOARD"},
    {"ridans":"JOBSQUOTE"},

]
//Generating Random Indexes

//Generating Random Indexes
//Generate Random index only after the riddle 1 button is clicked from riddler.html nav bar
function generate_random_riddles(){
  //Generating Random Indexes
  var index_random2 = Math.floor((Math.random()*5)+(0))
  localStorage.inrand2 = Number(index_random2)
  console.log(index_random2)
  
}
 

//Now generating and showing the randomly generated riddler
function showriddles2(){
  
  var inrand2 = localStorage.inrand2
  var rid2 = riddles_2[inrand2]
  console.log(inrand2)
  console.log(riddles_2[inrand2])
  document.getElementById("r2").innerHTML = " " + rid2

}

//Function to check answers of riddle1
function checkans(){
    
    //Taking values from the html doc riddle1.html
    var ans = document.getElementById("ans1").value
    
    //Extrapolating value of index random
    var index_random = localStorage.inrand 
    //Extrapolating the answer from the array
    var ridans1 = riddle_answers_1[index_random]
    
    //Checking for the correct answer
    if(ridans1.ridans==ans){
        
        localStorage.setItem("anstoriddle1", "1")
        console.log("Correct Answer",localStorage.anstoriddle1)
        document.getElementById("unlock").disabled=true
        return(true)
    }
    else{
      localStorage.setItem("anstoriddle1", "0")
        console.log("Wrong answer")
        alert("Wrong answer : If you have any doubt please ask the coordinators.")
        location.reload(true)
        return(false)
    }

}