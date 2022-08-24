// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input === "string"){
        return "Hello, " + input + "!";
    } else if(typeof input === "boolean"){
        return "Hello, World!";
    } else {
        return "Hello, World!";
    }
}

function isFive(input){
    return input === 5;
}

function isEven(input){
    return parseFloat(input) % 2 === 0;
}

function isVowel(input){
    return !!(input === 'a', 'e', 'i', 'o', 'u');
}
