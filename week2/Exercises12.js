function konversiMenit(menit) {
  // you can only write your code here!
	let menitFinal = Math.floor(menit/60);
	let detik = menit % 60;
	let detikPuluhan = Math.floor(detik/10);
	let detikSatuan = detik % 10;
	console.log(menitFinal + ':' + detikPuluhan + detikSatuan);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00