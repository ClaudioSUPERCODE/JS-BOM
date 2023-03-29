
// BOM - LEVEL-1_1

// function startIn3() {
//     setTimeout(outputAfter3, 3000);
//     console.log("In 3 Sekunden gehts los...")
// }

// function outputAfter3() {
//     console.log("Glückwunsch. Du hast 3 Sekunden verschwendet.")
// }

// startIn3()

// part2

// let count = 11

// const downCount = () => {
//     if (count > 0) {
//         count -= 1
//         console.log(count)
//     } else {
//         console.log("Endlich Feierabend")
//         stopDownCount()
//     }
// }

// function stopDownCount() {
//     clearInterval(timer)
// }

// const timer = setInterval(downCount, 1000)


// BOM - LEVEL-1_2

let count2 = 101
const prozent = document.getElementById("prozent")

const downCount2 = () => {
    function counter() {
        if (count2 > 0) {
            count2 -= 1
            console.log(count2 + "%")
            prozent.innerHTML = `${count2}${"%"}`
        } else {
            count2 = 101
            stopDownCount2()
        }
    }
    const timer2 = setInterval(counter, 50)
    function stopDownCount2() {
        clearInterval(timer2)
    }
}

// BOM - LEVEL-2_1

let kreis = document.getElementById("message")
let zahlDisplay = document.getElementById("count")
let number = 10

const downCount3 = () => {
    if (number > 0) {
        number -= 1
        console.log(number)
        zahlDisplay.innerHTML = number
    } else {
        kreis.style.visibility = "hidden"
    }
}

const countdown = setInterval(downCount3, 1000)