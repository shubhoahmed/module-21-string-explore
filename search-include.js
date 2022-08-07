const lyrics = 'Tmi bondhu kala paKi ami jeno ki. Bosondo Kale tumay bolte pari ni'
const lyricsLowerCase = lyrics.toLowerCase();
const searchString = 'kala';
const searchStringLower = searchString.toLowerCase()
const doesExist = lyricsLowerCase.includes(searchStringLower)

console.log(doesExist);
console.log(lyrics.indexOf('Tmi'));
if (lyrics.indexOf('jeOo') !== -1) {
    console.log('Exists inside the string')
}
else {
    console.log('This is not exits');
}

console.log(lyrics.startsWith('tmia'));
console.log(lyrics.endsWith('ni'));