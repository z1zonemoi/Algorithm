function solution(k, score) {
    const answer = [];
    const sortedScore = [];
    for(let i =0 ;i<score.length; i++){
        sortedScore.push(score[i]);
        sortedScore.sort((a,b)=>b-a);
        if(sortedScore.length<=k){
            answer.push(sortedScore.at(-1))
        }else{
            answer.push(sortedScore[k-1])
        }
    }
    
    return answer;
}