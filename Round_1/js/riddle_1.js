//Setting up riddles for sbround1
var riddles = [
  "I drink, but not from a glass. I use thousands of fingers to eat. I live in the parking lot of this college.Guess who i am ?",
  "I'm the only 24*7 supplier of method of exchange.I stay cool through out the day.Who am i?",
  "I am standing where the careers of the student reside.I am the child of Royal Enfield.What u are looking for is inside me.Come and get me.",
  "I'm full of pins and interesting stuff,People stare and can't get enough,Paper and invites hang around,Up on the wall I can be found.",
  "I am the child of a half bitten apple, I inspire you to get through life even though life hits you with bricks."
]
//Setting up answers
var riddle_answers = [
  {"ridans":"TREE"},
  {"ridans":"IDBIATM"},
  {"ridans":"HELMET"},
  {"ridans":"NOTICEBOARD"},
  {"ridans":"JOBSQUOTE"},

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
  var index_random = Math.floor((Math.random()*5)+(0))
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

