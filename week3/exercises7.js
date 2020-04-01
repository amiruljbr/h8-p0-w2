function hitungJumlahKata(kalimat) {
  // you can only write your code here!
	var kata = [];
	var kata1='';
	for (var i=0;i<kalimat.length;i++){
		if (kalimat[i]!=' '){
			kata1 = kata1 + kalimat[i];
			if (i==kalimat.length-1){
				kata.push(kata1);
			}
		} else if (kata1 != '' && kata1 !=' ') { //validasi agar kata1 tidak berisi kosong dan tidak berisi spasi
			kata.push(kata1);
			kata1 ='';
		}
	}
	console.log(kata);
	return kata.length;
}

// TEST CASES
console.log(hitungJumlahKata(' I have   a dream  ')); // 4
console.log(hitungJumlahKata('Never  eat shredded   wheat or cake')); // 6
console.log(hitungJumlahKata('   A  song to  sing')); // 4
console.log(hitungJumlahKata('I   ')); // 1
console.log(hitungJumlahKata('I  believe   I can code    ')); // 5