#Generic Build File
> Grunt-based build, minification, etc...

##Overview
* Visit [NodeJS.org](https://nodejs.org/download/) to install Node & npm.
* Run `npm install -g grunt-cli` to install the Grunt command line interface
* Navigate to folder where Gruntfile.js is located, and run `npm install && grunt`
* Note, the `/node_modules` and `/.tmp` folders are ignored by Git, so don't try to commit to them :)

##Config
* `Gruntfile.js - yeomanConfig`: Update local folder structures and variables: including the **mainfile** file name.
 * `package.json`: (optional) Bump version when making a release. Version is used in prod code banners. At the present time, this is not a vital part of our workflow.

##Usage
* Edit files in `/src`
* Run `grunt` to build files locally
* Commit files
* Push commits to remote (Github)
