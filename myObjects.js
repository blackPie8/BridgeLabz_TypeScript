"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Ashray',
    email: 'stanashray@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Ashray', isPaid: false });
function createUserTwo(user) {
    return { name: 'Ashray', email: 'stanashray@gmail.com', isPaid: false };
}
createUserTwo({ name: 'Ashray', email: 'stanashray@gmail.com', isPaid: false });
