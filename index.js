function makeGreen (){
    document.body.style.background = 'green'
}
function makeRed (){
    document.body.style.background = 'red'
}
function makeBlack (){
    document.body.style.background = 'black'
}
function makeBlue (){
    document.body.style.background = 'blue'
}
function makePurple(){
    document.body.style.background = 'purple'
}
function makeYellow (){
    document.body.style.background = 'yellow'
}

// consept 2
const redBoton = document.getElementById('make-red')
redBoton.onclick = makeRed;
function makeRed(){
    document.body.style.background = 'red'
}

const blackButon = document.getElementById('make-black')
blackButon.onclick = makeBlack;
function makeBlack(){
    document.body.style.background = 'black'
}

const blueBaton = document.getElementById('make-blue')
blueBaton.ondblclick = makeBlue;
function makeBlue (){
    document.body.style.background = "blue"
}

const greenBaton = document.getElementById("make-green")
greenBaton.ondblclick = makeGreen;
function makeGreen(){
    document.body.style.background ="Green"
}

// consept 3
const redBaton = document.getElementById('red')
redBaton.onclick = function (){
    document.body.style.background = 'red'
}
const blackBaton = document.getElementById("black-boy")
blackBaton.onclick = function(){
    document.body.style.background = 'black'
}

// consept 4

const greenBoton = document.getElementById("green-man")
greenBoton.addEventListener('click',function(){
    document.body.style.background = "green"
})

const blueBoton = document.getElementById("blue-moon")
blueBoton.addEventListener('click',function(){
    document.body.style.background = 'blue'
})

// consept 5

document.getElementById('yellow-gys').addEventListener('click',function(){
    document.body.style.background = 'yellow'
})

document.getElementById('red-woman').addEventListener('click',function(){
    document.body.style.background = "red"
})

