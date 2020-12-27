const testData = ["nice", "awesome", "tof"];

const addTheWordCool = (array) => {
    array.push('cool');
};

const countElementsInArray = (array) => {
    return array.length;
};

const returnFirstElementOfArray = (array) => {
    return array[0];
};

const returnLastElementOfArray = (array) => {
    return array[array.length -1];
};

const removeElementSlice = (array) => {
    // originele array wordt niet aangepast.
    console.log(array.slice(1));
};

const removeElementSplice = (array) => {
    // originele array wordt aangepast.
    array.splice(0, 1);
};

const joinElementsIntoString = (array) => {
    return array.join(' ');
};

addTheWordCool(testData);
console.log(testData);
console.log(countElementsInArray(testData));
console.log(returnFirstElementOfArray(testData));
console.log(returnLastElementOfArray(testData));
removeElementSlice(testData);
removeElementSplice(testData);
console.log(testData);
console.log(joinElementsIntoString(testData));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const joinArrays = (array1, array2) => {
    return array1.concat(array2);
};

const concatArray = joinArrays(array1, array2);
console.log(concatArray);
