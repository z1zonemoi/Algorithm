function solution(nums) {
    let count = 0;
    const sum = [];
    const underNine = [2,3,5,7]
    
    for(let i = nums.length-1;i>=2;i--){
        for(let j = i-1;j>=1;j--){
            for(let k = j-1;k>=0;k--){
                sum.push(nums[i]+nums[j]+nums[k])
            }
        }
    };
    console.log(sum)
    const isDecimal = (num)=>{
        if(underNine.includes(num)) return true;
        
        if(num%2===0) return false;
        
        for(let j = 3;j<=Math.floor(Math.sqrt(num));j+=2){
            if(num%j===0) return false
        }
        return true
    }
    
    sum.map((num)=>{
        if(isDecimal(num)) count++
    })
    
    return count;
}