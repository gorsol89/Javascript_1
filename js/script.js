const baseUrl = "https://v2.api.noroff.dev/rainy-days"; 
async function getProducts() {
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML = '<div class="spinner"></div>'; 

    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        const products = data.data; 

        resultsContainer.innerHTML = "";

        products.forEach(function (product) {
            const salePrice = product.onSale ? `<p><strong>Sale Price:</strong> ${product.discountedPrice} NOK</p>` : '';
            
            const favoriteStatus = product.favorite ? `<p><strong>Favorite:</strong> Yes</p>` : ''; 

           
            resultsContainer.innerHTML += `
            <div class="card">
                <img src="${product.image.url}" alt="${product.image.alt}">
                <h3>${product.title}</h3>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Gender:</strong> ${product.gender}</p>
                <p><strong>Sizes:</strong> ${product.sizes.join(", ")}</p>
                <p><strong>Base Color:</strong> ${product.baseColor}</p>
                <p><strong>Price:</strong> ${product.price} NOK</p>
                ${salePrice} <!-- Display the sale price if onSale is true -->
                ${favoriteStatus} <!-- Display favorite only if favorite is true -->
                <p><strong>Tags:</strong> ${product.tags.join(", ")}</p>
                <a href="jacket-detail.html?id=${product.id}" class="view-more-button">View More</a>
            </div>`;
        });
    } catch (error) {
        console.error('Error fetching products:', error); 
        resultsContainer.innerHTML = `<div class="error-message">An error occurred while fetching products: ${error.message}</div>`; 
    }
}

getProducts();
