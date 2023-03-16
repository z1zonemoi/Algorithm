function solution(priorities, location) {
    let count = 0;
    const print = [];
    
    while(location !== -1){
        if(location === 0){
            if(Math.max(...priorities) === priorities[0]){
                print.push(priorities[0])
                break;
            }else{
                priorities.push(priorities[0]);
                priorities.shift();
                location = priorities.length-1;
            }
        }else{
            if(Math.max(...priorities) === priorities[0]){
                priorities.shift();
                print.push(priorities[0])
                count++
            }else{
                priorities.push(priorities[0]);
                priorities.shift();
            } 
            location -= 1;
        }
    }
    
    
    return print.length;
}