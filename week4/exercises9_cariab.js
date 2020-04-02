function checkAB(kalimat) {
	letaka = [];
	letakb = [];
	for (var i=0; i< kalimat.length; i++){
		if (kalimat[i] == 'a'){
			letaka.push(i);
		} else if (kalimat[i] == 'b'){
			letakb.push(i);
		}
	}
	//return letakb;
	
	if (letaka.length == 0 || letakb.length == 0){
		return false;
	}
	
	for (var i=0; i< letaka.length; i++){
		for (var j=0; j< letakb.length; j++){
			if (Math.abs(letaka[i]-letakb[j]) === 4){
				return true;
			}
		}
	}
	return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false