import * as funs from "../non-primitive-recursive-attempt-2";

test('successor', () => {
    expect(funs.inc(0)).toBe(1);
});

test('successor', () => {
    expect(funs.inc(1)).toBe(2);
});

test('currySuc', () => {
    expect(funs.currySuc(3)(6)).toBe(7);
});

test('suc', () => {
    expect(funs.suc(3,5)).toBe(6);
});

test('suc', () => {
    expect(funs.suc(0,0)).toBe(1);
});

test('curryAdd', () => {
    expect(funs.curryAdd(3)(4)).toBe(7);
});

test('add', () => {
    expect(funs.add(53, 21)).toBe(74);
});

test('add', () => {
    expect(funs.add(0, 0)).toBe(0);
});

test('curryMul', () => {
    expect(funs.curryMul(3)(5)(0)).toBe(15);
});

test('mult', () => {
    expect(funs.mul(7,3)).toBe(21);
});

test('curryExp', () => {
    expect(funs.curryExp(3)(3)(0)).toBe(27);
});

test('mult', () => {
    expect(funs.mul(7,3)).toBe(21);
});