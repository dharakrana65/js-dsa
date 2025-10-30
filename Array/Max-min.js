const randomArr = [24,5,23,5,1,10,57,111,2];

function findMaxMinNumber(arr) {
    let max = arr[0];
    let min = arr[0];

    let currentMax = max;
    let currentMin = min;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > currentMax) {
            currentMax = arr[i];
        }

        if(arr[i] < currentMin) {
            currentMin = arr[i];
        }
    }

    max = Math.max(max,currentMax);
    min = Math.min(min,currentMin);

    console.log(`MAX: ${max} || MIN: ${min}`)
}

findMaxMinNumber(randomArr)