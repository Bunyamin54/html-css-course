const main = document.querySelector(".grid-container")
const screen = document.querySelector(".screen")


main.addEventListener("click", (e) => {

    let greys = ["0","1","2","3","4","5","6","7","8","9","."]
    let oranges = ["+","-","X","÷","%"]

  
    if (greys.includes(e.target.innerText)){
        screen.innerText += e.target.innerText
    }
})