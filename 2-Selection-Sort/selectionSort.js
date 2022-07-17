const list = [20, 3, 14, 33, 4, 202, 10, 54, 100, 77];

const find_smallest = (list) => {
    let smallest = list[0];
    for(let i=1; i<list.length; i++){
        if (list[i] < smallest){
            smallest = list[i];
        }
    }
    return smallest;
}

const find_index_of_element = (list, element) => {
    for(let i=0; i<list.length; i++){
        if(list[i] == element) return i;
    }
    return -1;
}



const pop_element_from_array = (list, element) => {
    let index = find_index_of_element(list, element);
    const popped = list[index];
    for(let i=index; i<list.length; i++){
        list[i] = list[i+1];
    }
    return popped;
}

const selection_sort = (list) => {
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        let smallest = find_smallest(list);
        newArray.push(pop_element_from_array(list, smallest));
    }
    return newArray;
}

// console.log(selection_sort(list));

console.log(selection_sort(list));