document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // Show loading indicator
    loadingIndicator.style.display = 'block';

    // API endpoint
    const apiUrl = 'https://api.noroff.dev/api/rainy-days';

    // Fetch products from the Rainy Days API
    fetch(apiUrl + '/products')
        .then(response => response.json())
        .then(products => {
            // Add products to the list
            products.forEach(product => {
                productList.innerHTML += `<li><a href="product-detail.html?id=${product.id}">${product.name}</a></li>`;
            });
        })
        .catch(error => console.error('Error fetching products:', error))
        .finally(() => {
            // Hide loading indicator after API call
            loadingIndicator.style.display = 'none';
        });
});