// Add your code here
function lyricsGenerator(array) {
    let sentence = {
        0: "Boom ",
        1: "Drop the base ",
        2: "!!!Break the base!!! "
    }

    let add = 0;
    let lyrics = "";

    let dj = array.map(function(value) {
        lyrics += sentence[value];

        (value == 1) ? add += 1 : add = 0;

        if (add == 3) {
            lyrics += sentence[2];
        }
    });    

    return lyrics;
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))