var json = {
    "name": {
        "first": "Yosuke",
        "family": process.argv[2]
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};

// Your code here.
var {family} = json.name
var {day} = json.birth;

console.log(family);
console.log(day);