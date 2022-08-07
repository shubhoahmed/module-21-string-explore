function reverseString(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const index = i;
        const elements = text[index];
        reverse = reverse + elements;
    }
    return reverse;
}
const demoText = 'I am a hero student';
const reversed = reverseString(demoText);
console.log(reversed);