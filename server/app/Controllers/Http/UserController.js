'use strict'
const User = use('App/Models/User');

class UserController {

    async login({ request, auth }) {

        const { username, password } = request.all();
        const token = await auth.attempt(username, password);
        return token;
    }

    async store({ request }) {

        const { username, password } = request.all();
        //console.log(email, password);
        const user = await User.create({
            username,
            password
        });
        //return user;
        return this.login(...arguments);
    };
}

module.exports = UserController