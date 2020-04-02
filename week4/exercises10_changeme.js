function changeMe(arr) {
	for (var i=0; i< arr.length; i++){
		var tahunsekarang = 2020; //karena saat ini tahun 2020
		var umur;
		if (tahunsekarang < arr[i][3] || arr[i][3] == undefined || isNaN(arr[i][3]) == true){
			umur = 'Invalid Birth Year';
		} else {
			umur = tahunsekarang - arr[i][3];
		}
		var bio = { firstName: arr[i][0],
						lastName: arr[i][1],
						gender: arr[i][2],
						age: umur
						};
		console.log(i+1 + '. ' + bio.firstName + ' ' + bio.lastName + ':');
		console.log(bio);
	}
}

// TEST CASES
	
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', 2090]]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
changeMe([['Bakti', 'Jabar', 'Male', 2020]]);
