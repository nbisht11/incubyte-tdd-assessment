const add = require("../src/stringCalculator");

test("add should return 0 if there is an empty string passed", ()=> {
    const res = add("");
    expect(res).toBe(0);
});

test("add should returns number for a single element in the string", () => {
    expect(add("1")).toBe(1);
    expect(add("2")).toBe(2);
});

test("add should return the sum for a two numbers separated by a comma in the string", () => {
    expect(add("1,2")).toBe(3);
    expect(add("2,3")).toBe(5);
});

test("add should return the sum for n numbers separated by a comma in the string", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("11,12,60")).toBe(83);
});

test("add should return the sum for n numbers separated by a comma or a newline character in the string", () => {
    expect(add("2\n8")).toBe(10);
    expect(add("12,16\n22")).toBe(50);
});