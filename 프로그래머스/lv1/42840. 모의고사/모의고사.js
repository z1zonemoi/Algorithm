function solution(answers) {
    var answer = [];
    debugger
    const count1 = (ans) =>{
        let count = 0;
        const student1 = [1,2,3,4,5]
        for(let i = 0;i<ans.length;i++){
           const answer1 = i%5;
            if(student1[answer1]===answers[i]) count++
        }
        return count
    }
    const count2 = (ans) =>{
        let count = 0;
        const student2 = [2,1,2,3,2,4,2,5]
        for(let i = 0;i<ans.length;i++){
           const answer2 = i%8;
            if(student2[answer2]===answers[i]) count++
        }
        return count
    }
    const count3 = (ans) =>{
        let count = 0;
        const student3 = [3,3,1,1,2,2,4,4,5,5]
        for(let i = 0;i<ans.length;i++){
           const answer3 = i%10;
            if(student3[answer3]===answers[i]) count++
        }
        return count
    }
    
    const s1 = count1(answers);
    const s2 = count2(answers);
    const s3 = count3(answers);
    
    answer = [s1,s2,s3];
    
    const max = Math.max(...answer);
    
    const result = [];
    
    for(let i = 0;i<3;i++){
        if(max===answer[i]) result.push(i+1)
    }
    
    
    return result;
}