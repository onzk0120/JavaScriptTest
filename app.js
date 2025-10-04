let myname = 'John';

let hello = greet(myname);

console.log(hello);

function greet(name){
    let greeting = 'Hello,' + name;
    return greeting;
}