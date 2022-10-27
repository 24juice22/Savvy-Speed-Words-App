# Getting Started with Savvy Speed Words App

## How to Play

If you are familiar with the rules of the popular online game "Wordle" then you know the rules for Savvy Speed Words. However, be aware that the color scheme is different. Correct letters are pink, letters that are in the incorrect position are blue, and letters that are not in the word are gray.

### `Rules`

- You have 6 tries to correctly guess the random word.
- Each guess must be a valid 5 letter word, otherwise an error message will be displayed. If your word is invalid, you can delete letters and retry entering the word.
- The color of the boxes will show you whether your letter was in the correct position, in the wrong position, or not in the word at all.

Example:

![Game Screenshot](./src/images/colorsScreenshot.png)

- Letter A is in the correct position (PINK)
- Letters L and N are in the word, but in the wrong position (BLUE)
- Letters E and R are not in the word (GRAY)

The game either ends when you correctly guess the number of words that you chose to solve (1, 3, 5, or 10) or you fail to guess a word within 6 tries.

If you chose to guess more than 1 word, then after you correctly guess the first word, a new random word will be chosen and you will have to guess it. This continues until you have solved the number of words that you chose.

### `Typing`

- In order to type your letters you can either use your keyboard or the one provided within the app.
- Use the "Backspace" or "Delete" Keys to delete a letter if using your keyboard.
- Click "Enter" to submit your word.

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
