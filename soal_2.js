checkTypeNumber =(givenNumber)=>{
    if (typeof givenNumber == 'number') {
        if (givenNumber % 2 == 0) {
            return "GENAP"
        } else {
            return "GANJIL"
        }
    } else if (typeof givenNumber == 'undefined'){
        return "ERROR: Bro where is the parameter?"
    } else {
        return "ERROR: Invalid data type"
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("13"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())