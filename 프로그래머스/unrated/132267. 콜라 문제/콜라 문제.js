function solution(a, b, n) {
    let sum = 0;
    let total = n;
    let rest = 0;
    
    while(total >= a){
        const division = parseInt(String(total / a));
        rest = parseInt(String(total % a));
        sum += (division*b)
        total = (division*b) + rest;
    }
    
    return sum;
}