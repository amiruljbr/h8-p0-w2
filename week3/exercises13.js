function targetTerdekat(arr) {
	var letako=[];
	var letakx=[];
	var jarak=[];
	var countx = 0;
	var counto = 0;
	for (var i=0; i<arr.length; i++){
		if (arr[i]=='x'){
			letakx.push(i);
			countx = countx + 1;
		} else if (arr[i]=='o'){
			letako.push(i);
			counto = counto + 1;
		}
	}
	
	if (countx==0 || counto==0) {
		return 0;
	}
	for ( var j=0; j <counto; j++){
		for ( var i=0; i <countx; i++){
			var jarakxo = Math.abs(letakx[i] - letako[j]);
			jarak.push(jarakxo);
		}
	}
		
	var jarakterdekat=jarak[0]; // inisiasi jarak terdekat
	for ( var i=1; i <jarak.length; i++){
		if (jarak[i] < jarakterdekat){
			jarakterdekat=jarak[i];
		} 
	}
	return jarakterdekat;
}

// TEST CASES o ada satu buah
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// TEST CASES O lebih dari 1
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', 'o', 'x'])); // 1
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x', ' ', 'o'])); // 2
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'o', 'o', 'o', ' '])); // 4
console.log(targetTerdekat([' ', 'x', 'x', ' '])); // 0
console.log(targetTerdekat(['o', ' ', ' ', 'x', 'x', 'x', ' ', 'o'])); // 2
