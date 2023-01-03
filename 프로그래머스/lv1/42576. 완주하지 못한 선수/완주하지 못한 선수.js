function solution(participant, completion) {
    var answer = '';
    let result = {};
    participant.map(name=>{
        if(result[name]){
            return result[name] = result[name] + 1
        }
        return result[name] = 1
    });
    completion.map(name => {
        return result[name] = result[name] - 1;
    });
    for(const key in result){
        if(result[key] === 1) {
            return answer = key;
            break;
        }
    }
    
    
    return answer;
}