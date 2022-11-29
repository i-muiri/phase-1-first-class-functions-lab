// Code your solution in this file!
const drivers = ['Edwin', 'Ian', 'Kelvin', 'Titus'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

const createFareMultiplier = (fareMultiplier) => {
    return function (fare) {
       return fareMultiplier * fare;
    };
}

const fareDoubler = (fare) => { return fare * 2;
}

const fareTripler = (fare) => { return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers) 
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers) 
}