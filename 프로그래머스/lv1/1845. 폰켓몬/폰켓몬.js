function solution(nums) {
    const middle = nums.length/2
    
    const filteredObject = new Set(nums);
    const filteredArray = [...filteredObject];
    
    const filteredArrayLength = filteredArray.length
    
    
    return middle >= filteredArrayLength ? filteredArrayLength : middle;
    
}