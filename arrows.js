let myData = null;
const targetSymbol = "AAPL"; // The symbol you want to look for

// Fetch the JSON file
fetch('http://localhost:5500/stock_prices.json')
  .then(response => response.json()) // Parse JSON
  .then(data => {
    myData = data;

    // Find the object with the symbol "AAPL"
    const stock = myData.find(item => item.symbol === targetSymbol);

    if (stock) {
      console.log(stock.price); // You can replace this with any other logic
    }
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });

  const express = require('express');
  const fs = require('fs');
  const app = express();
  
  app.use(express.json()); // To parse JSON bodies
  
  // Endpoint to update stock price
  app.put('/update-stock-price', (req, res) => {
      const { symbol, newPrice } = req.body;
  
      fs.readFile('./stock_prices.json', 'utf-8', (err, jsonString) => {
          if (err) {
              return res.status(500).json({ error: 'Error reading file' });
          }
  
          try {
              const data = JSON.parse(jsonString);
              const stock = data.find(item => item.symbol === symbol);
  
              if (stock) {
                  stock.price = newPrice;
  
                  fs.writeFile('./stock_prices.json', JSON.stringify(data, null, 2), (err) => {
                      if (err) {
                          return res.status(500).json({ error: 'Error writing file' });
                      } else {
                          return res.json({ message: `Price of ${symbol} updated to ${newPrice}` });
                      }
                  });
              } else {
                  res.status(404).json({ error: `Symbol ${symbol} not found` });
              }
          } catch (err) {
              res.status(500).json({ error: 'Error parsing JSON' });
          }
      });
  });
  
  app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
  });
  