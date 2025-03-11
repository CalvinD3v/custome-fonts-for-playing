let score1El = document.getElementById("score1")
let score2El = document.getElementById("score2")
let scoreCount1 = 0
let scoreCount2 = 0
let timerEl = document.getElementById("timer")

function incrementScore(board, incrementValue) {
    board === 1
        ? score1El.textContent = scoreCount1 += incrementValue
        : score2El.textContent = scoreCount2 += incrementValue

    if (scoreCount1 > scoreCount2) {
        score1El.style.border = "3px solid #F59E0B"
        score2El.style.border = "3px solid #080001"
    }
    else if (scoreCount1 < scoreCount2) {
        score1El.style.border = "3px solid #080001"
        score2El.style.border = "3px solid #F59E0B"
    } else {
        score1El.style.border = "3px solid #080001"
        score2El.style.border = "3px solid #080001"
    }
}

let countDownDate = new Date('Jan 1, 2027 08:00:20').getTime()

let letsGooo = setInterval(function() {
    let now = new Date().getTime()
    let distance = countDownDate - now

    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(distance % (1000 * 60) / 1000)

    timerEl.innerHTML = hours + ":" + minutes + ":" + seconds

    if (distance < 0) {
        clearInterval(letsGooo)
        timerEl.innerHTML = "TIME OUT"
    }
}, 1000)

