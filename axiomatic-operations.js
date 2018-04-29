export let applyItNTimes = (it) => (n) => (val) => {
    for(let i=0; i < n; i++){
        val = it(val)
    }
    return val
};

// hyper 0 is successor
export const suc = _a => b => ++b;
