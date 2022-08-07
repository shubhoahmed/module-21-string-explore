function reverseWord(sentense) {
    const word = sentense.split(' ');
    const newArr = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const index = i;
        const element = word[index];
        newArr.push(element);
    }
    const revBack = newArr.join(' ');
    return revBack;
}
const title = 'Practice how to reverse word';
const results = reverseWord(title);
console.log(results);