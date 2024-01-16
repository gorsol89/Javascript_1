document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(data => {
            // Process the data and create product cards
            const productListDiv = document.getElementById('productList');

            data.forEach(product => {
                // Create a card for each product
                const productCard = document.createElement('div');
                productCard.className = 'product'; // Add your own CSS class for styling

                // Create HTML content for the product card
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.discountedPrice}</p>
                    <button>Add to Cart</button>
                `;

                // Append the product card to the product list
                productListDiv.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});