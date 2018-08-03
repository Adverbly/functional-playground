import * as funs from "../building-hyper-operations";

test('h0', () => {
    expect(funs.hyper(0,13,17)).toBe(18);
});

test('h1', () => {
    expect(funs.hyper(1,25,13)).toBe(38);
});

test('h1', () => {
    expect(funs.hyper(1,1,1)).toBe(2);
});

test('h2', () => {
    expect(funs.hyper(2,5,3)).toBe(15);
});

test('h3', () => {
    expect(funs.hyper(3,3,4)).toBe(81);
});

test('h4', () => {
    expect(funs.hyper(4,4,2)).toBe(256);
});

test('h4', () => {
    expect(funs.hyper(4,2,4)).toBe(65536);
});

test('h5', () => {
    expect(funs.hyper(5,2,3)).toBe(65536);
});

test('h40', () => {
    expect(funs.hyper(40,2,2)).toBe(4);
});
