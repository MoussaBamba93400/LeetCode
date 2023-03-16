


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = new Map();
    s = s.split('');
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    

let result = 0;
  for(let i=0; i < s.length; i++) {
     map.get(s[i]) < map.get(s[i+ 1])? result -= map.get(s[i]): result += map.get(s[i])
  } 

  return result
};