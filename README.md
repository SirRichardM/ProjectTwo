This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Features

- Homepage - featuring images and stylized css. 
- "Classics" page - this will have photos/posters of classic horror movies, when clicked they will lead to information including synopsis, cast, stills that are applicable, posterrs. Critical reception. User input for whether they like it or not. A comments section for people to leave brief idea of how they feel. 
- at the bottom of "classics' page will be similar movies that are lesser known - i want to have three tiers of obscurity - classics, lesser knowns and the very obscure (maybe a fourh tier that has absolute garbage basically unknown).
- Second tier will have other similar movie link butts these will be the very obscure list.
- movies will have tags according to the "classic" they relate to. 
- when you click on the lower levels - when it brings you to a "main" page with information - bottom will be a list of other movies in the genre.
- will also have a horror anime section - will be small but want the site to be all things horror.
- Horrow shows as well.


###########

A search section that just has a link to movie database to search for horror. No links as this will be hard to decipher.

- To incoprorate video games into this I will also have a section for video games that correspond to the horror movies. Example being evil dead, friday the 13th, the thing, silent hill, resident evil (use isle of the dead, dead island for one somehow). If the user clicks on a classic that has a video game associated it will show up as well.

-Video games will have same features as horror movies

MVP : Functional click to get information on movies and components leading into new ones

##############

Stretch Goals -

Be able to have people become members and require it to leave comments so only qualifed horror buffs can join and it isnt flooded with noobs. 

Expand to classic horror comic books (and I guess new ones to be fair) as well as books. 

Have cross platform suggestions with similarties. Ideally would be nice to create my own tags for things.

Have an All section, although this is incredibly easy and  kind of  deters from the interactivity of discovering things through clicking.


![](./horrormockup.jpg)

![](./gamesmock.jpg)

|__ components/
      - Cover.js
      - Nav.js
      - Movies.js - will have api call
      - Lessknown.js 
      - Obscure.js
      - Games.js -
      - Footer.js