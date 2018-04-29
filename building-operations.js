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
// To multiply, we need a function to repeatedly add by a number(A). The first step is then to get a function that
// adds a number. For example plus3 would add 3 to it's argument. To be generic, plusA would add A. We will then apply
// this function B times to get our answer.

// First we make plusA from what we composed previously. It's signature should be Int -> Int
export const plusA = (a) => repeatSucNTimes(a);
// Next we pass this into applyItNTimes to start off the curry chain
export const repeatAddOfA = (a) => applyItNTimes(plusA(a));
// Next, we make a new chain that includes an argument for the number of times to repeat the plusA operation, and then
// we have everything we need to repeatedly add A
export const repeatAddOfAByBTimes = (a) => (b) => repeatAddOfA(a)(b);
// To consume the chain, we need to pass in a starting point which won't change our final result. Because we are
// repeating addition, the number we can add without changing the result is 0 so that's what we use to start off the
// chain
export const repeatAddOfAByBTimesToIdentity = (a) => (b) => repeatAddOfAByBTimes(a)(b)(0);
// Finally, we wrap it all in a binary form
export const mul = (a,b) => repeatAddOfAByBTimesToIdentity(a)(b);





// hyper 3 is exponentiation
// To exponentiate, we need a function to repeatedly multiply by a number(A). The first step is then to get a function
// that multiplies a number. For example mul3 would multiply 3 to it's argument. To be generic, mulA would multiply by
// A. We will then apply this function B times to get our answer.

// First we make plusA from what we composed previously. It's signature should be Int -> Int
export const mulA = (a) => (b) => mul(a,b);
// Next we pass this into applyItNTimes to start off the curry chain
export const repeatMulOfA = (a) => applyItNTimes(mulA(a));
// Next, we make a new chain that includes an argument for the number of times to repeat the multA operation, and then
// we have everything we need to repeatedly multiply A
export const repeatMulOfAByBTimes = (a) => (b) => repeatMulOfA(a)(b);
// To consume the chain, we need to pass in a starting point which won't change our final result. Because we are
// repeating multiplication, the number we can add without changing the result is 1 so that's what we use to start off the
// chain
export const repeatMulOfAByBTimesToIdentity = (a) => (b) => repeatMulOfAByBTimes(a)(b)(1);
// Finally, we wrap it all in a binary form
export const exp = (a,b) => repeatMulOfAByBTimesToIdentity(a)(b);





// hyper 4 is tetration
// This operation isn't usually taught in school. Imagine how 3^3 is 3*3*3. Order doesn't matter much in this case, but
// the number of 3s does because adding one more 3 to the chain makes the result three times as big. Tetration
// grows much faster. Tetration(3,4) would be 3^(3^(3^3)) The order matters here. This is much larger than ((3^3)^3)^3.
// how much larger? ((3^3)^3)^3 has twelve digits. 3^(3^(3^3)) has 3.6 trillion digits.
// Counting by ones, even Tetration(3,3) would cause a stack overflow. But we can do Tet(2,4). We'll get there by the
// same technique as previous - Just
export const expA = (a) => (b) => exp(a,b);
export const repeatExpOfA = (a) => applyItNTimes(expA(a));
export const repeatExpOfAByBTimes = (a) => (b) => repeatExpOfA(a)(b);
export const repeatExpOfAByBTimesToIdentity = (a) => (b) => repeatExpOfAByBTimes(a)(b)(1);
export const tet = (a,b) => repeatExpOfAByBTimesToIdentity(a)(b);





// hyper 5 is pentation
// if you thought the jump from exponentials to tetration was big, just wait for this. Imagine how quickly the numbers
// grew when we started stacking up the exponential chain. Even just 4 threes stacked up gave us a number with 3.6
// trillion digits. What about if that was pentation instead? Well, imagine a chain not just stacked 4 threes high, but
// with 7 trillion threes stacked on top of each other. Then take that number that you get from that super high stack,
// and then make a new stack with that many threes. That's how big Pent(3,4) is. Once again, pretty amazing that we can
// actually compute Pent(2,3) without a stack overflow.
export const tetA = (a) => (b) => tet(a,b);
export const repeatTetOfA = (a) => applyItNTimes(tetA(a));
export const repeatTetOfAByBTimes = (a) => (b) => repeatTetOfA(a)(b);
export const repeatTetOfAByBTimesToIdentity = (a) => (b) => repeatTetOfAByBTimes(a)(b)(1);
export const pen = (a,b) => repeatTetOfAByBTimesToIdentity(a)(b);





// hyper 6
// Okay we can't do Hex(2,3) anymore without an overflow, but that's okay given how quickly these things are growing.
// Let's try a more modest Hex(2,2) this time. That still ought to be be huge given how crazy these growing functions
// are getting, right? Any guesses on how big that will be? Thoughts? Go ahead take a guess. Did you guess four?. Well
// that's what it is. Not sure why? Thing about why 2 + 2 is the same as 2 * 2 and 2 ^ 2. This is not a coincidence. In
// fact any hyper operation of 2 and 2 is 4. It is like some crazy weird point of stability as everything else runs off
// to infinity. Anyways let's implement it.
export const penA = (a) => (b) => pen(a,b);
export const repeatPenOfA = (a) => applyItNTimes(penA(a));
export const repeatPenOfAByBTimes = (a) => (b) => repeatPenOfA(a)(b);
export const repeatPenOfAByBTimesToIdentity = (a) => (b) => repeatPenOfAByBTimes(a)(b)(1);
export const hex = (a,b) => repeatPenOfAByBTimesToIdentity(a)(b);
