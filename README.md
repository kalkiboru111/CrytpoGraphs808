
# CryptoGraphs808

The purpose of this project is to provide users with graphs which track the movements of the cryptocurrency markets, specifically with respect to the closing price of Bitcoin on any given day. This is potentially of interest to any site user with an interest in cryptocurrency, and of special interest to cryptocurrency investors. 
 
## UX
 
This site is for users who are seeking data. It is therefore a "no frills" site, without any extraneous aesthetic or functional features. The goal of this users is simple: they want to understand the current state of the Bitcoin market. 

The user stories are fairly generic and self-explanatory:
- As a Bitcoin investor (or as any interested observer), I want to understand a) the current price of Bitcoin and b) how to parameterize that price with respect to the recent past, so that I can assess the price and relative performance of Bitcoin. This site enables me to do this by providing a graphical representation of the price of Bitcoin over time (per week).
- As a Bitcoin investor  (or as any interested observer), I want further specifics regarding the performance of Bitcoin, so that I can make decisions regarding my investments. I can do this by clicking on the "Data" button whcih provides me with a chart with the specifics. 

## Features

This project only has as many features as are necessary for data-driven users to derive utility from the site.
 
### Existing Features
- Line Graph - allows users to contextualize the price of Bitcoin in an intuitive way, by presenting them with the graph which shows fluctuations in the price of Bitcoin over time. 
- Data Chart - allows users to investigate the data more closely by clicking on the "data" button, which reveals a chart with a structured display of the properties of the data. 

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
- [Jasmine](https://jasmine.github.io/)
    - This project uses **Jasmine** to run automatic tests on all the JavaScript and jQuery code.
- [Git](https://git-scm.com)
    - This project uses **Git** for version control. 
- [GitHub](https://github.com/)
    - This project uses **GitHub** as a remote repository.
- [Google Fonts](https://fonts.google.com/)
    - This project uses **Google Fonts** to style fonts in the application.
- [FontAwesome](https://fontawesome.com/)
    - This project uses **FontAwesome** for navigation icons.
- [Google Chrome - Dev Tools](https://www.google.com/chrome/)
    - This project used **Google Chrome - Dev Tools** to test responsiveness and speed up the design process.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X# CrytpoGraphs808
