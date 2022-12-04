/* Golf Game
Strokes              Return
1                    "Hole in one!"
<= par-2             "Eagle"
par - 1              "Birdie"
par                  "Par"
par + 1              "Bogey"
par + 2              "Double Bogey"
>= par + 3           "Go Home!"
*/

function golfcheck(par, strokes) {
    if (strokes == 1) {
        return "Hole in one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!";
    }
}

console.log(golfcheck(1, 6));