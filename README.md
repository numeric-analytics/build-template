#Symantec Build File
> Grunt-based build

##Overview
* Visit [NodeJS.org](https://nodejs.org/download/) to install Node & npm.
* Run `npm install -g grunt-cli` to install the Grunt command line interface
* Navigate to folder where Gruntfile.js is located (trunk), and run `npm install && grunt`
* Be sure to only checkin changes to `/src` & `/dist` folders, not the `/node_modules` or `/.tmp` folders

##Config
* `package.json`: Bump version when updating. Version is used in prod code banners.
* `Gruntfile.js - yeomanConfig`: Update local folder structures and variables: including the **mainfile** file name. 

##Build
* `grunt`: concatenates and minifies all source files; duplicates **mainfile**.