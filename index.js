class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
    const n = nums.length;
    const output = new Array(n).fill(1);
    
    // Compute left products and accumulate in output array
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;  // Equivalent to: output[i] = output[i] * leftProduct;
        leftProduct *= nums[i];    // Update leftProduct for the next iteration
    }
    
    // Compute right products and accumulate in output array
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct; // Equivalent to: output[i] = output[i] * rightProduct;
        rightProduct *= nums[i];   // Update rightProduct for the next iteration
    }
    
    return output;
}



}
