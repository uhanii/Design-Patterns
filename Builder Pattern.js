/*
// Without Builder Pattern
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const user = new User("Bob", undefined, undefined, new Address('1', 'Main'));
console.log(user);
*/

/*
//Builder Pattern
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    //name is a required parameter here for creting a user object
    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(zip, street) {
        this.user.Address = new Address(zip, street);
        return this;
    }

    build() {
        return this.user;
    }
}

let user = new UserBuilder("Bob").setAge(10).setPhone("111111").setAddress("1","Main").build()
console.log(user);
*/

//Simple form of Builder Pattern
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, {age, phone = "123", address} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user = new User("Bob", {age: "10", address: new Address("1", "Street")});
console.log(user);
let user2 = new User("John", {age: "11", phone: "111111"})
console.log(user2);
