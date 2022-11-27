
# BookMyShow clone

This is a BookMyshow website clone developed with ReactJs and two API's

[Deployed Link](https://book-my-show-clone-ashy.vercel.app/)

## Acknowledgements

 - [React Icons](https://react-icons.github.io/react-icons/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [Headlessui](https://headlessui.com)


## API Reference

I have used two API's in this project.
* The Movie Database API
* Razorpay API


#### Get all upcoming movies details

```http
 get('/movie/upcoming');
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `Object` | **Required**. Your API key |

#### Get All popular movies details

```http
  get('/movie/popular')
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `Object` | **Required**. Your API key |

#### Get All top rated movies details

```http
  get('/movie/top_rated');
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `Object` | **Required**. Your API key |

#### Get All details of a particular movie on clicking the Movie poster card

```http
  gget(`/movie/${id}`);
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object` | **Required**. Your API key and it takes movie id |

#### Get All the details of the Cast and Crew of the Movie 

```http
  get(`/movie/${id}/credits`);
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object` | **Required**. Your API key and it takes movie id |

#### Get All similar movies details based on movie details

```http
  get(`/movie/${id}/similar`)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object` | **Required**. Your API key and it takes movie id|

#### Get All recommendations based on movie details

```http
  get(`/movie/${id}/recommendations`)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object` | **Required**. Your API key and it takes movie id|

#### To make payment i used Razorpay in built model that appears on clicking pay
#### I wrote function LaunchRazorPay which consists a public_key that takes to razorpay model

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY` from moviedb API

`Public_KEY` from razorpay API

## Authors

- [@ Raju Gudikati](https://www.github.com/IamIsaacRaj)

## 🚀 About Me
Hi 👋, I'm Raju Gudikati

A passionate frontend developer from Hyderabad,Telangana,India

- 🌱 I’m currently learning **Full Stack Web Development**

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
