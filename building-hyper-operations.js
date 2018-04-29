import {add, applyItNTimes, mul, suc} from "./building-operations";

export let hyper = (n, a, b) => {
    if(n===0){
        return suc(b)
    }
    if(n===1) {
        return add(a, b)
    }
    if(n===2) {
        return mul(a, b)
    }
    let binary = mul;
    const currentCurriedFactory = (curr) => (a) => (b) => curr(a,b);
    for(let i = 0; i< n-2; i++){
        const currA = currentCurriedFactory(binary);
        const repeatCurrOfA = (a) => applyItNTimes(currA(a));
        const repeatCurrOfAByBTimes = (a) => (b) => repeatCurrOfA(a)(b);
        const repeatCurrOfAByBTimesToIdentity = (a) => (b) => repeatCurrOfAByBTimes(a)(b)(1);
        binary = (a,b) => repeatCurrOfAByBTimesToIdentity(a)(b);
    }
    return binary(a,b)
};