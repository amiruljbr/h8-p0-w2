function ubahHuruf(kata) {
  // you can only write your code here!
	var abjad = 'abcdefghijklmnopqrstuvwxyza';
	var hasilkata = '';
	for (var i=0; i< kata.length; i++){
		for (var j=0; j< abjad.length-1; j++){
			if (kata[i] == abjad[j]){
				hasilkata = hasilkata + abjad[j+1];
			}
		}
	}
	return hasilkata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zebra')); // afcsb
console.log(ubahHuruf('zabcdefghijklmnopqrstuvwxyzabcde')); // abcdefghijklmnopqrstuvwxyzabcdef