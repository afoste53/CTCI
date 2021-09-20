const isUnique = require("../1.1.js");

test("Empty string should return false", () => {
    expect(isUnique("")).toBe(false);
});

test("One repeat character should return false", () => {
    expect(isUnique("abcdeefg")).toBe(false);
});

test("Multiple repeat character should return false", () => {
    expect(isUnique("aabcdfffcdeefg")).toBe(false);
});

test("No repeats should return true", () => {
    expect(isUnique("abcde")).toBe(true);
});