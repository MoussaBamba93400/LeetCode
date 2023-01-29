// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let obj = {}
    
    function order(str) {
     let origin = str;   
    str = str.split('').map((elem, i) => elem.charCodeAt(0)).sort((first, sec) => first - sec );
    let result = str.map(elem => String.fromCharCode(elem)).join('');
    if(obj[result]) {
        obj[result].push(origin)
    } else {
        obj[result] = [origin];
    }
    return result
    }
    
    
    strs.map(elem => order(elem))
    for(const val in obj) {
        result.push(obj[val])
    }
    
    
    return result;
    }
    
    
    
    
    