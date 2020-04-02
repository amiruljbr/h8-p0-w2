function changeMe(arr) {
	for (var i=0; i< arr.length; i++){
		var bio = { firstName: arr[i][0],
						lastName: arr[i][1],
						gender: arr[i][2],
						age: 2019 - arr[i][3] 
						};
		console.log(i+1 + '. ' + bio.firstName + ' ' + bio.lastName + ':');
		console.log(bio);
	}
}

// TEST CASES
	
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
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
