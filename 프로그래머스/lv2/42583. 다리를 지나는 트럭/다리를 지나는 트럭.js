function solution(bridge_length, weight, truck_weights) {
    const onBridge = new Array(bridge_length-1).fill(0);
    let totalWeight = truck_weights[0];
    let count = 1;
    onBridge.push(truck_weights.shift())
    //toatl 도 0 length도 0 이 아니면
    while(!((totalWeight === 0) && (truck_weights.length === 0))){
        count++
        totalWeight-=onBridge.shift();
        
        if(truck_weights[0]&&(totalWeight+truck_weights[0]) <= weight){
            totalWeight += truck_weights[0]
            onBridge.push(truck_weights.shift())
            
        }else{
            onBridge.push(0)
        }
    }
    
    return count;
}