const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getProducts() {
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = '<div class="spinner"></div>'; 

    try {
        const response = await fetch(url);
        const products = await response.json();

        resultsContainer.innerHTML = "";

        products.forEach(function (product) {
            resultsContainer.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: ${product.price}</p>
                <a href="Jacket-detail.html?id=${product.id}" class="view-more">View More</a>
            </div>`;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        resultsContainer.innerHTML = '<div class="error-message">An error occurred while fetching products.</div>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getProducts(); 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

    });
});