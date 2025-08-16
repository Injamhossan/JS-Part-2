const numbers = [45, 54, 64, 95, 32];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

for(const number of numbers) {
    console.log(number)
}

const products = [
    {name: 'Product 1', price: 10.99},
    {name: 'Product 2', price: 9.99},
    {name: 'Product 3', price: 7.99},
    {name: 'Product 4', price: 5.99},
    {name: 'Product 5', price: 3.99},
];

for(const product of products){
    console.log(product);
}


function matchedProducts (products, search) {
    const matched = [];
    for(const product of products) {
        if(product.name.includes(search)){
            matched.push(product);
        } 
    }  
    return matched;    
}

const result = matchedProducts(products, 'Product');
console.log(result);