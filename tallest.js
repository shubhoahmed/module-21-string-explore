function maxInArray(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}
const height = [167, 222, 136, 190, 241, 780, 321];
const talest = maxInArray(height);
console.log('Tallest person is:', talest);