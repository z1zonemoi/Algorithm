function solution(n, m, section) {
    var answer = 0;
    
    for(let i = 0 ; i !== -1 && section[i] <= n;i){
        answer += 1
        
        const j = section[i] += m -1;
        const k = section.findIndex((v)=>v>j)
        
        i = k
    }
    
    return answer;
}