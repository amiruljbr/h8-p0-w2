function groupAnimals(animals) {
  // you can only write your code here!
	var abjad = 'abcdefghijklmnopqrstuvwxyz';
	var hasil =[]; //menampung hasil sementara
	var hasilfinal = []; //hasil final
	for (var i=0; i<abjad.length; i++){
		hasil.push([]);
		for (var j=0;j< animals.length; j++){
			if (animals[j][0]==abjad[i]){
				hasil[i].push(animals[j]);
			} 
		}
		if (hasil[i] != false){ // cek jika hasil sementara tidak kosong maka akan ditampung ke hasil final
			hasilfinal.push(hasil[i]);
		}
	}
	return hasilfinal;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]