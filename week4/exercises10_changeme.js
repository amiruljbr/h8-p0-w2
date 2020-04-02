function changeMe(arr) {
	var strResult = '';
	var bioObj = [];
	for ( var i=0; i< arr.length; i++){
		var bio = { firstName: arr[i][0],
						lastName: arr[i][1],
						gender: arr[i][2],
						age: 2019 - arr[i][3] 
						};
		bioObj.push(bio);
		strResult += `${i+1}. ${bioObj[i].firstName} ${bioObj[i].lastName}:
${JSON.stringify(bioObj[i])}
`;
	}
	return strResult;
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
