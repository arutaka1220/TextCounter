const fs = require("fs");
const path = process.argv[2];

/**
 * @type { string }
 */
let file = fs.readFileSync(path, "utf-8");

file = file.replace("\n", "");

const splited = file.split("\n");
const map = new Map();

for(let text of splited) {
    if(map.has(text)) map.set(text, map.get(text)+1);
    else map.set(text, 1);
}

map.forEach((v, k) => {
    console.log(`${k}(${v})`);
});