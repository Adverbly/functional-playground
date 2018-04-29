
export let applyItNTimes = (it) => (n) => {
    return (val) => {
        for(let i=0; i < n; i++){
            val = it(val)
        }
        return val
    }
};

export let itItNTimes = (n) => (it) => {
    for(let i=0; i < n; i++){
        it = it(it);
    }
    return it
};

// hyper 0 is successor
export let inc = x => x + 1;
export let currySuc = (x) => applyItNTimes(inc)(1);
export let suc = (a, b) => currySuc(a)(b);

//hyper 1 is addition
export let curryAdd = (x) => applyItNTimes(currySuc(x))(x);
export let add = (a, b) => curryAdd(a)(b);

//hyper 2 is multiplication
export let curryMul = (x) => applyItNTimes(curryAdd(x));
export let mul = (a,b) => curryMul(a)(b)(0);

//hyper 3 is exponentiation
export let curryExp = (a) => applyItNTimes(curryMul(a));
export let exp = (a,b) => curryExp(a)(b)(0);

export let it = () => applyItNTimes(2);
export let applyItALot = itItNTimes(2)(it);

export let result = applyItALot(inc)(0);

console.log(result);

