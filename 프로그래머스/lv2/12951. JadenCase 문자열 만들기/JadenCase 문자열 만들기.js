function solution(s) {
    var answer = '';
    s = s.split(' ')
    s = s.map(el => {
        if(el === ''){
            return '';
        }
        if(Number(el[0])){
            return el[0] + el.substring(1).toLowerCase();
        }
        else{
            return el[0].toUpperCase() + el.substring(1).toLowerCase()
        }
    });
    answer = s.join(' ');
    
    return answer;
}