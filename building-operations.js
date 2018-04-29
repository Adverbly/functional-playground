import {applyItNTimes, suc} from "./axiomatic-operations";

// hyper 1 is addition.
// Addition is a special case so it has it's own implementation. It is a special case because A and B interact
// differently than for the repeated operations. The difference is that for addition, the scope of the A variable is
// more than just the operation itself. A also sort of acts as a starting point from which B iterated succession
// operations take place. This only happens for addition.

// first we pass in the function that we want to apply. We need the function that we pass in to have a signature of
// Int -> Int to get the types to line up inside applyItNTimes. suc ignores the first term so we can call
// with no argument to get the right signature.
export const repeatSuc = applyItNTimes(suc());

// next we make a function that will accept a number of times for our repeating successor function to be called, and
// then pass that on to the curry chain in applyItNTimes
export const repeatSucNTimes = (n) => repeatSuc(n);

// We want to repeat B times, and start off the chain with the value of A
export const add = (a, b) => repeatSucNTimes(b)(a);

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
