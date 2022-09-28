# Asset Structure

The assets of the project are divided into general assets and assets of the components.

* `/components` contains both `js` and `scss` files for specific functionalities
* `/js/`  contains a `head` and `body` JavaScript file to import the used components **(make sure to add new JavaScript components there)**
*  `/scss/` imports all the styles needed from each individual component into a single `scss` file **(make sure to import styles of new components there)**

# Build Process

The build pipeline uses the files contained in `js` and `scss` to bundle and minimize the respective files into `/Resources/Public/JavaScript/` and  `/Resources/Public/Css/`.

## Build commands

`npm run watch`
* Builds the assets and subsequently monitors changes to any `js`, `scss` and `svg` files in the `/Build/` directory. Every change triggers a new build.

`npm run build`
* runs the build pipeline once.
