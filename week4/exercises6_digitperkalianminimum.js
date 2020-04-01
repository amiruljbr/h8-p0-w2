function digitPerkalianMinimum(angka) {
	var faktorangka = [];	
	for (var i=1; i<=angka; i++){
		if (angka % i == 0){
			faktorangka.push([i , angka/i]);
		}
	}
	//cek apakah terdapat faktorangka
	if (faktorangka == false){
		return 'invalid input'
	}
	//mencari digitperkalianminimum
	var digitminimum = faktorangka[0][0].toString().length +  faktorangka[0][1].toString().length; //inisiasi nilai digit minimum
	for (var i=1; i< faktorangka.length; i++){
		if (digitminimum > faktorangka[i][0].toString().length +  faktorangka[i][1].toString().length){
			digitminimum = faktorangka[i][0].toString().length +  faktorangka[i][1].toString().length;
		}
	}		
	return digitminimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
// TEST case
console.log(digitPerkalianMinimum(100)); // 20*5 =3 digit
console.log(digitPerkalianMinimum(10000)); // 200*50=5 digit
console.log(digitPerkalianMinimum(81)); // 2
console.log(digitPerkalianMinimum(19*19)); // 4
console.log(digitPerkalianMinimum(199*199)); // 6
console.log(digitPerkalianMinimum('dasf')); // invalid input
console.log(digitPerkalianMinimum(-85)); // invalid input
console.log(digitPerkalianMinimum(0)); // invalid input