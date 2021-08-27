"use strict";
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add two Numbers
 * @param a first number
 * @param b second number
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
// Run the program
(async () => {
    console.log(await addNumbers(3, 4));
})();
