// 01. kilometerToMeter 
// <===Code started here===

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var getResultMeter = kilometerToMeter(3);
// Console Output
console.log(getResultMeter);

//===Code end here===>


// 02. budgetCalculator
// <===Code started here===

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var TotalPrice = watchPrice + phonePrice + laptopPrice;
    return TotalPrice;
}

var budgetResult = budgetCalculator(3, 2, 1)
// Console Output
console.log(budgetResult);
//===Code end here===>


// 03. hotelCost
// <===Code started here===

function hotelCost(day) {
    var totalPrice = 0;
    if (day <= 10) {
        totalPrice = day * 100;
    }
     else if (day <= 20) {
        var firstTenDayPrice = 10 * 100;
        var secondTenDay = day - 10;
        var secondTenDayPrice = secondTenDay * 80;
        var totalPrice = firstTenDayPrice + secondTenDayPrice;
    } 
    else {
        var firstTenDayPrice = 10 * 100;
        var secondTenDayPrice = 10 * 80;
        var finalDay = day - 20;
        var finalDayPrice = finalDay * 50;
        var totalPrice = firstTenDayPrice + secondTenDayPrice + finalDayPrice;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);

// Console Output
console.log(getHotelCost);
// <===Code end here===


// 04. megaFriend 
// <===Code started here===

function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends Name Here
var getMegaFriend = megaFriend(['Imrul Hasan','Mahadi Hasan','Jihadul Islam']);

// Console Output
console.log(getMegaFriend);
// <===Code end here===