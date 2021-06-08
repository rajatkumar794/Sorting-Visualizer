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
        }, time);
    });
}

function mark(status,i){
    array[i].status = status
}

function shiftArray(s,e)
{   
    let temp = array[e+1].value
    for(let i=e; i>=s; --i)
        array[i+1].value=array[i].value;
    array[s].value=temp;
}