getAngkaTerbesarKedua = (param) => {
  if (Array.isArray(param)) {
    if (param.length < 2) {
      return "ERROR: Array harus memiliki minimal 2 elemen";
    }

    maxNumber = Math.max(...param); 
    index = param.indexOf(maxNumber); 
    param.splice(index, 1); 
    secondMaxNumber = Math.max(...param); 

    return secondMaxNumber;
  } else if (typeof param == "undefined") {
    return "ERROR: Parameters not entered";
  } else {
    return "ERROR: Invalid data type";
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua("ini string lohh"));
console.log(getAngkaTerbesarKedua());
