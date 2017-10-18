"use strict";

const data = [
    [2, 2, +1],
    [1, 4, +1],
    [-2, 5, +1],
    [2, -2, +1],
    [-1, 1, -1],
    [-2, -5, -1],
    [1, -4, -1],
    [-1, -1, -1],
    [0, 3, -1],
    [0, 5, +1],
    [-2, 0, +1],
    [-1, 0, -1],
    [1, 0, -1],
    [2, 0, +1],
    [-2, -3, +1],
    [2, -5, -1]
];

data.forEach(item => {
    //run f(x,y) = 2*x^2+y-4
    const f = 2 * Math.pow(item[0], 2) + item[1] - 4;

    if (f * item[2] <= 0) {
        // check for the sign +*+ = -*- = +
        console.log("your function is wrong", item);
    }
});
