
export let applyItNTimes = (it) => (n) => (val) => {
    for(let i=0; i < n; i++){
        val = it(val)
    }
    return val
};

// hyper 0 is successor
export let sucA = a => ++a;

// hyper 1 is addition
export let repeatSuc = applyItNTimes(sucA);
export let repeatSucNTimes = (n) => repeatSuc(n);
export let add = (a, b) => repeatSucNTimes(a)(b);

// hyper 2 is multiplication
export let plusA = (a) => repeatSucNTimes(a);
export let repeatAddOfA = (a) => applyItNTimes(plusA(a));
export let repeatAddOfAByBTimes = (a) => (b) => repeatAddOfA(a)(b);
export let repeatAddOfAByBTimesToIdentity = (a) => (b) => repeatAddOfAByBTimes(a)(b)(0);
export let mul = (a,b) => repeatAddOfAByBTimesToIdentity(a)(b);

// hyper 3 is exponentiation
export let mulA = (a) => (b) => mul(a,b);
export let repeatMulOfA = (a) => applyItNTimes(mulA(a));
export let repeatMulOfAByBTimes = (a) => (b) => repeatMulOfA(a)(b);
export let repeatMulOfAByBTimesToIdentity = (a) => (b) => repeatMulOfAByBTimes(a)(b)(1);
export let exp = (a,b) => repeatMulOfAByBTimesToIdentity(a)(b);

// hyper 4 is tetration
export let expA = (a) => (b) => exp(a,b);
export let repeatExpOfA = (a) => applyItNTimes(expA(a));
export let repeatExpOfAByBTimes = (a) => (b) => repeatExpOfA(a)(b);
export let repeatExpOfAByBTimesToIdentity = (a) => (b) => repeatExpOfAByBTimes(a)(b)(1);
export let tet = (a,b) => repeatExpOfAByBTimesToIdentity(a)(b);

// hyper 4 is pentation
export let tetA = (a) => (b) => tet(a,b);
export let repeatTetOfA = (a) => applyItNTimes(tetA(a));
export let repeatTetOfAByBTimes = (a) => (b) => repeatTetOfA(a)(b);
export let repeatTetOfAByBTimesToIdentity = (a) => (b) => repeatTetOfAByBTimes(a)(b)(1);
export let pen = (a,b) => repeatTetOfAByBTimesToIdentity(a)(b);
