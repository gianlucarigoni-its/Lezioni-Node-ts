export function getVat(countryCode) {
    if (countryCode === 'IT') {
        return 0.22;
    }
    return 0;
}

export function getDiscountedPrice(price, discount) {
    return price * (1 - discount/100);
}

export function getVatPrice(price, vat) {
    return price * (1 + vat); 
}


export function calcCartItem(item, vat) {
    let price = item.netPrice * item.quantity;
    price = getDiscountedPrice(price, item.discount);
    price = getVatPrice (price, vat);

    return {
        // name: item.name,
        // netPrice: item.netPrice,
        // weight: item.weight,
        // discount: item.discount,
        // quantity: item.quantity,
        ...item,
        totalWeight: item.weight * item.quantity,
        totalPrice: price
    }
}

export function getTransportFee(weight) {
    let transportFee = 0;

    if (weight > 2000) {
        transportFee = 7;
    }
    if(weight > 5000) {
        transportFee = 15;
    }
    if (weight > 10000) {
        transportFee = 20;
    }
    return transportFee;
}