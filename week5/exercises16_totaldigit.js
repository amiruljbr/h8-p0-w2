function totalDigitRekursif(angka) {
  // you can only write your code here!
  if (angka <0 || isNaN(angka)){
    return 'Invalid Input, Please Input Number not Negative'
  }
  if (Math.floor(angka/10) ==0){
      return angka;
  } else {
      return angka%10 + totalDigitRekursif(Math.floor(angka/10));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(0));
console.log(totalDigitRekursif(1000));
console.log(totalDigitRekursif('67'))