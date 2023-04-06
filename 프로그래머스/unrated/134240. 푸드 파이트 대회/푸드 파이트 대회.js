function solution(food) {
    let leftPlayer = ''
    for(let i =1;i<food.length;i++){
        leftPlayer += String(i).repeat(parseInt(String(food[i]/2)));
    }
    const rightPlayer = [...leftPlayer].reverse().join('');
    
    const answer = leftPlayer + '0' + rightPlayer
    return answer;
}