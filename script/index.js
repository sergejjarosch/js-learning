

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(User.userCount);