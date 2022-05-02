// Object property shorthand

const name = 'Anand';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Madurai'
};

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 4.2
};

// const label = product.label;
// const stock = product.stock;

// const { label, stock, rating = 5 } = product;
// console.log(label)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);