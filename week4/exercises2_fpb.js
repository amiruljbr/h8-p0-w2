function fpb(angka1, angka2) {
  // you can only write your code here!
	var faktorpembagiterbesar = 1; //initial value
	var iterator =angka1; //maksimal untuk looping FPB, karena FPB maksimum adalah nilai dari value minimun diantara dua angka
	if (angka1>angka2){
		iterator=angka2;
	}
	for (var i=2; i<=iterator; i++){
		if (angka1 % i == 0 && angka2 % i ==0){
			faktorpembagiterbesar=i;
		}
	}
	return faktorpembagiterbesar;	
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 1000)); // 50
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(0, 36)); // 1
console.log(fpb(-6, 23)); // 1