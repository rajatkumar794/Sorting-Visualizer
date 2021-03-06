async function startSorting()
{
    if(currentAlgo=="selection")
        await selectionSort();
    else if(currentAlgo=="bubble")
        await bubbleSort();
    else if(currentAlgo=="insertion")
        await insertionSort()
    else if(currentAlgo=="merge")
        await mergeSort()
    else if(currentAlgo=="quick")
        await quickSort()
    statusBar.querySelector(".in-progress").classList.add("hide")
    statusBar.querySelector(".success").classList.remove("hide")
}

function compare(i, j)
{   
    let a = Number(array[i].value)
    let b = Number(array[j].value)
    return a>b;
}

async function swap(i, j)
{
    let temp = array[i].value
    array[i].value = array[j].value
    array[j].value = temp
}

async function pause() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, sortDelay);
    });
}

function mark(status,i){
    array[i].status = status
}