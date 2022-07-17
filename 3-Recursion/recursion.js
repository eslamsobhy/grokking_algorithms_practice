const count_down = (starter) => {
    if (starter <= 0) return 0;
    else {
        console.log(starter);
        return count_down(starter -1);
    }
}

const fact = (x) => {
    if (x == 1) return 1
    else return x * fact(x-1);
}

console.log(fact(5));
console.log(count_down(5));