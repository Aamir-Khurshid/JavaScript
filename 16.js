/* checking difference between
==
===
 */

function myclip(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not Equal";
}

function myclipp(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(myclip("12"));
console.log(myclipp("12"));