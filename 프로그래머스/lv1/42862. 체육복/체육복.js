function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    realLost = lost.filter((el)=>!reserve.includes(el))
    realReserve = reserve.filter((el)=>!lost.includes(el))
    realLost.sort((a,b)=>a-b)
    answer += lost.length - realLost.length
    
    for(let i =0;i<realLost.length;i++){
        if(realReserve.length === 0) return answer
        if(realReserve.includes(realLost[i]-1)){
            answer ++;
            realReserve = realReserve.filter((el)=>el!==(realLost[i]-1))
        }else if(realReserve.includes(realLost[i]+1)){
            answer ++;
            realReserve = realReserve.filter((el)=>el!==(realLost[i]+1))
        }
    }
    
    
    
    return answer;
}