import json
import certifi
from urllib.request import urlopen

def get_jsonparsed_data(url):
        response = urlopen(url, cafile=certifi.where())
        data = response.read().decode("utf-8")
        return json.loads(data)

def find_symbol(url):
    symbols = ['QQQ', 'SPY', 'AAPL']  
    stock_data = []
    stock_list = get_jsonparsed_data(url)
    
    if stock_list:
        for symbol in symbols:
            for stock in stock_list:
                if stock['symbol'] == symbol:
                    stock_data.append({'symbol': symbol, 'price': stock['price']})
                    break
    
    return stock_data

def write_to_json_file(stock_data, filename):
    with open(filename, 'w') as json_file:
        json.dump(stock_data, json_file, indent=4)

url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr"
stock_prices = find_symbol(url)

# Write the stock prices to a JSON file
write_to_json_file(stock_prices, 'stock_prices.json')