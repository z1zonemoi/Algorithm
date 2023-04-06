function solution(n, arr1, arr2) {
    const convertArr1 = arr1.map((dec)=>Number(dec.toString(2)));
    const convertArr2 = arr2.map((dec)=>Number(dec.toString(2)));
    
    const mergeArr = convertArr1.map((bin,index)=>String(bin+convertArr2[index]));
    
    const answer = mergeArr.map((stringBin)=>{
        if(stringBin.length !== n){
            const plusZero = n-stringBin.length;
            for(let i = 1 ;i<=plusZero; i++){
                stringBin = '0' + stringBin;
            }
        }
        
        const splitStringBin = stringBin.split('');
        
        const result = splitStringBin.map((str)=>{
            if(Number(str) >= 1) return str = '#';
            if(Number(str) < 1) return str = ' ';
        })
        console.log(result)
        return result.join('')
    })
    
    return answer;
}