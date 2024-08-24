document.addEventListener('DOMContentLoaded', async () => {
    const sp1 = document.getElementById("s&p-price");
    const sp2 = document.getElementById("s&p-price2");
    const sp3 = document.getElementById("s&p-price3");
    const sp4 = document.getElementById("s&p-price4");
    
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

    const price = await getPriceForSymbol(symbol, url);
        
        sp1.innerText = `${(price).toFixed(2)}`;
        sp2.innerText = `${(price).toFixed(2)}`;
        sp3.innerText = `${(price).toFixed(2)}`;
        sp4.innerText = `${(price).toFixed(2)}`;
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

    const price = await getPriceForSymbol(symbol, url);
        
        dj1.innerText = `${(price).toFixed(2)}`;
        dj2.innerText = `${(price).toFixed(2)}`;
        dj3.innerText = `${(price).toFixed(2)}`;
        dj4.innerText = `${(price).toFixed(2)}`;
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

    const price = await getPriceForSymbol(symbol, url);
        
        nq1.innerText = `${(price).toFixed(2)}`;
        nq2.innerText = `${(price).toFixed(2)}`;
        nq3.innerText = `${(price).toFixed(2)}`;
        nq4.innerText = `${(price).toFixed(2)}`;
});