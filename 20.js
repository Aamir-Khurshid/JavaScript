//using switch for multiple case with same output

function usecase(val) {
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Hello";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Hi";
            break;
    }
    return answer;
}

console.log(usecase(3));