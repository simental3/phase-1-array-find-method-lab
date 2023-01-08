// Array Find Methods Lab Notes

// Global Variables
const record = [
    { year: "1967", result: "N/A" },
    { year: "1968", result: "N/A" },
    { year: "1969", result: "N/A" },
    { year: "1970", result: "N/A" },
    { year: "1971", result: "N/A" },
    { year: "1972", result: "N/A" },
    { year: "1973", result: "N/A" },
    { year: "1974", result: "N/A" },
    { year: "1975", result: "N/A" },
    { year: "1976", result: "N/A" },
    { year: "1977", result: "N/A" },
    { year: "1978", result: "L" },
    { year: "1979", result: "N/A" },
    { year: "1980", result: "N/A" },
    { year: "1981", result: "N/A" },
    { year: "1982", result: "N/A" },
    { year: "1983", result: "N/A" },
    { year: "1984", result: "N/A" },
    { year: "1985", result: "N/A" },
    { year: "1986", result: "N/A" },
    { year: "1987", result: "L" },
    { year: "1988", result: "L" },
    { year: "1989", result: "N/A" },
    { year: "1990", result: "L" },
    { year: "1991", result: "N/A" },
    { year: "1992", result: "N/A" },
    { year: "1993", result: "N/A" },
    { year: "1994", result: "N/A" },
    { year: "1995", result: "N/A" },
    { year: "1996", result: "N/A" },
    { year: "1997", result: "N/A" },
    { year: "1998", result: "W" },
    { year: "1999", result: "W" },
    { year: "2000", result: "N/A" },
    { year: "2001", result: "N/A" },
    { year: "2002", result: "N/A" },
    { year: "2003", result: "N/A" },
    { year: "2004", result: "N/A" },
    { year: "2005", result: "N/A" },
    { year: "2006", result: "N/A" },
    { year: "2007", result: "N/A" },
    { year: "2008", result: "N/A" },
    { year: "2009", result: "N/A" },
    { year: "2010", result: "N/A" },
    { year: "2011", result: "N/A" },
    { year: "2012", result: "N/A" },
    { year: "2013", result: "N/A" },
    { year: "2014", result: "L" },
    { year: "2015", result: "N/A" },
    { year: "2016", result: "W" },
    { year: "2017", result: "N/A" },
    { year: "2018", result: "N/A" },
    { year: "2019", result: "N/A" },
    { year: "2020", result: "N/A" },
    { year: "2021", result: "N/A" },
    { year: "2022", result: "N/A" },
]

// function superbowlWin (array) {
//     if (array.result === "W") {
//         return array.year;
//     } else {
//         return undefined;
//     }
// }


superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );      // => Arrow function is used inside the array.find()
    return !!result ? result.year : undefined;                          // => Return ternary operator (instead of If...Else statement)
}

// Constant Declaration:
const season = function (array) {
    (array.result === "W");
}
// Arrow function:
season = (array) => (array.result === "W");
// superbowlWin(record);

record.find(superbowlWin);
// => {year: '1998', result: 'W'}

record.find(superbowlWin).year;
// => 1988

// Write a function called superbowlWin() in index.js:
// - The function should receive 1 argument, an Array of JavaScript Objects
// - Each object has two properties: year and result
// - It should use find() to test each Object to see if the result is "W" — a win!
// - It should return the year when the win occurred (if it occurred at all!)
// - If no win is found, it should return, sadly, undefined

 
// Callback example:
function useCallback(cb) {
    cb("Callback function worked");
}
// useCallback(value => console.log(value));
// LOG: "Callback function worked"

function takesCallback(cb) {
    cb("Practice, practice, practice");

}
// takesCallback(value => console.log(value));
// LOG: "Practice, practice, practice"


// If Else Example:
// const favoriteTeam = 'Lakers';

// let team;

// if (favoriteTeam === 'Lakers') {
//     team = true;
// } else {
//     team = false;
// }
// => true

// team;
// => true


// Ternary Expression Example:
const favoriteTeam = 'Bulls';
const team = favoriteTeam === 'Lakers' ? true : false;
// => false

team; 
// =>  false


function superbowlWin (array) {
    if (array.result === "W") {
        return array.year;
    } else {
        return undefined;
    }
}

record.find(superbowlWin).year;
// => 1988