const lyrics = 'Tmi bondhu kala paKi ami jeno ki. Bosondo Kale tumay bolte pari ni'
const lyricsLowerCase = lyrics.toLowerCase();
const searchString = 'kala';
const searchStringLower = searchString.toLowerCase()
const doesExist = lyricsLowerCase.includes(searchStringLower)

console.log(doesExist);