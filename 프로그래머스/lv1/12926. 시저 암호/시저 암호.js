function solution(s, n) {
    var answer = '';
    
    let string = s.split('');
    
    string.map((value)=>{
        if(value === ' ') return answer += ' ';
        
        const ascii = value.charCodeAt(0)
        
        if(ascii<97){
            let caesar = ascii+n
            while(caesar >90){
                caesar -= 26
            }
        let result = String.fromCharCode(caesar)
        return answer += result
        } else{
            let caesar = ascii+n
                while(caesar >122){
                caesar -= 26
             }
            let result = String.fromCharCode(caesar)
            return answer += result  
        }     
    })
    return answer;
}