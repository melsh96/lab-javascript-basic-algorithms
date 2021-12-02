// Iteration 1: Names and Input
// 

let hacker1 = {
    name : "Joss"
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

//BONUS 1

let lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus lectus, viverra posuere mi ac, luctus scelerisque lacus. Aliquam vestibulum faucibus vestibulum. Cras imperdiet id ante sed pretium. Nullam justo neque, mattis eget neque ac, luctus sollicitudin magna. Nam varius justo lorem, quis finibus ante imperdiet a. Nam et libero mollis, pretium felis id, mollis purus. Nunc ullamcorper malesuada placerat. Nulla neque odio, vehicula a nulla et, euismod eleifend libero. Aenean sem turpis, sollicitudin at ultrices a, scelerisque semper tellus.

Maecenas vel euismod turpis. Etiam vel sapien rutrum, congue odio ac, pulvinar neque. Nunc at vestibulum enim, eu dapibus dui. In et eros nec erat ullamcorper suscipit. Cras in nibh condimentum ante tristique mollis. Ut euismod ex tortor, sit amet faucibus sem sagittis non. Vestibulum feugiat tincidunt fermentum. Sed in sapien at tortor consequat condimentum vitae sed diam. Maecenas tempus at turpis nec consectetur. Quisque sem metus, aliquam eget est quis, eleifend porta est. Donec lorem risus, molestie eget volutpat non, maximus vel felis. Fusce non arcu nunc.

Vivamus consequat viverra enim, commodo porttitor purus vulputate a. Sed faucibus diam at dui aliquet, non vehicula leo vulputate. Morbi venenatis lacinia purus, et euismod neque imperdiet sed. Vivamus tellus ipsum, gravida eu blandit a, pellentesque at erat. Duis efficitur tellus lacinia diam molestie lobortis. Nullam pellentesque purus ut leo tempus lacinia. Praesent eget sodales arcu."`; //224 words

let n;
let occurence = / et /gm;
let res; 


for (let i = 0; i < lorem.length; i++) {
    n = lorem.split(' ').length + 2; //split(' ') will not count the 1st and last word, we had to add +2
    res = lorem.match(occurence).length;
}

console.log(n, res);

//BONUS 2

let phraseToCheck = "NON non!";

let upCasedPhrase = phraseToCheck.toUpperCase();

for (let i = 0; i < upCasedPhrase.length; i++) {
    if (upCasedPhrase === upCasedPhrase.split(' '+','+'!').reverse().join('')) {
        console.log("Is a Palandrome");
        break;
    } else {
        console.log("Is not a Palandrome");
        break;
    }
}