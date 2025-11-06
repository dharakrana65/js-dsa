const arr = [1,2,3,4,5,6,7]

/**
 * 
 * @param {} arr 
 * @param {*} k 
 */
function rotateLeftByK(arr,rotations) {
    let k = rotations % arr.length; // make rotation minimum
    let temp = [];
    for(let i = 0; i < k; i++) {
        temp.push(arr[i]);
    }

    for(let i = k;i < arr.length; i++) {
        arr[i-k] = arr[i];
    }   

    for(let i = arr.length - k; i < arr.length ; i++) {
        arr[i] = temp[i - (arr.length - k)];
    }
}

function rotateRightByK(arr, rotations) {
    let k = rotations % arr.length; // make rotation minimum
    let temp = [];
    for(let i = arr.length - k; i < arr.length; i++) {
        temp.push(arr[i]);
    }

    for(let i = arr.length - k - 1; i >= 0; i--) {
        arr[i + k] = arr[i];
    }

    for(let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}
rotateLeftByK(arr, 3)

console.log(arr)