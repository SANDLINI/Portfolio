import carImage from '../assets/car.png';
import eshopImage from '../assets/eshop.png';
import movieImage from '../assets/movie.png';
import trippyImage from '../assets/trippy.png';


export const Portfolio_data = [
    {
        heading: 'Car Rental',
        image: carImage,
        description: 'A car rental front end project made in React.js and material UI, which is fully responsive. I have used all the advanced concepts mainly Routing and client side validations and added many other functionality to make the project user friendly.',
        link: 'https://sandlini-car-rental.netlify.app'
    },
    {
        heading: 'E-Shop',
        image: eshopImage,
        description: 'A fully functional front end E-commerce website built in React.js and for styling Material UI ( MUI ) is used and for state management redux-toolkit is used. The website is fully responsive and the data persists even after the session ends. All the advanced features are included in this project.',
        link: 'https://sandlini-e-shop.netlify.app',

    },

    {
        heading: 'Movie',
        image: movieImage,
        description: 'A beginner React.js project. TMDB movie API is used to fetch data. Project is built in React.js and for styling I have used material UI. Project is fully responsive and mobile friendly.',
        link: 'https://sandlini-movie.netlify.app',

    },

    {
        heading: "Trippy",
        image: trippyImage,
        description: 'A beginner project made in React js with material UI. The project is fully responsive. Many components have been reused and data is passed down through props. All major concepts of React has been used mainly focused on reusable components.',
        link: 'https://sandlini-trippy.netlify.app',
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