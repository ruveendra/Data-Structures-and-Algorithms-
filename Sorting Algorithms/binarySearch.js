let arr = [1,4,6,7,8,10,12,14,16];
let x = 12;

function binarySort(arr,x){
    let l = 0;
    let r = arr.length - 1;

    while (r>=l){
        mid = l + Math.floor((r-l)/2);
        if (arr[mid] == x){
            return mid
        }

        if (arr[mid] > x){
            r = mid -1;
        }
        
        else {
            l = mid + 1;
        }

        
    }
    return -1
}

var result = binarySort(arr,x)
result == -1 ? console.log("Value is not present in the array") : console.log(`Value is present at index ${result}`)

