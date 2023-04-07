function solution(N, stages) {
    const result = [];
    stages.sort((a,b)=>a-b);
    let fail = 0;
    let challenger = stages.length;
    
    for(let i = 1;i<=N;i++){
        const indexOfFailer = stages.lastIndexOf(i)
        let numOfFailer = 0
        if(indexOfFailer !== -1){
            numOfFailer = indexOfFailer + 1 - fail;
            fail = indexOfFailer + 1;   
        }
        result.push({stage:i, failRate: numOfFailer/challenger})
        challenger -= numOfFailer;
    }
    
    result.sort((a,b)=>{
        if(a.failRate > b.failRate) return -1;
        if(a.failRate === b.failRate) return 0;
        if(a.failRate < b.failRate) return 1;
    })
    
    const answer = result.map((stageInfo)=> stageInfo.stage)
    
    return answer;
}