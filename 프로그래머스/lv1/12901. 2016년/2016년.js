function solution(a, b) {
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const day30 = [4,6,9,11];
    const day31 = [1,3,5,7,8,10,12];
    
    let days = 0;
    let count = 1;
    
    while(count < a){
        if(count === 2)  days += 29;
        if(day31.includes(count))  days += 31;
        if(day30.includes(count))  days += 30;
        count++
    }
    
    days += b;
    
    const rest = days % 7;
    
    
    return rest ? week[rest-1] : "THU"
}