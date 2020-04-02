function cariModus(arr) {
	var modus = -1;
	var countmodus= 1; 
	for (var i=0; i<arr.length; i++){
		var angka=arr[i];
		var count=0;
		for (var j=0; j < arr.length; j++){
			if (angka == arr[j]){
				count += 1;
			}
		}
		if (count > countmodus){
			modus=angka;
			countmodus=count;
		}
	}
	
	if (countmodus == arr.length){
		return -1;
	} else {
		return modus;
	}
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1