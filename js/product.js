const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    window.location.href = "index.html";
}

const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;

async function getProduct() {
    const container = document.querySelector('#product-info');
    container.innerHTML = '<div class="spinner"></div>'; 

    try {
        const response = await fetch(url);
        const product = await response.json();

        container.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" />
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Base Color: ${product.baseColor}</p>
                <p>Gender: ${product.gender}</p>
                <p>Sizes: ${product.sizes}</p>
                <p>Price: ${product.price}</p>
                <a href="Checkout.html" class="cta">Buy Now</a>
            </div>`;
    } catch (error) {
        console.error('Error fetching product:', error);
        container.innerHTML = '<div class="error-message">An error occurred while fetching product details.</div>';
    }
}

getProduct();