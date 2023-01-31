function solution(s){
    var answer = true;
    
    if((s[0] === ')') || (s.at(-1) === '(')) return false;

    
    let openBracket = 0;
    
    for(let i =0;i<s.length;i++){
        if(s[i]==='('){
            openBracket++
        } else if((openBracket===0)&&(s[i]===')')){
            return false;
        }else {
            openBracket--;
        }
    }
    
    if(openBracket !== 0) return false
    
    return answer;
}