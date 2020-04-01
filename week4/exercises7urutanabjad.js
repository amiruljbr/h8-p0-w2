function urutkanAbjad(str) {
	var arrstr =[]; //ubah string ke array karena dalam string tidak dapat ditukar value index
	for (var i=0; i<str.length; i++){
		arrstr.push(str[i]);
	}
	
	for (var i=0; i<arrstr.length; i++){
		for ( var j=0; j < arrstr.length-1; j++){
			if (arrstr[j] > arrstr[j+1]){
				var temp =  arrstr[j];
				arrstr[j] = arrstr[j+1];
				arrstr[j+1] = temp;
			}
		}
	}
	
	var hasil='';
	for (var i=0; i<arrstr.length; i++){
		hasil += arrstr[i];
	}
	return hasil;	
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
console.log(urutkanAbjad('zyxwvutsrqponmlkjihgfedcba')); //abbcdefghijklmnopqrstuvwxyz 