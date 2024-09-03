const baseUrl = "http://rainydays.local/wp-json/wc/store/products";
const productContainer = document.querySelector('.products');

async function getProducts() {
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = '<div class="spinner"></div>'; // Display spinner before loading products

    try {
        const response = await fetch(baseUrl);
        const products = await response.json();

        resultsContainer.innerHTML = "";

        products.forEach(function (product) {
            resultsContainer.innerHTML += `
            <div class="card">
                <img src="${product.images[0].src}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.prices.price} ${product.prices.currency_code}</p>
                <a href="Jacket-detail.html?id=${product.id}" class="view-more">View More</a>
            </div>`;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        resultsContainer.innerHTML = '<div class="error-message">An error occurred while fetching products.</div>';
    }
}

getProducts();