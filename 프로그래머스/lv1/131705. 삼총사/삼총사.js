function solution(number) {
    const students = number.length
    let count = 0;
    
    for(let i=0;i<students;i++){
        for(let j=i+1;j<students;j++){
            for(let k=j+1;k<students;k++){
                if((number[i] + number[j] + number[k]) === 0) count++
            }
        }
    }
    return count;
}