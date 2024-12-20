const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')
const case9 = document.querySelector('.case9')

let choixJoueur = true
let verifyCase1 = false
let verifyCase2 = false
let verifyCase3 = false
let verifyCase4 = false
let verifyCase5 = false
let verifyCase6 = false
let verifyCase7 = false
let verifyCase8 = false
let verifyCase9 = false
// True représente le joueur avec les croix




case1.addEventListener('click', () => {
    if (verifyCase1 = false){
        if (choixJoueur == true){
            case1.style.backgroundColor = "red"
            choixJoueur = false
            verifyCase1 = true
        }
        else {
        case1.style.backgroundColor = "blue"
        choixJoueur = true
        verifyCase1 = true
        }
    }

})

case2.addEventListener('click', () => {
    case2.style.backgroundColor = "red"
})

case3.addEventListener('click', () => {
    case3.style.backgroundColor = "red"
})

case4.addEventListener('click', () => {
    case4.style.backgroundColor = "red"
})

case5.addEventListener('click', () => {
    case5.style.backgroundColor = "red"
})

case6.addEventListener('click', () => {
    case6.style.backgroundColor = "red"
})

case7.addEventListener('click', () => {
    case7.style.backgroundColor = "red"
})

case8.addEventListener('click', () => {
    case8.style.backgroundColor = "red"
})

case9.addEventListener('click', () => {
    case9.style.backgroundColor = "red"
})