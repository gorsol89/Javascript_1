const apiUrl = 'https://api.noroff.dev/api/v1/products';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();

        return products;
    } catch (error) {
        console,error('Error fetching products:', error);
        return [];
    }
}
document,addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    const productItem = document,getElementById('product-items');
    if (products.length > 0) {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} - $${product.price.toFixed(2)}`;
            
            productItems.appendChild(listItem);
        });
    } else {
        productItems.innerHTML = '<p>Please try again. No products available at the moment.</p>';
    }
});
/* const products = [

    {
        "id": "0",
        "title": "Sailor Jacket",
        "description": "Sailorjacket for the most extreme weather conditions. You can keep warm and dry even in the worst storm!",
        "gender": "Male",
        "sizes": ["M", "L", "XL", "XXL"],
        "baseColor": "Grey",
        "price": 1199,-,
        "discountedPrice": 1100,-,
        "onSale": false,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["sailor", "men", "extreme", "boat", "jacket"],
        "favorite": true
    },
    {
        "id": "1",
        "title": "Light Jacket",
        "description": "This jacket is light and perfect for running or working out. Breathable and ligthtly waterproof. Perfect for spring.",
        "gender": "Male", "Female",
        "sizes": ["XS","S","M", "L", "XL", "XXL"],
        "baseColor": "Grey",
        "price": 799,-,
        "discountedPrice": 800,-,
        "onSale": true,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["running", "men", "woman", "light", "jacket"],
        "favorite": false
    },
    {
        "id": "2",
        "title": "Red Jacket",
        "description": "Skijacket with durable and breathable material. This jacket is perfect for cross-country skiing. A favorite for Norwegian ski athlete. Used by skistars like Therese Johaug and Marit Bjørgen.",
        "gender": "Female",
        "sizes": ["XS","S","M", "L", "XL"],
        "baseColor": "Red",
        "price": 799,-,
        "discountedPrice": 750,-,
        "onSale": true,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["winter", "woman", "ski", "jacket", "red"],
        "favorite": false
    },
    {
        "id": "3",
        "title": "Winter Jacket",
        "description": "Winterjacket with fleece padding on the inside. This jacket will make you warm all winter.",
        "gender": "Female", "Male",
        "sizes": ["XS","S","M", "L", "XL", "XXL"],
        "baseColor": "Black",
        "price": 749,-,
        "discountedPrice": 650,-,
        "onSale": true,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["winter", "woman", "men", "jacket", "black", "warm"],
        "favorite": true
    },
    {
        "id": "4",
        "title": "Grey Jacket",
        "description":"Windproof jacket for the windy days. Perfect when you want to take a long hike.",
        "gender": "Male",
        "sizes": ["M", "L", "XL", "XXL"],
        "baseColor": "Grey",
        "price": 899,-,
        "discountedPrice": 879,-,
        "onSale": true,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["windproof", "male", "jacket", "grey"],
        "favorite": false
    },
    {
        "id": "5",
        "title": "Black and White Jacket",
        "description": "Jacket for motorcycling or other more extreme sports. Coated with fireproof material and have a backbrace to protect your back during your adventures.",
        "gender": "Male",
        "sizes": ["S","M", "L", "XL", "XXL"],
        "baseColor": "Black",
        "price": 749,-,
        "discountedPrice": 700,-,
        "onSale": false,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["motorcycling", "man", "extreme", "jacket"],
        "favorite": true
    },
    {
        "id": "6",
        "title": "Fleece Jacket",
        "description": "Fleece jacket made with breathable fabric. Perfect to use on cold summer nigths by the fire.",
        "gender": "Female", "Male",
        "sizes": ["XS","S","M", "L", "XL", "XXL"],
        "baseColor": "Green",
        "price": 599,-,
        "discountedPrice": 500,-,
        "onSale": true,
        "image": "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        "tags": ["man", "woman", "fleece", "jacket", "green"],
        "favorite": false
    }
];
*/
