function solution(n) {
    const underNine = [3,5,7]
    let count = 1;
    
    const isDecimal = (i) => {
        for(let j =3;j<=Math.floor(Math.sqrt(i));j+=2){
            if((i%j)===0) return false;
        }
        return true
    }
    
    for(let i = 3;i<=n;i+=2){
        if(underNine.includes(i)){
            count++;
            continue;
        }
        if(isDecimal(i)) count++
    }
    
    return count;
}