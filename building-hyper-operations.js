import {add, mul} from "./building-operations";
import {applyItNTimes, suc} from "./axiomatic-operations";

export let hyper = (n, a, b) => {
    // There may be a way to extend the symmetry in the operation generation for n=1,0 but I haven't stumbled on it yet.
    if (n === 0) {
        return suc(a)(b)
    }
    if (n === 1) {
        return add(a, b)
    }
    n--;
    n--;
    return hyperNFromMul(n, a, b);
};

export let hyperNFromMul = (n, a, b) => {
    // this is a factory that is needed to bind the current operation in a closure.
    // Without it, the binary operations will have conflicting scopes
    const currentCurriedFactory = (op) => (a) => (b) => op(a, b);

    // here we basically repeat the process that we used when generating operations, reusing the applyItNTimes method
    // The difference is that rather than building a pipe for numbers to go through, we are instead building a pipe for
    // operations to go through. Once consumed, the pipe will output the final binary operation that we need.
    // The type signature that we need to pass to applyItNTimes for this to work is A, B -> A, B
    let hyper = applyItNTimes(
        (binary) => {
            const opA = currentCurriedFactory(binary);
            const repeatOpOfA = (a) => applyItNTimes(opA(a));
            const repeatOpOfAByBTimes = (a) => (b) => repeatOpOfA(a)(b);
            const repeatOpOfAByBTimesToIdentity = (a) => (b) => repeatOpOfAByBTimes(a)(b)(1);
            return (a, b) => repeatOpOfAByBTimesToIdentity(a)(b);
        }
    );

    // we supply the number of iterations to make. Each iteration will build the next hyper operation.
    const hyperN = hyper(n);

    // Just like we had to provide the identity when getting started with our applyItNTimes, we also need to supply the
    // starting point for the hyper operation. In this case the starting point is an operation(mul) rather than a number
    const hyperNFromMul = hyperN(mul);
    return hyperNFromMul(a, b)
};