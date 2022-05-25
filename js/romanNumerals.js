exports.toRoman = function(num) {
    let finalNum = []
    const romanNumeralObj = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC: 90,
        L : 50,
        XL :40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1,
    }
    
    while(num != 0){
        for(let key in romanNumeralObj){
            if((num/romanNumeralObj[key]) >=1){
                finalNum.push(key)
                num = num - romanNumeralObj[key]
                break
            }
        }
    }
    
    return finalNum.join('')
};