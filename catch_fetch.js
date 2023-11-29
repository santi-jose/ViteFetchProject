// 1. function to fetch a random cat image using the Fetch API and
// display it
export function fetchRandomCatImage() {
    // 2. create and store API URL
    const apiURL = 'https://cataas.com/cat?json=true';

    // 3. create fetch function using API URL
    fetch(apiURL)
        // 4. create promise to handle the fetch request's response
        .then((response) => response.json())
        .then((data) => {
            const catData = data;
            const catImageContainer = document.getElementById('cat-image-container');
            if (catData._id) {
                // 5. Use JavaScript to create desired HTML behavior
                const catImage = document.createElement('img');
                catImage.src = `https://cataas.com/cat/${catData._id}`;
                catImage.alt = 'Random Cat';
                catImageContainer.appendChild(catImage);
            }
        })
        // 6. account for any errors
        .catch((error) => {
            console.error('Error fetching cat image:', error);
        });
}
