const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function sumAll(acc, curr){
    return acc += curr;
}

// Code your solution here
const totalBatteries = batteryBatches.reduce(sumAll,0)