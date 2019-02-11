//Keeping track of the login id
var logid = window.localStorage.loginid
var lgid = logid
console.log(logid)
document.getElementById("test").innerHTML = "" + logid


//Setting up riddles for sbround3
var riddles_3 = [
    "I'm an unit, but not SI and the computer scientists used me to name a language.",
    "I made Facebook what it is today, I run on its servers to maintain your virtual id. Hint: Formerly called personal home pages.",
    "I am Chinese and fully fantastic. I make the Thinkpad and acquire Motorola just for fun.",
    "GNU's is not unix and I am fantastic.I am the backbone of android,serve as the most widely deployed kernel in the world, I wear a Red hat, I am distributed in many forms , guess who am I.",
    "I acquired Flipkart in August of 2018",
    "A programming language and a physical disability, I infect Dustin in stranger things.",
    "I am round, I am under the ground, I shine and I am fine and expensive. Also I am a programming language created by the WALL"
]
//Setting up answers
var riddle_answers_3 = [
    {"ridans":"PASCAL"},
    {"ridans":"PHP"},
    {"ridans":"LENOVO"},
    {"ridans":"LINUX"},
    {"ridans":"WALMART"},
    {"ridans":"LISP"},
    {"ridans":"PEARL"}

]

//Taking the reference of riddles of round 2 for the checkans()
var riddles_2 = [
    "EMERGENCY...EMERGENCY!!!!!	Its getting red hot, come fast , spray me and save your life.!!!",
    "I stand alone in one corner of every floor, blue with lonliness.You come and meet me when u run out of life.Guess who i am??",
    "What is black when it is clean and white when it is dirty?I am on the walls.",
    "What object has keys that open no locks, space but no room, and you can enter but not go in ?",
    "I am a level on top of a level, I give a direct view to the blue and serve as  chill out spot for the hot shot."
]

//Setting up answers
var riddle_answers_2 = [
    {"ridans":"FIREEXTINGUISHER"},
    {"ridans":"WATERCOOLER"},
    {"ridans":"BLACKBOARD"},
    {"ridans":"KEYBOARD"},
    {"ridans":"TERRACE"},

]

//Generating Random Indexes
//Generate Random index only after the riddle 1 button is clicked from riddler.html nav bar
function generate_random_riddles(){
  //Generating Random Indexes
  var index_random3 = Math.floor((Math.random()*7)+(0))
  localStorage.inrand3 = Number(index_random3)
  console.log(index_random3)
  
}
 

//Now generating and showing the randomly generated riddle
function showriddles3(){
  
  var inrand3 = localStorage.inrand3
  var rid3 = riddles_3[inrand3]
  console.log(inrand3)
  console.log(riddles_3[inrand3])
  document.getElementById("r3").innerHTML = " " + rid3

}

//Function to check answers of riddle 2
function checkans(){
    
    //Taking values from the html doc riddle1.html
    var ans = document.getElementById("ans2").value
    
    //Extrapolating value of index random
    var index_random = localStorage.inrand2
    //Extrapolating the answer from the array
    var ridans1 = riddle_answers_2[index_random]
    
    //Checking for the correct answer
    if(ridans1.ridans==ans){
        
        localStorage.anstoriddle2=1
        console.log("Correct Answer",localStorage.anstoriddle2)
        document.getElementById("unlock3").disabled=true
        return(true)
    }
    else{
        localStorage.anstoriddle2=0
        console.log("Wrong answer")
        alert("Wrong answer : If you have any doubt please ask the coordinators.")
        location.reload(true)
        return(false)
    }

}