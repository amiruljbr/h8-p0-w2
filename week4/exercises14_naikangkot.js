function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	//your code here
	var hasil=[];
	for (var i=0; i<arrPenumpang.length; i++){
		var penumpangObj ={};
		penumpangObj.penumpang = arrPenumpang[i][0];
		penumpangObj.naikDari = arrPenumpang[i][1];
		penumpangObj.tujuan = arrPenumpang[i][2];
		var posisinaik;
		var posisiturun;
		for (var j=0; j<rute.length;j++){
			if (arrPenumpang[i][1] == rute[j]){
				posisinaik = j;
			}
			if (arrPenumpang[i][2] == rute[j]){
				posisiturun = j;
			}
		}
		penumpangObj.bayar = 2000*Math.abs(posisiturun-posisinaik);
		hasil.push(penumpangObj);
	}
	return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'F', 'A'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]