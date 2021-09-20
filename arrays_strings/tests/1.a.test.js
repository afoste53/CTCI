const firstNonRepeat = require('../1.a.js');

test("Empty string should return _", ()=> {
    expect(firstNonRepeat("")).toBe("_");
});

test("One letter string should return that letter", ()=> {
    expect(firstNonRepeat("a")).toBe("a");
});

test("String with multiple repeated letters should return _", ()=> {
    expect(firstNonRepeat("aabbccddeeff")).toBe("_");
});

test("String with multiple (non-consecutively) repeated letters should return _", ()=> {
    expect(firstNonRepeat("abcbca")).toBe("_");
});

test("String with only one non-repeated letter should return that letter", ()=> {
    expect(firstNonRepeat("aabcbaaba")).toBe("c");
});

test("String with multiple non-repeated letters should return the first", ()=> {
    expect(firstNonRepeat("aabbbbbcdddeeeeeef")).toBe("c");
});