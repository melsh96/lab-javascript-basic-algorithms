// Iteration 1: Names and Input
// 

let hacker1 = {
    name : "Mélo"
};

console.log(`"The driver's name is ${hacker1.name}"`);

let hacker2 = {
    name : "Mélodie"
}

console.log("The navigator's name is" + " " + hacker2.name);

// Iteration 2: Conditionals

//let longestName;

if (hacker1.name.length > hacker2.name.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.name.length} characters."`);
} else if (hacker1.name.length < hacker2.name.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.name.length} characters."`);
} else if (hacker1.name.length === hacker2.name.length){
    console.log(`"Wow, you both have equally long names, ${hacker2.name.length} characters!"`);
}

// Iteration 3: Loops

let str = '';
let strRev = '';

//console.log(hacker1.name.toUpperCase().split('').join(' '));

for(let i = 0; i < hacker1.name.length; i++) {
    str += hacker1.name[i].toUpperCase() + ' ';
}

console.log(str);

for(let i = 0; i < hacker2.name.length; i++) {
    strRev = hacker2.name.split('').reverse().join('');
}

console.log(strRev);
let casParticulier = false;

for(let i = 0; i < Math.min(hacker1.name.length, hacker2.name.length); i++) {
    if (hacker1.name.charCodeAt(i) > hacker2.name.charCodeAt(i)) {
        console.log("The driver's name goes first.");
        casParticulier = true;
        break;
    } else if (hacker1.name.charCodeAt(i) < hacker2.name.charCodeAt(i)) {
        console.log("Yo, the navigator goes first definitely.");
        casParticulier = true;

        break;
    } else if (hacker1.name === hacker2.name) {
        console.log("What?! You both have the same name?");
        casParticulier = true;

        break;
    }
}

if (!casParticulier) {
    if (hacker1.name.length > hacker2.name.length) {
        console.log("The driver's name goes first.");
    }
    else {
        console.log("Yo, the navigator goes first definitely.");
    }
}
//console.log("cas particulier", casParticulier)

