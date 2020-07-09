const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException');
const DataIfFoundException = use('App/Exceptions/DataIfFoundException');
const DataNotFoundException = use('App/Exceptions/DataNotFoundException');

class WinnerService {

    GenerateWinner(customer, winner) {

        /*const ListCustomers = resource.toJSON();
        const randomListCustomers = 
        ///console.log("random monthListCustomers[Math.floor(Math.random() * ListCustomers.length)]; =>", randomListCustomers);
        return randomListCustomers*/

        /* const ListCustomerwinners = resource.toJSON();
         const aleatorio = Math.floor(Math.random() * (ListCustomers.length));
         const seleccion = ListCustomers[aleatorio];
         const data = {
             "customer_id": seleccion.id,
             "policy_number": seleccion.policy_number,
         };
         return data;*/

        if (!customer && !winner) {
            throw new ResourceNotFoundException();
        };

        if (customer.toJSON() != null && customer.toJSON() != '') {

            if (winner.toJSON() != null && winner.toJSON() != '') { //esta lleno
                throw new DataIfFoundException();
            } else {

                const ListCustomers = customer.toJSON();
                const aleatorio = Math.floor(Math.random() * (ListCustomers.length));
                const seleccion = ListCustomers[aleatorio];
                const data = {
                    "customer_id": seleccion.id,
                    "policy_number": seleccion.policy_number,
                };
                return data;
            }
        } else {

            throw new DataNotFoundException();
        }

    }

}

module.exports = new WinnerService();