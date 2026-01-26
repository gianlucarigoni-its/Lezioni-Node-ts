import { cart } from './cart-data.js';
import {
    calcCartItem,
    getTransportFee,
    getVat,
 } from './cart-utils.js';

function printItem(item) {
    console.log(`${item.name} ---> ${item.totalPrice}`);
}

function printSummary(summary) {
    console.log('------------------------');
    console.log(`Spese di trasporto: ${summary.transportFee}`)
    console.log(`Prezzo totale: ${summary.totalPrice + summary.transportFee}`);
}

const COUNTRY_CODE = 'IT';

const vat = getVat(COUNTRY_CODE);

const calculatedItems = cart.map(item => {
    return calcCartItem(item, vat);
});

calculatedItems.forEach(item => printItem(item));

const totalPrice = calculatedItems.reduce((prev, current) => {
                        return prev + current.totalPrice;
                    }, 0);

const totalWeight = calculatedItems.reduce((prev, current) => {
                        return prev + current.totalWeight;
                    }, 0);

const transportFee = getTransportFee(totalWeight);

const summary = {
    transportFee,
    totalPrice
};

printSummary(summary);