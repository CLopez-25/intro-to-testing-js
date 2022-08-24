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
    if(input === 5){
        return true;
    } else {
        return false;
    }
}

function isEven(input){
    if(parseFloat(input)% 2 === 0){
        return true;
    } else {
        return false;
    }
}

function isVowel(input){

}