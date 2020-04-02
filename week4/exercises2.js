function fpb(angka1, angka2) {
  // you can only write your code here!
	var pembagi1=[];
	var pembagi2=[];
	var faktorpembagi=[];
	var faktorpembagiterbesar=1; //inisial faktorpembagi
	
	for (var i=1; i<=angka1; i++){
		if (angka1 % i == 0){
			pembagi1.push(i);
		}
	}
	for (var i=1; i<=angka2; i++){
		if (angka2 % i == 0){
			pembagi2.push(i);
		}
	}
	for (var i =0; i<pembagi1.length; i++){
		for (var j=0; j<pembagi2.length; j++){
			if (pembagi1[i]==pembagi2[j]){
				faktorpembagi.push(pembagi1[i]);
			}
		}
	}
	for (var i=0; i<faktorpembagi.length; i++){
		if (faktorpembagi[i] > faktorpembagiterbesar){
			faktorpembagiterbesar=faktorpembagi[i];
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