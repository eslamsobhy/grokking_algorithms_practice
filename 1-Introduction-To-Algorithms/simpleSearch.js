const list = [3, 7, 8, 15, 39, 105, 400]; //The list should be sorted!

const key = 7;

const simple_search = (list, key) => {
    for(let i=0; i< list.length; i++){
        if (list[i] === key){
            return i
        }
    }
    return -1;
}

console.log(simple_search(list, key));