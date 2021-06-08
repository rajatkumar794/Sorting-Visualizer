let content = document.querySelector(".visualizer")

function displayArray(){

    content.innerHTML=""
    for(let i = 0; i<inputSize; i++)
    {
        let newElement = document.createElement("div")
        newElement.classList.add("array-element")
        newElement.classList.add(array[i].status)
        let value =  array[i].value
        newElement.setAttribute("value",value);
        newElement.style.height=value+"px"
        newElement.style.width=elementWidth+"vw"
        content.append(newElement)
    }
}

function initializeArray(){
    array = []
    for(let i = 0; i<inputSize; i++)
    {   
        let value =  Math.floor(Math.random() * 500) + 1;
        let newElement = {"value":value, "status": "unsorted"}
        array.push(newElement)
    }
}