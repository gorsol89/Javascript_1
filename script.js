

cont url = "https://api.noroff.dev/api/v1/";

const resultsContainer = document.querySelector(".results");

async function make ApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = error
    }
}

makeApiCall();
