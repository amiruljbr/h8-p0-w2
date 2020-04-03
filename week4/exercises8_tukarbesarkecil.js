function tukarBesarKecil(kalimat) {
	var kalimatKecil = kalimat.toLowerCase();
	var hasil='';
	for (var i=0; i<kalimatKecil.length; i++){
		tukarbesar = false;
		if (kalimat[i] === kalimatKecil[i]){
			tukarbesar = true;			
		}
		
		if (tukarbesar){
			hasil += kalimatKecil[i].toUpperCase();
		} else {
			hasil += kalimatKecil[i];
		}
	}
	return hasil;			
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"