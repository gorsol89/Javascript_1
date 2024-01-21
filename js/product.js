const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    window.location.href = "index.html";
}

const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;

async function getProduct() {
    try {
        const response = await fetch(url);
        const product = await response.json();

        const container = document.querySelector('#product-info');
        
        container.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" />
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <!-- I CAN ADD MORE INFORMATION HERE! -->
            </div>`;
    } catch (error) {
        console.error('Error fetching product:', error);
        const container = document.querySelector("#product-info");
        container.innerHTML = '<div class="error">An error occurred when calling the Product API.</div>';
    }
}

getProduct();