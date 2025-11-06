const arr = [1,2,3,4,5,6,7]

/**
 * 
 * @param {} arr 
 * @param {*} k 
 */
function rotateByK(arr,rotations) {
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

rotateByK(arr, 3)
console.log(arr)