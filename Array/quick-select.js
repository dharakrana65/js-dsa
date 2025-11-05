const arr = [125,25,111,525,65,1,0,0]
const low = 0;
const high = arr.length-1

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findPartition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (i <= high - 1 && arr[i] <= pivot) i++;
        while (j >= low + 1 && arr[j] > pivot) j--;
        if (i < j) swap(arr, i, j);
    }

    swap(arr, low, j); // final pivot placement
    return j;
}

//gives kth lowest element
function quickSelect(arr, low, high, k) {
    const partition = findPartition(arr, low, high);

    if(partition === k) {
        return arr[partition];
    } else if(partition < k) {
        return quickSelect(arr, partition + 1, high, k);
    } else {
        return quickSelect(arr, low, partition - 1, k);
    }
}

console.log(quickSelect(arr, low, high, 2))