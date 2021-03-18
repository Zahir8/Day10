var lion = {
    name = "Simba",
    legs = 4,
    tails = 1,
    roar = "roar-roar"
};
function myFunction(property){
    
    delete lion[property];
    return lion;
}
console.log(myFunction("roar"));
myFunction("roar");
