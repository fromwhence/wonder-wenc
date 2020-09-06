const questions = document.getElementById('questions')
const results = document.getElementById('results')
const submitBtn = document.querySelector('.button')
let answers = []

function displayRadioValues() { 

  let ele = document.getElementsByTagName('input')
    
  for(i = 0; i < ele.length; i++) {  
    if(ele[i].checked) {
      results.innerHTML += `<p>${ele[i].value}<p>`
      answers.push(ele[i])
    } 
  }

  if(answers.length < 6) {
    alert("Make sure you've answered all six questions")
    results.innerHTML = null
  } else {
    questions.style.display = "none"
    window.scrollTo(0, 0)
    $(document).ready(function(){
    $(yourColors).fadeIn(1000)
    })
  }
}

submitBtn.addEventListener("click", displayRadioValues)

