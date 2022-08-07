function getSmallest(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;

}
const numArray = [26, 54, 87, 13, 10, 08, 69, 75, 81,];
numArray.push(5);
const smallestReturn = getSmallest(numArray);
console.log('The smallest number is: ', smallestReturn);
