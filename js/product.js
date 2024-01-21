

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}


const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;

console.log(url);

async function getProduct() {

    try {

  
    const response = await fetch(url);
    const details = await response.json();

    const container = document.querySelector('#product-info');
    
    container.innerHTML = `<div class="product-card">
                            <h2>${details.title}</h2>
                        <img src="${details.image}" alt="${details.title}" />
                        </div>`;
        } catch (error){
            const container = document.querySelector("#product-info")
            container.innerHTML = '<div class="error">An error occurred when calling the Product APi.</div>';

        }
}

getProduct();