const _ = require("lodash");

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female"
  },
  {
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male"
  },
  {
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female"
  }
];

function getUsers(){
    var output = "";

    for(let i=0;i<users.length;i++){
        output+= `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }
    return output;
}

function findUser(lastName, gender) {
	try {
		var user = _.find(users, (obj) => {
			if (obj.lastName === lastName && obj.gender === gender) {
				return true;
			}
		});
		var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
		return iFindUser;
	} catch (error) {
		return error;
	}
}

getUsers();
findUser();

module.exports = findUser;