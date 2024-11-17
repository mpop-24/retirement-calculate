document.addEventListener('DOMContentLoaded', async () => {
    const sp1 = document.getElementById("s&p-price");
    const sp2 = document.getElementById("s&p-price2");
    const sp3 = document.getElementById("s&p-price3");
    const sp4 = document.getElementById("s&p-price4");

    const fs = require('fs');
        // Function to read the stock price for a specific symbol using a callback
        function getStockPrice(symbol, callback) {
            fs.readFile('./stock_prices.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    callback(err, null);  // Pass the error to the callback
                    return;
                }
        
                try {
                    const data = JSON.parse(jsonString);
                    const stock = data.find(item => item.symbol === symbol);
        
                    if (stock) {
                        callback(null, stock.price);  // Pass the price to the callback
                    } else {
                        callback(new Error(`Symbol ${symbol} not found`), null);
                    }
                } catch (err) {
                    callback(err, null);  // Pass the parsing error to the callback
                }
            });
        }
        
        // Function to update the stock price for a specific symbol using a callback
        function updateStockPrice(symbol, newPrice, callback) {
            fs.readFile('./stock_prices.json', 'utf-8', (err, jsonString) => {
                if (err) {
                    callback(err);  // Pass the error to the callback
                    return;
                }
        
                try {
                    const data = JSON.parse(jsonString);
        
                    // Find the stock with the specified symbol
                    const stock = data.find(item => item.symbol === symbol);
        
                    if (stock) {
                        stock.price = newPrice;  // Update the price
        
                        // Write the updated data back to the JSON file
                        fs.writeFile('./stock_prices.json', JSON.stringify(data, null, 2), (err) => {
                            if (err) {
                                callback(err);  // Pass the error to the callback
                            } else {
                                callback(null, `Price of ${symbol} updated to ${newPrice}`);
                            }
                        });
                    } else {
                        callback(new Error(`Symbol ${symbol} not found`));
                    }
                } catch (err) {
                    callback(err);  // Pass the parsing error to the callback
                }
            });
        }
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

    async function getPriceForSymbol(symbol, url) {
        const stockList = await getJSONParsedData(url);
        if (stockList) {
            for (let stock of stockList) {
                if (stock.symbol === symbol) {
                    return stock.price;
                }
            }
        }
        return null;  // Return null if the symbol is not found
    }
    
    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr";
    const symbol = "SPY";

    const price1 = await getPriceForSymbol(symbol, url);
        
        sp1.innerText = `${(price1).toFixed(2)}`;
        sp2.innerText = `${(price1).toFixed(2)}`;
        sp3.innerText = `${(price1).toFixed(2)}`;
        sp4.innerText = `${(price1).toFixed(2)}`;

        getStockPrice(symbol, price1, (err, price) => {
            if (err) {
                console.log('Error:', err.message);
            } else {
                if (price > price1){

                    sp1.style.color = 'rgb(255, 0, 0)'; // Change 'red' to the desired color
                    sp2.style.color = 'rgb(255, 0, 0)';
                    sp3.style.color = 'rgb(255, 0, 0)';
                    sp4.style.color = 'rgb(255, 0, 0)';
                }
                if(price < price1){
                    sp1.style.color = 'rgb(0, 255, 0)'; // Change 'red' to the desired color
                    sp2.style.color = 'rgb(0, 255, 0)';
                    sp3.style.color = 'rgb(0, 255, 0)';
                    sp4.style.color = 'rgb(0, 255, 0)';
                }
                updateStockPrice(symbol, price1, (err, message) => {
                    if (err) {
                        console.log('Error:', err.message);
                    } else {
                        console.log(message);
                    }
                });
            }
        });
});

document.addEventListener('DOMContentLoaded', async () => {
    const dj1 = document.getElementById("dow-price");
    const dj2 = document.getElementById("dow-price2");
    const dj3 = document.getElementById("dow-price3");
    const dj4 = document.getElementById("dow-price4");
    
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

    async function getPriceForSymbol(symbol, url) {
        const stockList = await getJSONParsedData(url);
        if (stockList) {
            for (let stock of stockList) {
                if (stock.symbol === symbol) {
                    return stock.price;
                }
            }
        }
        return null;  // Return null if the symbol is not found
    }

    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr";
    const symbol = "DIA";

    const price1 = await getPriceForSymbol(symbol, url);
        
    dj1.innerText = `${(price1).toFixed(2)}`;
    dj2.innerText = `${(price1).toFixed(2)}`;
    dj3.innerText = `${(price1).toFixed(2)}`;
    dj4.innerText = `${(price1).toFixed(2)}`;

    getStockPrice(symbol, price1, (err, price) => {
        if (err) {
            console.log('Error:', err.message);
        } else {
            if (price > price1){

                dj1.style.color = 'rgb(255, 0, 0)'; // Change 'red' to the desired color
                dj2.style.color = 'rgb(255, 0, 0)';
                dj3.style.color = 'rgb(255, 0, 0)';
                dj4.style.color = 'rgb(255, 0, 0)';
            }
            if(price < price1){
                dj1.style.color = 'rgb(0, 255, 0)'; // Change 'red' to the desired color
                dj2.style.color = 'rgb(0, 255, 0)';
                dj3.style.color = 'rgb(0, 255, 0)';
                dj4.style.color = 'rgb(0, 255, 0)';
            }
            updateStockPrice(symbol, price1, (err, message) => {
                if (err) {
                    console.log('Error:', err.message);
                } else {
                    console.log(message);
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', async () => {
    const nq1 = document.getElementById("nas-price");
    const nq2 = document.getElementById("nas-price2");
    const nq3 = document.getElementById("nas-price3");
    const nq4 = document.getElementById("nas-price4");
    
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

    async function getPriceForSymbol(symbol, url) {
        const stockList = await getJSONParsedData(url);
        if (stockList) {
            for (let stock of stockList) {
                if (stock.symbol === symbol) {
                    return stock.price;
                }
            }
        }
        return null;  // Return null if the symbol is not found
    }

    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr";
    const symbol = "QQQ";

    const price1 = await getPriceForSymbol(symbol, url);
        
    nq1.innerText = `${(price1).toFixed(2)}`;
    nq2.innerText = `${(price1).toFixed(2)}`;
    nq3.innerText = `${(price1).toFixed(2)}`;
    nq4.innerText = `${(price1).toFixed(2)}`;

    getStockPrice(symbol, price1, (err, price) => {
        if (err) {
            console.log('Error:', err.message);
        } else {
            if (price > price1){

                nq1.style.color = 'rgb(255, 0, 0)'; // Change 'red' to the desired color
                nq2.style.color = 'rgb(255, 0, 0)';
                nq3.style.color = 'rgb(255, 0, 0)';
                nq4.style.color = 'rgb(255, 0, 0)';
            }
            if(price < price1){
                nq1.style.color = 'rgb(0, 255, 0)'; // Change 'red' to the desired color
                nq2.style.color = 'rgb(0, 255, 0)';
                nq3.style.color = 'rgb(0, 255, 0)';
                nq4.style.color = 'rgb(0, 255, 0)';
            }
            updateStockPrice(symbol, price1, (err, message) => {
                if (err) {
                    console.log('Error:', err.message);
                } else {
                    console.log(message);
                }
            });
        }
    });
});
