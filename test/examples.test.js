import * as funs from "../examples";
import {applyItNTimes, suc} from "../axiomatic-operations";

test('add', () => {
    expect(funs.add(53, 21)).toBe(74);
});

test('multiply', () => {
    expect(funs.multiply(7,3)).toBe(21);
});

test('multiply', () => {
    expect(funs.multiply(3,5)).toBe(15);
});

test('exp', () => {
    expect(funs.exp(3,4)).toBe(81);
});
test('asdf', () => {
    const repeatSuc = applyItNTimes(suc());
    const add = (a, b) => repeatSuc(a)(b)
    expect(add(3,42)).toBe(45)
});