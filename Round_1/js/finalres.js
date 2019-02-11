//Keeping track of the login id
var logid = window.localStorage.loginid
var lgid = logid
console.log(logid)
document.getElementById("test").innerHTML = "" + logid


//Keeping riddles for reference

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

//Function to check answers to result 3
function finalcheckans(){
    
    //Taking values from the html doc riddle1.html
    var ans = document.getElementById("finans").value
    
    //Extrapolating value of index random
    var index_random = Number(localStorage.inrand3)
    //Extrapolating the answer from the array
    var ridans1 = riddle_answers_3[index_random]
    
    //Checking for the correct answer
    if(ridans1.ridans==ans){
        console.log("Correct Answer")
        localStorage.anstoriddle3=1
        document.getElementById("showres").disabled=true
        return(true)
    }
    else{
        localStorage.anstoriddle3=0
        console.log("Wrong answer")
        alert("Wrong answer : If you have any doubt please ask the coordinators.")
        location.reload(true)
        return(false)
    }

}

//Function to validify that one has infact attempted all the 3 riddles
//And has found the correct answers to them

function validify(){
    var anstoriddle1 = Number(localStorage.anstoriddle1)
    var anstoriddle2 = Number(localStorage.anstoriddle2)
    var anstoriddle3 = Number(localStorage.anstoriddle3)
    const finalresmessage = "Congrats you have qualified the 1st round. Please show this message to the coordinators."
    const nonqualificationmessage = "Sorry as it currently stands you have not qualified for the 2nd round, please show this message to the coordinators."
    //Set of statements to check for the anser to riddle
    console.log("1:",anstoriddle1)
    console.log("2:",anstoriddle2)
    console.log("3:",anstoriddle3)

    if(anstoriddle1==1&&anstoriddle2==1&&anstoriddle3==1){
        console.log("Qualified for 2nd round.")
        document.getElementById("finalresmsg").innerHTML = finalresmessage

    }

    else{
        console.log("Not qualified. Better luck next time.")
        document.getElementById("finalresmsg").innerHTML = nonqualificationmessage
    }
   

    
}