# Currency Converter Chrome Extension

#### Video Demo: https://drive.google.com/file/d/1srQlqX4jr9-aEJL-JVtnc9TKhOOl-AgG/view?usp=sharing

#### Description:

The Currency Converter Chrome Extension is a simple tool that allows users to convert currencies directly within their browser. It provides a user-friendly interface where users can enter the amount, select the currencies they want to convert from and to, and instantly see the converted result.

## Files:

The project consists of the following files:

1. `index.html`: This file contains the HTML structure of the extension's popup. It includes form elements for entering the amount, selecting currencies, and buttons for conversion and currency switching. The result of the conversion is displayed in the `<main>` element.

2. `exchange.js`: This JavaScript file handles the functionality of the extension. It listens for the `DOMContentLoaded` event to ensure the DOM is fully loaded before attaching event listeners. The script fetches the currency conversion data from an API by constructing the appropriate URL with the selected currencies and amount. It updates the result in the `<main>` element based on the API response. Additionally, it provides a functionality to switch the selected currencies.

3. `style.css`: This CSS file contains the styling rules for the extension's popup. It defines the layout, colors, and responsiveness of the form and result elements. It also includes media queries to adapt the layout for small screens.

4. `manifest.json`: This JSON file is required by Chrome to define the properties and behavior of the extension. It specifies the name, version, description, and the files associated with the extension. It also sets the default icon and popup HTML file.

## Design Choices:

The Currency Converter Chrome Extension was designed with simplicity and ease of use in mind. The interface is clean and intuitive, with clear labels and input fields for entering the amount and selecting currencies. The result is prominently displayed in a separate section for easy visibility.

The extension utilizes the `fetch()` function to retrieve currency conversion data from an API. This allows for real-time and accurate conversions. The API request includes the selected currencies and amount as query parameters in the URL.

To enhance user experience, the extension provides a currency switching feature. Users can simply click the "Switch" button to swap the selected currencies.

The styling of the extension is kept minimalistic and consistent with the overall aesthetic of Chrome. The colors are chosen to provide good contrast and readability. The layout is responsive, adapting to different screen sizes to ensure a pleasant experience for users on various devices.

Overall, the Currency Converter Chrome Extension aims to simplify currency conversions for users by providing a convenient and efficient tool within their browser.
