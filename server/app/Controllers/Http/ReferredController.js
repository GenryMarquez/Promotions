'use strict'
const Customer = use('App/Models/Customer');
const Referred = use('App/Models/Referred');

class ReferredController {

    async index({ auth, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const customer = await Customer.find(id);
        //AuthorizationService.VerifyPermission(project, user);
        return await customer.referreds().fetch();

    }

    async create({ auth, request, params }) {

        const user = await auth.getUser();
        const referredAll = request.all();
        const { id } = params;
        const customer = await Customer.find(id);
        //AuthorizationService.VerifyPermission(project, user);
        const referred = new Referred();
        // console.log(referredAll);
        referred.fill(referredAll);
        await customer.referreds().createMany(referred["data"]);
        return referred;

    }
}

module.exports = ReferredController