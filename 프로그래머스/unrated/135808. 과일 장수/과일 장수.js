function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b)=>b-a);
    
    const bundleApple = [];
    
    for(let i =0;i<score.length-m+1;i+=m){
        bundleApple.push(score.slice(i,i+m))
    }
    
    answer = bundleApple.reduce((acc,cur)=>acc+(cur[m-1]*m),0)
    return answer;
}