const _ = require("lodash");

var users = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		age: 24,
		gender: "male",
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Doe",
		age: 5,
		gender: "female",
	},
	{
		id: 3,
		firstName: "Jim",
		lastName: "Carrey",
		age: 54,
		gender: "male",
	},
	{
		id: 4,
		firstName: "Kate",
		lastName: "Winslet",
		age: 40,
		gender: "female",
	},
];

function getUsers() {
	var output = "";
	for (var i = 0; i < users.length; i++) {
		output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
	}
	return output;
}

function findUserById(id) {
	try {
		var user = _.find(users, (obj) => {
			if (obj.id === id) {
				return true;
			}
		});
		var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
		return iFindUser;
	} catch (error) {
		return error;
	}
}
getUsers();
findUserById(1);

module.exports = findUserById;