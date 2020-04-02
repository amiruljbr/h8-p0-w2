//input "hello world!"
//output

function balikString (kata){
	var hasil ='';
	for(var i=kata.length-1 ; i>=0; i--){
		hasil=kata[i]+hasil;
	}
	return hasil;
}

console.log(balikString('bakti'));