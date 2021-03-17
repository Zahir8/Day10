var myPet = {
    species: "Cat",
    name: "Tom",
    legs: 4,
    friends: ["Jerry", "Mickey"]
}
function myFunction(myObj){
    return myObj;
}
console.log(myFunction(myPet));
module.exports ={ myPet, myFunction };