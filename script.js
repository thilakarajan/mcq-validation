function red(element){
  element.children[0].style.backgroundColor = 'red'
  element.children[1].style.backgroundColor = 'red'
  element.children[0].style.borderColor = 'red'

  element.style.backgroundColor = 'red'
  element.style.color = 'white'
  element.style.borderColor = 'red'
}

function green(element) {
  element.children[0].style.backgroundColor = 'green'
  element.children[0].style.borderColor = 'green'
  element.children[1].style.backgroundColor = 'green'
  element.style.backgroundColor = 'green'
  element.style.color = 'white'
  element.style.borderColor="green"
}

function normal(element){
  element.children[0].style.backgroundColor = 'brown'
  element.children[0].style.borderColor = 'brown'
  element.children[1].style.backgroundColor = 'white'
  element.style.backgroundColor = 'white'
  element.style.color = 'black'
}


var red1 = document.getElementsByClassName("red")[0];
var red2 = document.getElementsByClassName('red')[1];
var red3 = document.getElementsByClassName('red')[2];
var green1 = document.getElementsByClassName('green')[0];

red1.addEventListener('click',()=>{
  red(red1)
  normal(red2)
  normal(red3)
  normal(green1)
})

red2.addEventListener('click', () => {
  red(red2)
  normal(red1)
  normal(red3)
  normal(green1)
})

red3.addEventListener('click', () => {
  red(red3)
  normal(red2)
  normal(red1)
  normal(green1)
})

green1.addEventListener('click', () => {
  green(green1)
  normal(red2)
  normal(red3)
  normal(red1)
})
