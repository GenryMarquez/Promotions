'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})*/

Route.group(() => {
    Route.post('Users/register', 'UserController.store');
    Route.post('Users/login', 'UserController.login');
    // Rutas Customers
    Route.get('Customers', 'CustomerController.index').middleware('auth');
    Route.post('Customers', 'CustomerController.create').middleware('auth');
    // Rutas Referred
    Route.get('Customers/:id/Referreds', 'ReferredController.index').middleware('auth');
    Route.post('Customers/:id/Referreds', 'ReferredController.create').middleware('auth');
    // Ruta Winner
    Route.get('Winner', 'WinnerController.index').middleware('auth');
    Route.post('GoWinner', 'WinnerController.create').middleware('auth');
}).prefix('Api/');