// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    return [driversArray[0], driversArray[1]]
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}

// const selectingDrivers = function(){
//     FirstTwoDrivers
// }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplyer(integer, fare){
//     function(fare){
//         return integer * fare
//     }
// }

// const createFareMultiplier = function(fare, integer){
//     return fare * integer
// }

const createFareMultiplier = function(multiply) {
    return function(num){
        return multiply * num
    }
}

// const fareDoubler = function(fare){
//     createFareMultiplier()
//     return fare * 2
// }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, selectDrivers){
    return selectDrivers(arrayOfDrivers)
}