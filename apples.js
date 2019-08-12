
function totalNumberSold(applesSoldList) {
	var total = 0
	for(var i = 0; i<applesSoldList.length ;i++){
		total	+= applesSoldList[i].qty
	}
	return total;
}

function totalIncome(applesSoldList) {
	
		
	return applesSoldList.value;
}

function totalIncomeGreenApples(applesSoldList){
	var greenTotal = 0;
	
		greenTotal	+= applesSoldList.value
	
	return greenTotal;
}

function totalProfit(applesSoldList, applePriceMap){
	return 0;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}