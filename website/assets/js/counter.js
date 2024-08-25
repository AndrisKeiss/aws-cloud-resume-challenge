// counter js code

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://zdjnik2qkiwmud3ssm6ccmd6t40qbdau.lambda-url.eu-north-1.on.aws/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error('Error fetching the counter:', error);
        counter.innerHTML = 'Views: N/A';
    }
}

updateCounter();