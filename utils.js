var prompt = require('prompt-sync')();
const chalkAnimation = require('chalk-animation');
exports.usr = (x, y) =>{
    return Math.pow(x, y)
}

exports.percentage = (x, y) =>{
    return x / 100*(y);
}

exports.sqrt = (x) => {
    console.clear();
    return Math.sqrt(x)
}

exports.calcArea = ()=> {
    console.log("Calc the Diameter and the Area of a circle\n");
    let pi = 3.141592653589793
    let ray = Number (prompt("Type the ray of your circle: "));
    console.log("ray is: " + ray);
    let diameter = ray * 2;
    console.log("Diameter is: "+diameter);
    let area = pi*(Math.pow(ray, 2));
    console.log("Area is: "+area);
}