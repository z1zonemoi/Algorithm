function solution(t, p) {
    let count = 0;
    const lengthP = p.length;
    const convertNumberP = +p;
    
    for(let i =0;i<t.length;i++){
        const compareT = t.slice(i,i+lengthP);
        
        if(compareT.length !== lengthP) break;
        if(+compareT<=convertNumberP) count++
    }
    
    return count;
}