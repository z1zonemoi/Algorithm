function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b)
    let sum = d.reduce((acc,crr)=> acc+crr)
    if(sum === budget){
        return d.length
    }
    let count = 0;
    while(budget>=0){
        budget -= d[count]
        count++
    }
    return count-1;
}