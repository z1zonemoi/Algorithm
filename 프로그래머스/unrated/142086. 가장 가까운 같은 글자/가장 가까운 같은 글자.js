function solution(s) {
    const answer = [];
    const prevString = [];
    for(let i =0 ;i<s.length;i++){
        const isSame = prevString.indexOf(s[i])
        answer.push(isSame === -1 ? -1 : isSame + 1);
        prevString.unshift(s[i]);
    }
    return answer;
}