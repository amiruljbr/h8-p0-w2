function angkaPalindrome(num) {
  // you can only write your code here!
  var x = true;
  var angka = num +1;
  while (x == true){
	  var baliknum='';
	  var angkas = angka.toString();
	  for (var i=0; i< angkas.length; i++){
		  baliknum = angkas[i] + baliknum;
	  }
	  if (baliknum == angkas){
		  return angka;
	  } 
	  angka = angka +1;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(27)); // 33