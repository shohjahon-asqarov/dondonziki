const leftHand = document.querySelector('.left');
const rightHand = document.querySelector('.right');
const resultEl = document.querySelector('.result');

const paperHand = document.querySelector('.paper');
const rockHand = document.querySelector('.rock');
const scissorsHand = document.querySelector('.scissors');


const variants = ['/images/paper.png', '/images/rock.png', '/images/scissors.png']

function getRandom() {
    let randomNumber = Math.floor(Math.random() * 3);
    return variants[randomNumber]
}


function checkResult() {
    let user = leftHand.src.split("/").pop().split(".")[0];
    let robot = rightHand.src.split("/").pop().split(".")[0];

    if (user == robot) return 'Draw!';

    if (user == 'paper' && robot == 'rock') return 'You Won!';

    if (user == 'scissors' && robot == 'paper') return 'You Won!';

    if (user == 'rock' && robot == 'scissors') return 'You Won!';

    return 'Robot Won!'

}



paperHand.addEventListener('click', function () {
    leftHand.src = '/images/paper.png';

    rightHand.src = getRandom();

    resultEl.textContent = checkResult();
})

rockHand.addEventListener('click', function () {
    leftHand.src = '/images/rock.png';

    rightHand.src = getRandom();

    resultEl.textContent = checkResult();

})

scissorsHand.addEventListener('click', function () {
    leftHand.src = '/images/scissors.png'

    rightHand.src = getRandom();

    resultEl.textContent = checkResult();

})



