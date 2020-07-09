'use strict'
const Customer = use('App/Models/Customer');
const Winner = use('App/Models/Winner');
const WinnerService = use('App/Services/WinnerService');

class WinnerController {

    async index({ auth }) {
        const user = await auth.getUser();
        return await Winner.all();
    }

    async create({ auth, error }) {

        const user = await auth.getUser();
        const customers = await user.customers().fetch();
        const Win = await Winner.all();
        let FinalWinner = await WinnerService.GenerateWinner(customers, Win);
        //console.log(FinalWinner);
        const winner = new Winner();
        winner.fill(FinalWinner);
        await winner.save(winner);
        return winner;
    }

}

module.exports = WinnerController