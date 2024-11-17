document.addEventListener('DOMContentLoaded', async () => {
    // Function to fetch JSON data from a URL
    async function getJSONParsedData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    // Function to get the old price for a specific symbol from the stock list
    async function getOldPrice(symbol, url) {
        const stockList = await getJSONParsedData(url);
        if (stockList) {
            const stock = stockList.find(item => item.symbol === symbol);
            return stock ? stock.price : null;
        }
        return null;
    }

    // Function to update price color based on comparison with old price
    function updatePriceColor(elements, oldPrice, newPrice) {
        const color = newPrice > oldPrice ? 'rgb(255, 0, 0)' : newPrice < oldPrice ? 'rgb(0, 255, 0)' : 'rgb(255, 255, 255)';
        elements.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.color = color;
            }
        });
    }

    // Common URL for stock data API
    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr";

    // Process the stock prices for different symbols
    const stockSymbols = [
        { symbol: "SPY", elements: ["s&p-price", "s&p-price2", "s&p-price3", "s&p-price4"] },
        { symbol: "DIA", elements: ["dow-price", "dow-price2", "dow-price3", "dow-price4"] },
        { symbol: "QQQ", elements: ["nas-price", "nas-price2", "nas-price3", "nas-price4"] }
    ];

    for (const { symbol, elements } of stockSymbols) {
        // Fetch the old price before updating
        const oldPrice = await getOldPrice(symbol, url);
        if (oldPrice !== null) {
            // Display the old price in the elements
            elements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerText = `${oldPrice.toFixed(2)}`;
                }
            });

            // Simulate a price change (replace this with actual new data from API if available)
            const newPrice = oldPrice * (1 + Math.random() * 0.02 - 0.01); // Simulating a random price change within ±1%

            // Update the color based on the comparison between old and new price
            updatePriceColor(elements, oldPrice, newPrice);

            // Simulate updating the price (you would actually update the price in the JSON file here)
            console.log(`Price of ${symbol} updated from ${oldPrice.toFixed(2)} to ${newPrice.toFixed(2)}`);

            // Here, you could call an API or perform file operations to update the price in the JSON file.
        }
    }
});
