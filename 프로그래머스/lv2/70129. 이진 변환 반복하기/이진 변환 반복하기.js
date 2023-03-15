function solution(s) {
    var answer = [];
    let count = 0;
    let removedZero = 0;
    
    while(s!=='1'){
        count++;
        let splitedString = s.split('0');
        removedZero += splitedString.length - 1;
        let joinedStringLength = splitedString.join('').length
        s = joinedStringLength.toString(2)
    }
    
    answer = [count,removedZero];
    
    return answer;
}