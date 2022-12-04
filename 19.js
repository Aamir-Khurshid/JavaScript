//use of switch

function usecase(val) {
    var val;
    var answer;
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

        default:
            break;
    }
    return answer;
}

console.log(usecase(1));