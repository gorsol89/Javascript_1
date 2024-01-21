const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json(); 

        const resultsContainer = document.querySelector("#container");

        resultsContainer.innerHTML = "";

        products.forEach(function (product) { 
            console.log(product);

            resultsContainer.innerHTML += `
                <div class="card">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Sizes: ${product.sizes.join(', ')}</p>
                    <img src="${product.image}" alt="${product.title}">
                    <a href="SailorJacket.html?id=${product.id}">View More</a>
                </div>`;

        }); 
    } catch(error) {
        console.error(error);
        const resultsContainer = document.querySelector("#container");
        resultsContainer.innerHTML = '<div class="error">An error occurred when calling the products API.</div>';
    }
}

getProducts();