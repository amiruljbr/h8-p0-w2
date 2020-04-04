function changeVocals (str) {
    //code di sini
    hasil = '';
    for (var i=0; i<str.length; i++){
        switch(str[i]){
            case 'a':
                hasil += 'b';
                break;
            case 'i':
                hasil += 'j';
                break;
            case 'u':
                hasil += 'v';
                break;
            case 'e':
                hasil += 'f';
                break;
            case 'o':
                hasil += 'p';
                break;
            case 'A':
                hasil += 'B';
                break;
            case 'I':
                hasil += 'J';
                break;
            case 'U':
                hasil += 'V';
                break;
            case 'E':
                hasil += 'F';
                break;
            case 'O':
                hasil += 'P';
                break;
            default:
                hasil += str[i];
        }
    }
    return hasil;
}
  
function reverseWord (str) {
    //code di sini
    var hasil = '';
    for (var i=0; i<str.length; i++){
        hasil = str[i]+ hasil;
    }
    return hasil;
}
  
function setLowerUpperCase (str) {
    //code di sini
    var strlower = str.toLowerCase();
    var hasil='';
    for (var i=0; i<str.length; i++){
        if (str[i]===strlower[i]){
            hasil += str[i].toUpperCase();
        } else {
            hasil += strlower[i];
        }
    }
    return hasil;
}
  
function removeSpaces (str) {
    //code di sini
    var hasil = ' ';
    for (var i=0; i<str.length; i++){
        if (str[i] != ' '){
            hasil += str[i]        
        }
    }
    return hasil;
}
  
function passwordGenerator (name) {
    //code di sini
    if (name.length <5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var change = changeVocals(name);
    var gantikata = reverseWord(change);
    var setLowUp = setLowerUpperCase(gantikata);
    var final = removeSpaces(setLowUp);
    return final;
}
  
console.log(passwordGenerator('    Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Di   mitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alex   ei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'