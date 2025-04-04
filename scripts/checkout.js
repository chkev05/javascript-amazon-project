import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
    try {

        // throw 'error1';
        await loadProductsFetch();
        const value = await new Promise((resolve, reject) => {
            loadCart(() => {
                // reject('error3')
                resolve();
            })
        })
    }
    catch (error) {
        console.log('Unexpected erorr, Please Try Again');
    }


    renderOrderSummary();
    renderPaymentSummary();

}
loadPage()

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     }),
// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     })
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary(); 
//     });
// });