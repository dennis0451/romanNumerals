exports.toRoman = function(num) {
    let output = ""
    const romanNumeralObj = {
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1,
    }
   
    let romanArr = Object.entries(romanNumeralObj)
    let tempNum = num
    let romanAnsw = []
    // for(let i = 0; i < romanArr.length; i++){
    //     if (tempNum % romanArr[i][1] !== 0){
    //         romanAnsw.push(romanArr[i])
    //         tempNum = tempNum - (romanArr[i][1])
    //     } 
    //     console.log(tempNum)
        
    // }
    console.log(parseInt(romanArr[0][1]))
    return romanAnsw
};
exports.toRoman()