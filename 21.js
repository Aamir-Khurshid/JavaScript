var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 10:
        case "A":
        case "K":
        case "Q":
        case "J":
            count--;
            break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2);
cc('K');
cc(7);
cc(4);
cc('A')

console.log(cc(4));