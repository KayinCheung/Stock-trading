# Stock trading application

## Deployed at

Link: http://18.136.211.239/

Deployed using AWS EC2 + Nginx.

Built with React, Redux, React Router for frontend, NodeJS Express for backend and MongoDB.

## Requirements
1) Support user stock search. 
2) Show stock's market information
3) Analyse user's portfolio to help make investment decisions.
4) Add stock trade flow (process of buying/selling a stock)

### Features
- Search stocks by stock symbol. Data provided by: https://iexcloud.io/
- Buy and sell stocks. Orders are assumed to be immediately filled at user's set price and saved to trade history in DB.
- Portfolio page - View holdings, trade history, charts of user's long and short holdings by sector.

### Search function
Search input box on header. If user hits enter or clicks the search icon and ticker exists, user is directed to /stocks page. If ticker doesn't exist (not found in iexcloud.io), warning msg "ticker not found" will show to the left of search box. Warning dissappears when user sends another input to search box.

### /Stock page
Accessed by performing search in search box, or clicking a ticker on `/portfolio` page.

Shows a 1 month graph, key fundamental and technical stats, company description summary, current price and user's position on the stock. User can also buy or sell the stock in the trade widget.

#### Stock trade flow
Trade flow begins as the user searches for a stock by ticker, or clicks an existing ticker on the ```/portfolio``` page. 

When user enters ```/stock``` page, price in trade widget is pre-filled with user's input price. User selects side of trade (buy or sell) and modifies quantity. Next, the user clicks ```Submit Order``` and a confirmation window pops up, showing the ticker, price, quantity and total market value of the trade, with a button for final trade confirmation.

Upon clicking the trade confirmation, the trade info is sent to backend and saved to database. User can view his last 10 trades on ```/portfolio``` page. In this demo, the trade immediately executes at the user's set price and quantity.

If invalid inputs are entered (quantity or price <=0), an error msg appears when user submits the order.

### /Portfolio page
Graphs to show user's sector distribution of stocks. One seperate donut chart for long and short.

Left column shows user's portfolio holdings. In this demo, portfoio holdings symbol, quantity and cost basis columns are hard coded in the backend.

Right column shows user's last 10 trades in the app.

All symbols are linked to their respective stock page.


### Limitations
Due to API limitations, current price in ```/stock``` page uses yesterday's close price instead of real time price.

### Next step beyond prototype
- Ability to filter a stock for trade history.
- Dedicated page to view all trade history with pagination.
- More functionality for stock charts, such as allowing selection of time period and bar size for charts, indicating when dividends are paid out.
- Fix the graph, it should not reserve a space for non-trading days.
- If real time data source is available, in /stock page, the stock price should be updated in real time and market order trades should execute at current price.
- Create limit order functionality. Orders placed that aren't executed immediately should be stored in memory and only executed when stock prices exceeds the limit price by 1 cent. Ability for users to view and cancel open orders.
- Better UX transition when confirming trades. Eg, instead of the trade popup window closing immediately, it can show a loading icon with text "Submitting order", then change text to "Trade submitted" before closing.
- Search function to suggest stocks as user types, and allow search by company name.
- Save and show cost basis and unrealized P&L.
- Handle cases where user manually change the url ticker parameter into a ticker that does not exist.
- Write unit tests.
- More error handling, such as unavailable backend or iexcloud.
- Login/signup infrastructure
