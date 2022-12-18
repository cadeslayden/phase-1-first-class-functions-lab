const returnFirstTwoDrivers = function([name1, name2, name3, name4]){
    return [name1, name2]
}
const returnLastTwoDrivers = function([name1, name2, name3, name4]){
    return [name3, name4]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue){
    return function(value){
        return multiplyValue * value
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, driversToReturn){
    return driversToReturn(drivers)
}

