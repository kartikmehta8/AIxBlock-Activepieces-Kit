const { add, subtract, multiply, divide } = require("./mathUtils");

test("Addition works correctly", () => {
    // ✅ Should pass.
    expect(add(2, 3)).toBe(5); 
});

test("Subtraction works correctly", () => {
    // ✅ Should pass.
    expect(subtract(10, 5)).toBe(5); 
});

test("Multiplication works correctly", () => {
    // ✅ Should pass.
    expect(multiply(4, 5)).toBe(20); 
});

test("Division by non-zero number", () => {
    // ✅ Should pass.
    expect(divide(10, 2)).toBe(5); 
});

test("Intentional Failure", () => {
    // ❌ This test will FAIL.
    expect(true).toBe(false); 
});
