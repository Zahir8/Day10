var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
function myFunction(property, propertyValue){
    lion[property] = propertyValue;
    return lion;
}
console.log(myFunction("roar", "roar-roar"));
myFunction("roar", "roar-roar");
module.exports = myFunction;