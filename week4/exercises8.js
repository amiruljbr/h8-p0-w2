function pasanganTerbesar(num) {
	str_num = num.toString(); 
	var angkaterbesar = parseInt(str_num[0]+str_num[1]); //inisial value angkaterbesar
	for (var i=1; i<str_num.length-1; i++){
		if (parseInt(str_num[i]+str_num[i+1])> angkaterbesar){
			angkaterbesar= parseInt(str_num[i]+str_num[i+1]);
		}  
	}
	return angkaterbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99