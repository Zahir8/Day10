function getUserName(email){
    var username = "";
    var username = {
        "user1@gmail.com": "user1",
        "user2@gmail.com": "user2",
        "user3@gmail.com": "user3",
        "user4@gmail.com": "user4",
        "user5@gmail.com": "user5",
        "user6@gmail.com": "user6"
    }
    username = username[email];
    return username;   
}
console.log(getUserName("user1@gmail.com"));
getUserName("user1@gmail.com");
module.exports = getUserName;