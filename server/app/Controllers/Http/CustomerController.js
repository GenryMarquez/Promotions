'use strict'
const Customer = use('App/Models/Customer');

class CustomerController {

    async index({ auth }) {
        const user = await auth.getUser();
        //console.log(user);
        return await user.customers().fetch();
    }

    async create({ auth, request }) {
        const user = await auth.getUser();
        const all = request.all();
        //console.log(all);
        const customer = new Customer();
        customer.fill(all);
        await user.customers().save(customer);
        return customer;
    }

}

module.exports = CustomerController