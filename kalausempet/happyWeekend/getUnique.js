// Bahas bersama buddy / atau kerjakan dahulu lalu bahas dengan buddy okeey?
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function getUnique(votes) {
	var hasil=[];
	for (var i=0; i< votes.length;i++){
		var x=true;
		for (var j=0; j<hasil.length; j++){
			if (hasil[j]==votes[i]){
				x=false;
			}
		}
		if (x) {
			hasil.push(votes[i]);
		}
	}
	return hasil;
}

var femaleArtists = [
    "Billie Eilish",
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Taylor Swift",
    "Lady Gaga",
    "Taylor Swift",
    "Billie Eilish",
    "Selena Gomez"
]
console.log(getUnique(femaleArtists))
/*
[
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Lady Gaga",
]
*/