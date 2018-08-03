export const add = (a,b) => {
    let sum = a;
    for (let i = 0; i < b; i++){
        sum++
    }
    return sum
};

const recurseNTimes = (fn, n) => {
    if(n === 0) {
        return 1
    }
    for(let i = 0; i< n ;i ++) {
        recurseNTimes(fn, n-1)
    }
};

export const multiply = (a,b) => {
    let sum = 0;
    for (let i = 0; i < a; i++){
        for (let i = 0; i < b; i++){
            sum++
        }
    }
    return sum
};

export const exp = (a,b) => {
    let sum = 0;
    // b nested for loops
    for (let i = 0; i < a; i++){
        for (let i = 0; i < a; i++){
            for (let i = 0; i < a; i++){
                for (let i = 0; i < a; i++){
                    sum++
                }
            }
        }
    }
    return sum
};