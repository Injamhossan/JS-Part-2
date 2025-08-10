function layeredDiscountTotal (quantity){
    const first100price = 100;
    const next100price = 80;
    const next200price = 60;

    if (quantity <= 100) {
        const total = quantity * first100price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * next100price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100price = 100 * first100price;
        const second100price = 100 * next200price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * next200price;
        const total = first100price + second100price + remainingTotal;
        return total;
    }
}

const result = layeredDiscountTotal(150);
console.log(result);