# React Weather Application

Process for setup:
- copy ReactBoilerplate project into separate directory (ReactWeather)
- create PhpStorm project around directory

Initialize npm and create package.json file (if done so previously, just update current package.json file):
- `$ npm init`
- (follow prompts)


Allow use of express node web server (--save: saves dependencies to package.json file):
- `$ npm install express@4 --save`
- edit /server.js accordingly (later configuration for deployment to Heroku added)


Allow the use of webpack (globally, for access anywhere in terminal):
- `$ sudo npm install -g webpack@1.12.3`


Allow use of React and React-DOM:
- `$ npm install --save react@0.14.7 react-dom@0.14.7`


Allow use of Babel and webpack (locally):
- `$ npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0`
- (devDependencies object now in package.json)
- edit index.html:
  ```html
  <script src="bundle.js"></script>
  ```
- edit webpack.config.js, add 'output' and 'resolve' objects (see past projects)


Allow use of babel-loader and JSX (compiles JSX code to ES2015 code):
- edit webpack.config.js
  - add 'module' object:
    ```javascript
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
    ```

Allow the use of React Router:
- `$ npm install react-router@2.0.0 --save`
- edit app/app.jsx to integrate react-router (see past projects)


Allow the use of jQuery and Foundation-Sites:
- `$ npm install css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0 --save-dev`
- `$ npm install foundation-sites@6.2.0 --save-exact --save-dev` (to solve potential conflict with Foundation ^6.2.0)
- edit webpack.config.js:
  - set 'entry' to array:
    ```javascript
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
    ]
    ```
  - the above scripts aren't configured to be loaded via webpack, so we have to use the script loader module (thus, the script!)
  - add 'externals' object and 'plugins' array beneath 'entry':
    ```javascript
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ]
    ```


Allow the compilation of SCSS files:
- `$ npm install sass-loader@3.1.2 node-sass@3.4.2 --save-dev`
- rename extension of /styles/app[.css] to [.scss]
- edit app/app.jsx to have:
  ```javascript
  require('style!css!sass!applicationStyles');
  ```
- edit webpack.config.js (change extension from .css to .scss):
  ```javascript
  applicationStyles: 'app/styles/app.scss'
  ```



---
To compile and serve app, have these two programs running concurrently:
- `$ webpack -w`
- `$ node server.js`
- go to [Link](http://localhost:3000)

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/t/lecture/4722346?start=0