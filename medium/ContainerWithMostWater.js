//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//Find two lines that together with the x-axis form a container, such that the container contains the most water.
//Return the maximum amount of water a container can store.
//Notice that you may not slant the container.



//the algorithm i've provide complexity is O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area =0;
     let left =0;
     let right = height.length -1

     while (right > left) {
         let minHeight = height[left] > height[right]? height[right]: height[left];
         area = area > (minHeight * (right - left))? area: minHeight * (right - left);

         if(height[left] < height[right]) {
             left++
         } else {
             right--
         }
     }
    

   return area;
    }

