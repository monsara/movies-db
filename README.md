# Movies-DB

https://monsara.github.io/movies-db/

Add logic to the page with movie database according to the task from the course
on Udemy: "A complete course in JavaScript + React - from scratch to results"
["A complete course in JavaScript + React - from scratch to results"](https://www.udemy.com/course/javascript_full/)

## Browser Support

New browsers — Firefox, Chrome, Opera, Microsoft Edge and IE 11, newer versions
of Android/iOS, etc.

## Used techniques

### HTML/CSS

- BEM methodology
- SASS/SCSS (variables, SCSS modules)

### JavaScript

- Remove all adverts from the page (right-hand side of the website)
- Change the genre of the film from "comedy" to "drama".
- Change the background of the movie poster to "bg.jpg". It's in the img folder.
  It should be JS only.
- I want to generate a list of films on the page based on the data contained in
  JS file. Sort them alphabetically
- Add numbering of the output movies
- Implement functionality that after filling in the form and pressing the
  "Confirm" button - the new movie is added to the list. The page should not
  reload.The new movie should be added to movieDB.movies.
- If movie name is more than 21 characters - trim it and add three dots
- If you click on trash - the item will be removed from the list (difficult)
- If the form is checked "Make Favorite" - in the console display a message:
  "Add a favorite movie".
- Films should be sorted alphabetically

## Instruments

- Git
- Npm
- Gulp
- Chrome DevTools
- VS Code

## Developing

The project uses the basic gulp-builder for layout
[Gulp Starter Kit](https://github.com/luxplanjay/gulp-starter-kit)

- Collects and optimizes HTML, Sass, JS, images and fonts
- Uses gulp-rigger to work with html chunks
- Includes configuration files for various linters
- All errors are logged to the console
- Adds vendor prefixes
- Optimization Media Queries
- There is a development and assembly mode in prod
- Automatic Deployment on GitHub Pages

[Instruction for use Gulp Starter Kit](https://github.com/luxplanjay/gulp-starter-kit)

### Run site locally

Before using the Gulp Starter Kit, make sure that Gulp and Node.js are installed
on your computer

To build the site on your PC, run the following commands in the terminal:

- Clone the repository on your computer

```shell
git clone https://github.com/monsara/generator-hub.git
```

- Go to the project folder

```shell
cd generator-hub
```

- Install dependencies

```shell
npm install
```

- Run the build project

```shell
npm start
```

- In the browser tab go to [http://localhost:1234](http://localhost:1234)
