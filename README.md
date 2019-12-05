# Stock trading application

## Requirements
1) Support user stock search. 
2) Show stock's market information
3) Analyse user's portfolio to help make investment decisions.
4) Add stock trade flow (process of buying/selling a stock)

### Features
- Search stocks by stock symbol. Data provided by: https://iexcloud.io/
- Buy and sell stocks. Orders are assumed to be immediately filled at user's set price and saved to trade history in DB.
- Portfolio page - View holdings and trade history

### Search function
Search input box on header. If user hits enter or clicks the search icon and ticker exists, user is directed to /stocks page. If ticker doesn't exist (not found in iexcloud.io), warning msg "ticker not found" will show to the left of search box. Warning dissappears when user sends another input to search box.

### /Stock page
Shows a 1 month graph, key fundamental and technical stats, company description summary, current price and user's position on the stock. User can also buy or sell the stock in the trade widget.

#### Stock trade flow
Trade flow begins as the user searches for a stock by ticker, or clicks an existing ticker on the ```/portfolio``` page. When user enters ```/stock```, price in trade widget is pre-filled with current price. User selects side of trade (buy or sell) and modifies quantity. Next, the user clicks ```Submit Order``` and a confirmation window pops up, showing the ticker, price, quantity and total market value of the trade, with a button for final trade confirmation.

Upon clicking the trade confirmation, the trade info is sent to backend and saved to database. User can view his last 10 trades on ```/portfolio``` page. In this demo, the trade immediately executes at the user's set price and quantity.

### /Portfolio page
Left column shows user's portfolio holdings. 

Right column shows user's last 10 trades.

All symbols are linked to their respective stock page.


### Limitations
Due to API limitations, current price in ```/stock``` page uses yesterday's close price instead of real time price.

### Next step beyond prototype
- Ability to filter a stock for trade history
- Error checking for trade submission. Handle orders of 0 shares, buying/selling negative number of shares.
- Allow users to select time period for charts, drag across charts to change time period.
- If real time data source is available, in /stock page, the stock price can be updated in real time.
- Save and show cost basis and unrealized P&L
- Handle cases where user manually change the url ticker parameter into a ticker that does not exist.
- Handle scenario when user clicks back when 