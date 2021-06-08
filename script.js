let sizeSlider = document.querySelector(".alter-size")
let generateNewArray = document.querySelector(".new-array")
let algoList = document.querySelectorAll(".algo")
let startButton = document.querySelector(".start")

let inputSize = sizeSlider.value;
let currentAlgo = "selection"
let array = [];
let arrayElements = []
let elementWidth = width = ((window.innerWidth/20)/(2*50))

initializeArray()
displayArray()

sizeSlider.addEventListener("input", function(e){
    inputSize=sizeSlider.value;
    elementWidth = ((window.innerWidth/20)/(2*inputSize))
    initializeArray()
    displayArray()
})

generateNewArray.addEventListener("click", function(e){
    initializeArray()
    displayArray()
})

for(let i=0; i<algoList.length; ++i)
{
    algoList[i].addEventListener("click", function(e){
        if(document.querySelector(".active-algo"))
        {
            document.querySelector(".active-algo").classList.remove("active-algo")
        }
        currentAlgo=e.target.classList[1]
        e.target.classList.add("active-algo")        
    })
}

startButton.addEventListener("click", function(e){
    startSorting()
})