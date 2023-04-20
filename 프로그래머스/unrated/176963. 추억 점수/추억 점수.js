function solution(name, yearning, photo) {
    const answer = photo.map((ph)=>{
        const calculate = ph.map((p)=>{
            const includeName = name.indexOf(p)
            if(includeName !== -1){
                return yearning[includeName]
            }else{
                return 0
            }
        }).reduce((acc,cur)=>acc+cur,0)
        return calculate
    })
    
    return answer;
}