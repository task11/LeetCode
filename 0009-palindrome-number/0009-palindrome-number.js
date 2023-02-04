/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseNumber = String(x).split('').reverse().join('')
    return reverseNumber === String(x)
};