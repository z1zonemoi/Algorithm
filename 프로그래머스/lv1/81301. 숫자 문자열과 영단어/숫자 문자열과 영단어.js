function solution(s) {
    const numberArray = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    for(let i=0;i<numberArray.length;i++){
        const convertWord = numberArray[i];
        const convertNumber = i
        s = s.replaceAll(convertWord,i)
    }
  
    return +s;
}