// 조합을 통해 숫자 만들기 (맨 앞 0이면 제거)
// 소수인지 확인하는 함수에 넣기
// 소수라면 카운트

function solution(numbers) {
    const answer = new Set();
    
    for(let i = 1;i<=numbers.length;i++){
        const permutation = [...getPermutation([...numbers],i)];
        const primeNumbers = permutation.filter((array)=>{
            const number = +array.join('');
            const isPrimeNumber = isDecimal(number);
            
            return isPrimeNumber
        });
        
        primeNumbers.forEach((array)=>{
            answer.add(+array.join(''))
        })
    }
    
    return answer.size;
}

function getPermutation(array, selectNumber){
    const results = [];
    
    if(selectNumber === 1) return array.map((v)=>[v]);
    
    array.forEach((fixed,index,origin)=>{
        const rest = [...origin.slice(0,index), ...origin.slice(index+1)];
        const permutations = getPermutation(rest, selectNumber-1)
        const attached = permutations.map((permutation)=>[fixed,...permutation]);
        results.push(...attached)
    })
    return results;
}

function isDecimal(number){
    if(number <= 1) return false;
    if(number === 2) return true;
    if(number < 9 && number % 2) return true;
    if(!(number%2)) return false;
    
    for(let i = 3;i<=Math.floor(Math.sqrt(number));i += 2){
        if(!(number%i)) return false;
    }
    return true
}