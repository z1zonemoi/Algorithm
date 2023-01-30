function solution(progresses, speeds) {
    var answer = [];
    
    function deploy(progresses,speeds){
        if(progresses.length===0) return answer;
        
        let count = 0;
        
        while(progresses[0] < 100){
            count += 1;
            progresses[0] += speeds[0];
        };
        
        for(let i = 1; i<progresses.length; i++){
            progresses[i] += (speeds[i] * count);
        };
        const findFirst = element => (element < 100);
        const firstIndex = progresses.findIndex((el)=>el<100);
        if(firstIndex === -1){
            answer.push(progresses.length)
            return answer
        }
        answer.push(firstIndex);
        const sliceProgresses = progresses.slice(firstIndex);
        const sliceSpeeds = speeds.slice(firstIndex);
        
        deploy(sliceProgresses,sliceSpeeds)
    }
    deploy(progresses,speeds)
    return answer;
}