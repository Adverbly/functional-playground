import * as funs from "../building-operations";

test('suc', () => {
    expect(funs.suc(0)).toBe(1);
});

test('suc', () => {
    expect(funs.suc(1)).toBe(2);
});

test('repeatSucNTimes', () => {
    expect(funs.repeatSucNTimes(5)(2)).toBe(7);
});

test('add', () => {
    expect(funs.add(53, 21)).toBe(74);
});

test('plusA', () => {
    expect(funs.plusA(4)(2)).toBe(6);
});

test('repeatAddNTimes', () => {
    expect(funs.repeatAddOfAByBTimes(3)(5)(0)).toBe(15);
});

test('mult', () => {
    expect(funs.mul(7,3)).toBe(21);
});

test('mulA', () => {
    expect(funs.mulA(3)(3)).toBe(9);
});

test('repeatMulOfAByBTimesToIdentity', () => {
    expect(funs.repeatMulOfAByBTimesToIdentity(3)(3)).toBe(27);
});

test('exp', () => {
    expect(funs.exp(3,4)).toBe(81);
});

test('expA', () => {
    expect(funs.expA(2)(5)).toBe(32);
});

test('repeatExpOfAByBTimesToIdentity', () => {
    expect(funs.repeatExpOfAByBTimesToIdentity(5)(2)).toBe(3125);
});

test('repeatExpOfAByBTimesToIdentity', () => {
    expect(funs.repeatExpOfAByBTimesToIdentity(2)(4)).toBe(65536);
});

test('tet', () => {
    expect(funs.tet(4,2)).toBe(256);
});

test('tetA', () => {
    expect(funs.tetA(4)(2)).toBe(256);
});

test('repeatTetOfAByBTimesToIdentity', () => {
    expect(funs.repeatTetOfAByBTimesToIdentity(2)(3)).toBe(65536);
});

test('pen', () => {
    expect(funs.pen(2, 3)).toBe(65536);
});
