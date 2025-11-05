// const arr = [120,25,12,7,7,3,6,1,9,10]
// const low = 0;
// const high = arr.length-1

// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function findPartition(arr,low,high) {
//     let i  = low
//     let j = high
//     let pivot = arr[low]
//     while(i < j) {
//         // console.log("inside while")
//         while(i <= high-1 && arr[i] <= pivot ) {
//             i++;
//         }

//         while( j >= low+1 && arr[j] > pivot ) {
//             j--
//         }

//         if(i < j) {
//             swap(arr, i, j)
//         }
//     }
//     console.log(i,j)
//     if(i>=j) { //* >= is imp for i and j are same 
//         swap(arr, low, j)
//     }

//     return j
// }

// function quickSort(arr,low,high) {
//     if(low < high) {
//         const partition = findPartition(arr,low,high)
//         quickSort(arr, low, partition-1);
//         quickSort(arr, partition+1, high);
//     }
// }

// quickSort(arr, low, high)
// console.log(arr)


//decending order
const arr = [120,25,12,7,7,3,6,1,9,10];

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
    while (i <= high - 1 && arr[i] >= pivot) i++;
    while (j >= low + 1 && arr[j] < pivot) j--;
    if (i < j) swap(arr, i, j);
  }

  swap(arr, low, j); // final pivot placement
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const partition = findPartition(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
