const add = require("../src/stringCalculator");

test("add should return 0 if there is an empty string passed", ()=> {
    const res = add("");
    expect(res).toBe(0);
});