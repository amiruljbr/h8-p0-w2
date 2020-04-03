function shoppingTime(memberId, money) {
	if (memberId == '' || memberId == false || memberId == undefined){
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	}
	if (money <= 50000){
		return 'Mohon maaf, uang tidak cukup';
	}
	var changeMoney = money;
	var listBarang = [
					{nama:	'Sepatu', brand: 'Stacattu',	harga: 1500000},
                    {nama:	'Baju' ,brand: 'Zoro',	harga: 500000},
                    {nama:	'Baju', brand: 'H&N',	harga: 250000},
                    {nama:	'Sepatu', brand: 'Stacattu',	harga: 175000},
                    {nama:	'Casing', brand: 'Handphone',	harga: 50000}
	];
	
	var listBeli = [];
	for (var i=0; i< listBarang.length ; i++){
		if (changeMoney >= listBarang[i].harga){
			listBeli.push(listBarang[i].nama + ' ' +listBarang[i].brand);
			changeMoney -= listBarang[i].harga;
		}
	}
	
	var shopping ={
		memberId: memberId,
		money: money,
		listPurchased: listBeli,
		changeMoney: changeMoney
	}
	
	return shopping;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2479000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime ()); ////Mohon maaf, toko X hanya berlaku untuk member saja