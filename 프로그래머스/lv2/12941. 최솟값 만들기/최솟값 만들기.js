function solution(A,B){
    var answer = 0;
    
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    answer = A.reduce((acc,cur,index)=>acc+cur*B[index],0)

    return answer;
}