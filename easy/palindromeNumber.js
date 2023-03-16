/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x= x.toString().split('');
    
    let result = 0;
    if(x.length == 2) {
        result = x[0] == x[1]
    } else if(x.length % 2 !== 0) {
        let mid = Math.floor(x.length / 2);
        for(let i=0; i < mid; i++) {
            if(x[i] == x[mid - (i - mid)]) {
                result = true
            } else {
                return false
            }
        }
    } else if(x.length % 2 == 0) {
        let mid = Math.floor(x.length / 2);
        for(let i=0; i < mid; i++) {
            if(x[i] == x[ (x.length - 1) - i]) {
                result = true
            } else {
                return false
            }
        }
    } 

    if(x.length == 1) {
        result = true
    }

    return result
};