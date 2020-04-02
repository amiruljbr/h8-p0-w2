function tukarBesarKecil(kalimat) {
	var hurufkecil = 'abcdefghijklmnopqrstuvwxyz';
	var hasil='';
	for (var i=0; i< kalimat.length; i++){
		var tukarbesar = false;
		for (var j=0; j<hurufkecil.length; j++){
			if (kalimat[i] === hurufkecil[j]){
				tukarbesar = true;
			}
		}
		
		if (tukarbesar){
			hasil += kalimat[i].toUpperCase();
		} else {
			hasil += kalimat[i].toLowerCase();
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