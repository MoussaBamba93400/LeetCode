
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 
class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
       map<int, int>  map;

       int result = 0;

       for(int i=0; i < nums.size(); i++) {
           map[nums[i]] += 1;
       }

       for(int i=0; i < nums.size(); i++) {
           if(map[nums[i]] == 1) {
               result += nums[i];
           }
       }


    return result;
    }

};

