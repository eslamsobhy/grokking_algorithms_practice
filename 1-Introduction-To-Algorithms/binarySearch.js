const list = [3, 7, 8, 15, 39, 105, 400]; //The list should be sorted!

const key = 7;

const binary_search = (list, key) => {
    let low = 0;
    let high = (list.length) - 1;

    while (low <= high){
        let mid = (low + high) / 2;
        let guess = list[mid];
        if (guess === key){
            return mid
        }else if (guess < key){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binary_search(list, key));