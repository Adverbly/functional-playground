
export let applyItNTimes = (it) => (n) => (val) => {
    for(let i=0; i < n; i++){
        val = it(val)
    }
    return val
};

// hyper 0 is successor
export const suc = a => ++a;

// hyper 1 is addition
export const repeatSuc = applyItNTimes(suc);
export const repeatSucNTimes = (n) => repeatSuc(n);
export const add = (a, b) => repeatSucNTimes(a)(b);

// hyper 2 is multiplication
export const plusA = (a) => repeatSucNTimes(a);
export const repeatAddOfA = (a) => applyItNTimes(plusA(a));
export const repeatAddOfAByBTimes = (a) => (b) => repeatAddOfA(a)(b);
export const repeatAddOfAByBTimesToIdentity = (a) => (b) => repeatAddOfAByBTimes(a)(b)(0);
export const mul = (a,b) => repeatAddOfAByBTimesToIdentity(a)(b);

// hyper 3 is exponentiation
export const mulA = (a) => (b) => mul(a,b);
export const repeatMulOfA = (a) => applyItNTimes(mulA(a));
export const repeatMulOfAByBTimes = (a) => (b) => repeatMulOfA(a)(b);
export const repeatMulOfAByBTimesToIdentity = (a) => (b) => repeatMulOfAByBTimes(a)(b)(1);
export const exp = (a,b) => repeatMulOfAByBTimesToIdentity(a)(b);

// hyper 4 is tetration
export const expA = (a) => (b) => exp(a,b);
export const repeatExpOfA = (a) => applyItNTimes(expA(a));
export const repeatExpOfAByBTimes = (a) => (b) => repeatExpOfA(a)(b);
export const repeatExpOfAByBTimesToIdentity = (a) => (b) => repeatExpOfAByBTimes(a)(b)(1);
export const tet = (a,b) => repeatExpOfAByBTimesToIdentity(a)(b);

// hyper 5 is pentation
export const tetA = (a) => (b) => tet(a,b);
export const repeatTetOfA = (a) => applyItNTimes(tetA(a));
export const repeatTetOfAByBTimes = (a) => (b) => repeatTetOfA(a)(b);
export const repeatTetOfAByBTimesToIdentity = (a) => (b) => repeatTetOfAByBTimes(a)(b)(1);
export const pen = (a,b) => repeatTetOfAByBTimesToIdentity(a)(b);
