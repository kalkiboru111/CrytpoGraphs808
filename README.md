
# CryptoGraphs808

The purpose of this project is to provide users with graphs which track the price movements of the BTC-USD market. The graph is parameterized by the hour, giving the user an intuitive presentation of the movements of the Bitcoin market on the day in question. This is potentially of interest to any site user with an interest in cryptocurrency, and of special interest to cryptocurrency investors. 

As part of the Code Institute Course, this project was meant to test both CrossFilter, D3 and DC, or calling and working with data from APIs. This project was chosen to combine both of these areas. 
 
## UX
 
This site is for users who are seeking data. It is therefore a "no frills" site, without any extraneous aesthetic or functional features. The goal of this users is simple: they want to understand the current state of the Bitcoin market. 

The user stories are fairly generic and self-explanatory:
- As a Bitcoin investor (or as any interested observer), I want to understand a) the current price of Bitcoin and b) how to parameterize that price with respect to the recent past, so that I can assess the price and relative performance of Bitcoin on the day in question. This site enables me to do this by providing a graphical and temporally parameterized representation of the price of Bitcoin.
- As a Bitcoin investor  (or as any interested observer), I want further specifics regarding the performance of Bitcoin, so that I can make decisions regarding my investments. I can do this by clicking on the "Show BTC Data" button whcih provides me with a chart with further specifics regarding the BTC markets (open, close, volume, etc). 

## Features

This project only has as many features as are necessary for data-driven users to derive utility from the site.
 
### Existing Features
- Line Graph - allows users to contextualize the price of Bitcoin in an intuitive way, by presenting them with the graph which shows fluctuations in the price of Bitcoin over time. 
- Data Chart - allows users to investigate the data more closely by clicking on the "Show BTC Data" button, which reveals a chart with a structured display of the properties of the data. 

### Features Left to Implement
I am considering adding the following features to the project in future:
- New Crytpocurrencies - the prices of cryptocurrencies are somewhat interdependent, which means that graphing further cryptocurrencies would provide further useful context for users. 
- Graph by Alternate Properties - I am consider using crossfilter to enable users to alternate between different types of graphs. This would be useful for users who are seeking a contextual understanding of properties of the data apart from the price.  

## Technologies Used

In terms of the languages, frameworks, libraries used.

- **HTML**, **CSS**, **Javascript**
  - Base languages used to create website
- [Cloud9](https://aws.amazon.com/cloud9/) 
    - **Cloud9** was used as the IDE for development.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** is used to render a responsive layout. Templates were used for the contact form, home, and chart pages. 
- [Git](https://git-scm.com)
    - This project uses **Git** for version control. 
- [GitHub](https://github.com/)
    - This project uses **GitHub** as a remote repository.
- [Google Fonts](https://fonts.google.com/)
    - This project uses **Google Fonts** to style fonts in the application.
- [Google Chrome - Dev Tools](https://www.google.com/chrome/)
    - This project used **Google Chrome - Dev Tools** to test responsiveness and speed up the design process.
- [CrossFilter](https://github.com/crossfilter/crossfilter)
    - This project uses **CrossFilter** exploring large multivariate datasets in the browser.
- [D3](https://d3js.org/)
    - This project uses **Data Driven Documents** D3, a JavaScript library for visualizing data with HTML, SVG, and CSS.
- [DC](https://dc-js.github.io/dc.js/)
    - This project uses **Dimensional Charting** to programmatically render charts in CSS-friendly SVG format.

## Testing

This application does not require automated testing. For manual testing, a number of scenarios have been worked through.


1. Home:
    1. Go to the "Home" page
    2. Verify that the graph is displaying correctly
2. BTC Chart:
    1. Go to the "BTC Chart" page
    2. Click on the "Show BTC Data" Button 
    2. Verify that the chart is displaying correctly
3. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
4. Navigation:
    1. Go to the each page
    2. Verify that the "CryptoGraphs808" logo redirects to the home page, from each page
    3. Verify that the nav links redirectly correctly on each page

I also conducted UX testing across a range of devices, browsers, and screen sizes. The application is designed to look the same on every device. Browser compatibility was tested on the following browsers: 
- Mozilla Firefox 
- Google Chrome

Device compatibility was testing on the following devices, using the Chrome inspect functionality:
- GalaxyS5
- Pixel
- Pixel 2XL
- IPhone 5/SE
- IPhone 6/7/8
- IPhone 6/7/8 Plus
- IPhone X
- IPad
- IPad Pro

## Deployment

The application was coded on Cloud9 on AWS. The code was committed to GITHUB at (https://github.com/kalkiboru111/CrytpoGraphs808)

The application was then deployed to GitHub Pages at (https://kalkiboru111.github.io/CrytpoGraphs808/)

The API is provided by (https://www.cryptocompare.com/)

### Credits

- I received help from the Code Institute tutors for some aspects of this project.
