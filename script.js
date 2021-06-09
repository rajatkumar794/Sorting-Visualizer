let sizeSlider = document.querySelector(".alter-size")
let speedChoice = document.querySelector(".alter-speed")
let generateNewArray = document.querySelector(".new-array")
let algoList = document.querySelectorAll(".algo")
let startButton = document.querySelector(".start")
let currentArrSize = document.querySelector(".current-size")
let inputSize = sizeSlider.value;
let currentAlgo = "selection"
let array = []
let baseDelay = 400;
let sortDelay = baseDelay;

let elementWidth = (window.innerWidth<500)?((window.innerWidth/5)/(2*50)): ((window.innerWidth/20)/(2*50));
let textSize = elementWidth/5;

initializeArray()
displayArray()
currentArrSize.innerHTML = 50;

sizeSlider.addEventListener("input", function(e){
    inputSize=sizeSlider.value;
    currentArrSize.innerHTML = inputSize;
    if(window.innerWidth<500)
        elementWidth = ((window.innerWidth/5)/(2*inputSize))
    else
        elementWidth = ((window.innerWidth/20)/(2*inputSize))
    textSize=elementWidth/5;
    initializeArray()
    displayArray()
})

speedChoice.addEventListener("change", function(e){
    let speed = speedChoice.value;
    if(speed=="1")
        sortDelay=baseDelay;
    else if(speed=="2")
        sortDelay=baseDelay/2;
    else if(speed=="3")
        sortDelay=baseDelay/3;
    else if(speed=="4")
        sortDelay=baseDelay/4;
    else
        sortDelay=baseDelay/8;
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