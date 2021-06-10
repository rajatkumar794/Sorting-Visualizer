async function selectionSort()
{
    let n = inputSize
    for (let i = 0; i < n; ++i)
    {   mark("current-element",i)
        let min_idx = i;
        for (let j = i+1; j < n; j++)
        {   mark("comparing-element",j)
            displayArray()
            await pause(20)
            if (compare(min_idx,j))
            {   mark("unsorted",min_idx)
                min_idx = j;
                mark("current-element",min_idx)
            }
            else
            mark("unsorted",j)
        }    
        await swap(i,min_idx)
        mark("sorted",i)
        displayArray()
    }
}

async function bubbleSort()
{
    let n = inputSize;
    for (let i = 0; i < n-1; i++)
    {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++)
        {   mark("current-element",j)
            mark("comparing-element",j+1)
            displayArray()
            await pause(20)
            if (compare(j,j+1))
            {
                await swap(j,j+1)
                swapped = true;
            }
            mark("unsorted",j)
            mark("unsorted",j+1)
        }
        mark("sorted",n-i-1)
        displayArray()
        if (!swapped)
        {
            for(let k=0; k<inputSize; ++k)
                mark("sorted",k)
            break;
        }
    }
    mark("sorted",0)
    displayArray()
}

async function insertionSort()
{
    let n = inputSize;
    for (let i = 1; i < n; ++i)
    {
        let key = array[i].value;
        let j = i - 1;
        mark("current-element",i)
        while (j >= 0 && array[j].value > key)
        {   
            mark("current-element",j)
            mark("comparing-element",j+1)
            displayArray()
            await pause(20)
            array[j+1].value=array[j].value
            mark("unsorted",j)
            mark("unsorted",j+1)
            j = j - 1;
            displayArray()
            await pause(20)
        }
        mark("unsorted",i)
        array[j + 1].value = key;
        displayArray()
        await pause(20)
    }
    for(let i=0; i<n; ++i)
        mark("sorted",i)
    displayArray()
}

async function mergeSort()
{
    await mergeSortHelper(0,inputSize-1);
    for(let i=0; i<inputSize; ++i)
        mark("sorted", i)
    displayArray()
}

async function mergeSortHelper(l, r)
{   
    if (l < r)
    {   
        let m =Math.floor((r+l)/2);
        await mergeSortHelper(l, m);
        await mergeSortHelper(m + 1, r);
        await merge(l, m, r);
    }
}

async function merge(l, m, r)
{
    
    let i = l, j =m+1, k=0;
    let temp = []
    while(i<=m && j<=r)
    {   
        if(compare(i,j))
        {   temp.push(array[j].value);
            ++j;
        }
        else
        {
            temp.push(array[i].value);
            ++i;
        }
    }

    while(i<=m)
    {
        temp.push(array[i].value);
        ++i;
    }

    while(j <=r)
    {
        temp.push(array[j].value);
        ++j;
    }

    for(let k=l; k<=r; ++k)
        mark("current-element",k);
    mark("comparing-element", m)
    for(let k=0; k<temp.length; ++k)
    {   
        await pause(20);
        array[l+k].value=temp[k];
        displayArray()
    }
    
    for(let k=l; k<=r; ++k)
        mark("unsorted",k);
}

async function quickSort()
{
    await quickSortHelper(0, inputSize-1)
    mark("sorted", array.length-2)
    mark("sorted", array.length-1)
    displayArray()
}

async function quickSortHelper(low, high)
{   
    if(low==high)
    {
        for(let i=0; i<=low; ++i)
            mark("sorted", i)
    }
    else if (low <high)
    {
        let pi = await partition(low, high);

        await quickSortHelper(low, pi - 1);

        await quickSortHelper(pi + 1, high);
        displayArray()
    }
}

async function partition(low, high)
{   
    let pivot = Number(array[high].value);
    mark("current-element", high)
    let i = low-1, j=low;
    displayArray()
    await pause(20)
    for(let j = low; j<high; j++)
    {   
        mark("comparing-element",j)
        displayArray()
        await pause(20)
        if (Number(array[j].value) < pivot)
        {   
            i++;
            swap(i, j);
            displayArray()
            await pause(20)
        }
        mark("unsorted",j)
        
    }
    swap(i + 1, high);
    
    mark("unsorted", high)
    if(low+1==high)
    {
        mark("sorted",low);
        mark("sorted",high);
    }
    return (i + 1);
}