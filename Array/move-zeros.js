const arr = [1,0,0,2,4,2,1,0,1,0,0,7,0,8,3,6,0,0];

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function moveZeroes(arr) {
 let start = 0;
 let end = arr.length - 1;

 while(start < end) {
    while(arr[start] !== 0 && start < end) {
        start++;
    }
    while(arr[end] === 0 && start < end) {
        end--;
    }
    if(start < end) {
        swap(arr, start, end);
    }
 }
}
moveZeroes(arr)
console.log(arr);