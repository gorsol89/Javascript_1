const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getProducts() {
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = '<div class="spinner"></div>'; // Display spinner before loading products

    try {
        const response = await fetch(url);
        const products = await response.json();

        resultsContainer.innerHTML = "";

        products.forEach(function (product) {
            resultsContainer.innerHTML += `
                <div class="card">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="card-content">
                        <h3>${product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <a href="Jacket-detail.html?id=${product.id}" class="view-more">View More</a>
                    </div>
                </div>`;
        });
    } catch(error) {
        console.error('Error fetching products:', error);
        resultsContainer.innerHTML = '<div class="error-message">An error occurred while fetching products.</div>';
    }
}

getProducts();