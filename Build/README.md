# Structure of the Assets

The assets of the project are divided into general assets and assets of the components. The Components folder contains Javascript and Scss files for specific functions. Under /js/ there are two JavaScript files which contain only imports. The same principle applies to the qsa.scss file in the /scss/ folder.
With the command` npm run build-typo3`, the assets are built into the directory /Resources/Public/.

## Build commands

`npm run watch`
* Builds the assets and subsequently monitors changes to any `js`, `scss` and `svg` files in the `/Build/` directory. Every change triggers a new build.

`npm run build`
* runs the build pipeline once.
