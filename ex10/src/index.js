function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "BT",
                3: "Lp"
            },
            gold: true,
        },
        002: {
            artist: "Elvis Presley",
            title: "Pot Luck",
            release_year: 1962,
            id: 2,
            formats: {
                1: "CD",
                2: "BT",
                3: "Lp"
            },
            gold: true,
        }
    };
}
console.log(myFunction()[2]);
module.exports = myFunction;