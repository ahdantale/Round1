//Setting up riddles for sbround1
var riddles = [
    "R1","R2","R3","R4","R5"
]
//Setting up answers
var riddle_answers = [
    {"ridans":"ans1"},
    {"ridans":"ans2"},
    {"ridans":"ans3"},
    {"ridans":"ans4"},
    {"ridans":"ans5"},

]
//Generating Random Indexes


//Generate Random index only after the riddle 1 button is clicked from riddler.html nav bar
function generate_random_riddles(){
  //Generating Random Indexes
  var index_random = Math.floor((Math.random()*4)+(0))
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




//Function to check answers
function checkans(){
    
    //Taking values from the html doc riddle1.html
    var ans = document.getElementById("riddle1_ans").value
    
    //Extrapolating value of index random
    var index_random = localStorage.inrand 
    //Extrapolating the answer from the array
    var ridans1 = riddle_answers[index_random]
    
    //Checking for the correct answer
    if(ridans1.ridans==ans){
        console.log("Correct Answer")
        return(true)
    }
    else{
        console.log("Wrong answer")
        location.reload(true)
        return(false)
    }

}