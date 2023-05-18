function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    let n = 0;
    for(let k = 0;k<=(cards1.length + cards2.length);k++){
        if(cards1[i] === goal[n]){
            n++
            i++
        }else if(cards2[j] === goal[n]){
            n++
            j++
        }if(n === goal.length){
            return "Yes"
        }
    }
    return "No";
}