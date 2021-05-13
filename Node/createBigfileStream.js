const fs = require('fs');
const hrstart = process.hrtime(); 
const file = fs.createWriteStream('./bigfile.txt');

for(i=0; i<=1000000; i++){
file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
');
}

file.end();

const hrend = process.hrtime(hrstart);
console.log("Execution time " + hrend); 

