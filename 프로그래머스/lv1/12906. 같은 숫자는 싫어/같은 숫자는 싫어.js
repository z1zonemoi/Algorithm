function solution(arr)
{
    var answer = arr.filter((el,idx)=> el !== arr[idx-1])

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}