## MYTHERESA CASE BUSINESS
This is a technical test using a business case.

## HOW TO
1. Clone this repository locally and cd into it
2. create a .env file and put
```
REACT_APP_API_KEY=[the key I'll send in an email]
```
3. Run `npm install`
4. For the app, run `npm start` and in your browser go to `http://localhost:3000/`
5. To run tests, `npm test`

### MAIN REQUIREMENTS
- React
- No Typescript
- Sass for styling
- Use Webpack
- Use an open API, in my case, it's [omdbapi](https://www.omdbapi.com/)

### TEST REQUIREMENTS
- Homepage with 3 carousels of items: in this case, 3 movies from the same theme
- Each carousel is a different category, showing 3 movies at the time from the same theme
- It has a link that when clicked, takes us to a detail page
  - It has a description, an image and a button
  - Button triggers and add to wishlist action
- Detail page has differences depending on category
  - font
  - button
- Wishlist section where all the items added can be seen

### My implementation
- Navigation is accomplished with react-router
- Testing is done with React-Testing-Library
- Carousel has buttons for next and previous
- Fully responsive
- Wishlist items are added and read from to `sessionStorage`
- The wishlist has a reset button