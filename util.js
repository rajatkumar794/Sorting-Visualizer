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

async function pause(time) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, 1000);
    });
}

function mark(status,i){
    arrayElements[i].style.background = colorCodes.status;
}

