function groupAnimals(animals) {
	var hasil =[];
	for (var i=0; i<animals.length; i++){
		var x=true	
		for (var j=0;j< hasil.length; j++){
			if (animals[i][0]==hasil[j][0][0]){
				x=false;
				hasil[j].push(animals[i]);
			} 
		}
		if (x){
			hasil.push([animals[i]]);
		}
	}
	for ( var i=0; i< hasil.length-1; i++){
		if (hasil[i][0][0]>hasil[i+1][0][0]){
			var temp = hasil[i];
			hasil[i]=hasil[i+1];
			hasil[i+1] = temp;
		}
	}
	
	return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]