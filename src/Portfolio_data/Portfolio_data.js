import carImage from '../assets/car.png';
import eshopImage from '../assets/eshop.png';
import movieImage from '../assets/movie.png';
import zaikaImage from '../assets/zaika.png';


export const Portfolio_data = [
    {
        heading: 'Car Rental',
        image: carImage,
        description: 'A car rental website build in React.js. User can book their ride as well as choose their ride based on their likings and comfort from the wide range of ride options. A form is also provided for the booking details and if they have any queries for that contact is also provided. The website is completely responsive and mobile friendly.',
        link: 'https://sandlini-car-rental.netlify.app'
    },
    {
        heading: 'E-Shop',
        image: eshopImage,
        description: 'A fully functional front end E-commerce website built in React.js. User can check products based on their linkings and can see the detail of the product. User can add the products to the cart where they can increase, decrease and remove that item from the cart. The website is fully responsive and the data persists even after the session ends.',
        link: 'https://sandlini-e-shop.netlify.app',

    },

    {
        heading: 'Movie',
        image: movieImage,
        description: 'A movie search application made in React.js for movie lovers. User can chekc the popular upcoming and latest movies. They can go to the movie detail page to get movie details. Application is fully responsive and mobile friendly.',
        link: 'https://sandlini-movie.netlify.app',

    },

    {
        heading: "Zaika",
        image: zaikaImage,
        description: 'A recipe search application built in React.js. User can search for their favorite recipe and see the cooking instructions. They can add recipes to the favorite for the later use. ',
        link: 'https://sandlini-zaika.netlify.app',
    }
]


import htmlImage from '../assets/html5.svg';
import cssImage from '../assets/css3-alt.svg';
import jsImage from '../assets/js.svg';
import reactImage from '../assets/react.svg';
import reduxImage from '../assets/redux.png';
import muiImage from '../assets/material-ui.png';

export const skillsImages = [
    { image: htmlImage, skill: "HTML 5" },
    { image: cssImage, skill: 'CSS 3' },
    { image: jsImage, skill: 'JavaScript' },
    { image: reactImage, skill: 'React.js' },
    { image: reduxImage, skill: 'Redux-toolkit' },
    { image: muiImage, skill: 'Material-UI' },
]