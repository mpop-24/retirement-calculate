try:
    # For Python 3.0 and later
    from urllib.request import urlopen
except ImportError:
    # Fall back to Python 2's urllib2
    from urllib2 import urlopen
import certifi
import json

def get_jsonparsed_data(url):
    response = urlopen(url, cafile=certifi.where())
    data = response.read().decode("utf-8")
    return json.loads(data)

def find_symbol(symbol, url):
    stock_list = get_jsonparsed_data(url)
    for stock in stock_list:
        if stock['symbol'] == symbol:
            return stock
    return None

url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=wwRCBdU2wv23s2rQu3kjYkzwvO7iaNyr"
symbol = "SSGLX"
stock_data = find_symbol(symbol, url)

if stock_data:
    print(f"Found symbol {symbol}: {stock_data}")
else:
    print(f"Symbol {symbol} not found in the list.")
