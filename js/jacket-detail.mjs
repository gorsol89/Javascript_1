const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id'); 

console.log("Product ID:", productId); 

// Construct the API URL using the extracted product ID
const baseUrl = `https://v2.api.noroff.dev/rainy-days/${productId}`;
console.log("Fetching from URL:", baseUrl);  
async function getProductDetails() {
 
    const productDetailsContainer = document.querySelector("#product-details");

    if (!productDetailsContainer) {
        console.error("Element #product-details not found in the DOM.");
        return;
    }

    // SPINNER
    productDetailsContainer.innerHTML = '<div class="spinner"></div>';

    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const product = await response.json();
        console.log("Full Product Details:", product); 

        const productData = product.data;

        const productImage = productData.image && productData.image.url ? `<img src="${productData.image.url}" alt="${productData.image.alt || 'Product image'}">` : '<p>No image available</p>';
        const productTitle = productData.title || 'No title available';
        const productDescription = productData.description || 'No description available';
        const productGender = productData.gender || 'No gender specified';
        const productBaseColor = productData.baseColor || 'No base color available';
        const productPrice = productData.price ? `${productData.price} NOK` : 'Price not available';
        const productSizes = productData.sizes ? productData.sizes.join(", ") : 'No sizes available';
        const productTags = productData.tags ? productData.tags.join(", ") : 'No tags available';

        productDetailsContainer.innerHTML = `
            <div class="product-card">
                ${productImage}
                <h2>${productTitle}</h2>
                <p><strong>Description:</strong> ${productDescription}</p>
                <p><strong>Gender:</strong> ${productGender}</p>
                <p><strong>Sizes:</strong> ${productSizes}</p>
                <p><strong>Base Color:</strong> ${productBaseColor}</p>
                <p><strong>Price:</strong> ${productPrice}</p>
                ${productData.onSale ? `<p><strong>Sale Price:</strong> ${productData.discountedPrice} NOK</p>` : ''}
                <p><strong>Tags:</strong> ${productTags}</p>
                ${productData.favorite ? `<p><strong>Favorite:</strong> Yes</p>` : ''}
            </div>`;
    } catch (error) {
        // Handle errors during the fetch process
        console.error('Error fetching product details:', error);
        productDetailsContainer.innerHTML = `<div class="error-message">An error occurred while fetching the product details: ${error.message}</div>`;
    }
}
getProductDetails();
