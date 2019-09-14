//Keeping track of the login id
var logid = window.localStorage.loginid
var lgid = logid
console.log(logid)
document.getElementById("test").innerHTML = "" + logid

//Setting up riddles for sbround1
var riddles = [
  "I drink, but not from a glass. I use thousands of fingers to eat. I live in the parking lot of this college.Guess who i am ?",
  "I'm the only 24*7 supplier of method of exchange.I stay cool through out the day.Who am i?",
  "I am standing where the careers of the student reside.I am the burden of a bike, I protect your head when you fall and make your head wet when its hot.What u are looking for is inside me.Come and get me.",
  "I'm full of pins and interesting stuff,People stare and can't get enough,Paper and invites hang around,Up on the wall I can be found.",
  "I am the child of a half bitten apple, I inspire you to get through life even though life hits you with bricks.",
  "I go up and down, round and round, but never move. You may find the next riddle at one of my ends.",
  "I hang on the wall, I describe a science and also an engineering, I am a level below the topmost level having an eye on the stairs.",
  "I reside outside the Head's Cabins, Serve as the resting spot of 2 students awaiting detention, I am a block body having iron inside me.",
  "You give me electricity, I give you wind , you find me in the room, you met the coordinators in "
]
//Setting up answers
var riddle_answers_1 = [
  {"ridans":"TREE"},
  {"ridans":"IDBIATM"},
  {"ridans":"HELMET"},
  {"ridans":"NOTICEBOARD"},
  {"ridans":"JOBSQUOTE"},
  {"ridans":"STAIRS"},
  {"ridans":"CSE"},
  {"ridans":"BENCH"},
  {"ridans":"FAN"}

]
//0 indicates false here
//Setting up the ans1 to be false by default
localStorage.anstoriddle1=0

//Setting the answer to riddle 2 to false by default
localStorage.anstoriddle2=0
//Setting the answer to riddle 3 to false by default
localStorage.anstoriddle3=0

//Generating Random Indexes
//Generate Random index only after the riddle 1 button is clicked from riddler.html nav bar
function generate_random_riddles(){
  //Generating Random Indexes
  var index_random = Math.floor((Math.random()*9)+(0))
  localStorage.inrand = Number(index_random)
  console.log(index_random)
}
 

//Now generating and showing the randomly generated riddler
function showriddles(){
  
  var inrand = localStorage.inrand
  var rid1 = riddles[inrand]
  console.log(inrand)
  
  document.getElementById("r1").innerHTML = " " + rid1

}


// //Function to close website after 1 hour
// function gotofinalres(){
//   window.location.href="../Round_1/finalresult.html"
//   console.log(time)
// }

// //Part to make timeout after a set time
// var time = setTimeout(gotofinalres,3600000)

// //Function to check answers
// function checkans(){
    
//     //Taking values from the html doc riddle1.html
//     var ans = document.getElementById("riddle1_ans").value
    
//     //Extrapolating value of index random
//     var index_random = localStorage.inrand 
//     //Extrapolating the answer from the array
//     var ridans1 = riddle_answers[index_random]
    
//     //Checking for the correct answer
//     if(ridans1.ridans==ans){
//         console.log("Correct Answer")
//         return(true)
//     }
//     else{
//         console.log("Wrong answer")
//         location.reload(true)
//         return(false)
//     }
//}

