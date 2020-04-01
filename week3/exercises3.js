function dataHandling(arr){
	var strResult='';
	for (var i=0; i < arr.length; i++){
		for (var j=0; j < arr[i].length; j++){
			if (j==0){
				strResult += 'Nomor ID: ' + arr[i][j] + '\n';
			} else if (j==1) {
				strResult += 'Nama Lengkap: ' + arr[i][j] + '\n';
			} else if (j==2) {
				strResult += `TTL: ${arr[i][j]} ${arr[i][j+1]}
`;
			} else if (j==4 && i!=arr.length-1) {
				strResult += 'Hobi: ' + arr[i][j] + '\n' + '\n';
			} else if (j==4 && i==arr.length-1) {
				strResult += 'Hobi: ' + arr[i][j];
			}
		}
	}
	return strResult;
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

console.log (dataHandling(input));
