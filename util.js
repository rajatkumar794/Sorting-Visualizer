function startSorting()
{
    if(currentAlgo=="selection")
        selectionSort();
    else if(currentAlgo=="bubble")
        bubbleSort();
    else if(currentAlgo=="insertion")
        insertionSort()
    else if(currentAlgo=="merge")
        mergeSort()
    else if(currentAlgo=="quick")
        quickSort()
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