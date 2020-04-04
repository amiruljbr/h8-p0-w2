function makanTerusRekursif(waktu) {
  //you can only write your code here!
  if (waktu <0 || isNaN(waktu)){
      return 'Invalid Input, Please Input Number not Negative'
  } 
  
  if (waktu ==0){
      return 0;
  } else  if (waktu <15){
      return 1;
  } else {
      return 1 + makanTerusRekursif(waktu-15);
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
console.log(makanTerusRekursif('bakti')); // Invalid Input, Please Input Number not Negative
console.log(makanTerusRekursif(-19)); // Invalid Input, Please Input Number not Negative