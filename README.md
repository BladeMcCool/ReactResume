# A Resume Ready To Be Reformatted
It was always a lot of frustration modifying my resume because it would always mean a lot of tiny manual changes to get things to look right. I wanted to be able to style it with CSS in a browser, so I defined all the data in JSON and built a react front-end to display it.

# But how do we get it online?
The answer is as simple as CI/CD! When we push commits to master branch in this repo, the GitHub workflow will engage for us to build the React project for production deployment, bundle it into a docker image, and push that image up into the GitHub Container Registry. 

After pushing up the image with the built app we will push a commit into the website repo to update the reference to this project so that when the website ci runs after that commit that it will build a website image with the desired version of this resume app included. The website CI will then go on to ping the hosting service (Digital Ocean in this case) to re-deploy the latest version of the website.

# Whats with this layout?
The current layout is heavily inspired by [this reddit post](https://www.reddit.com/r/jobs/comments/7y8k6p/im_an_exrecruiter_for_some_of_the_top_companies/), which [looks like this](https://imgur.com/gallery/Y5sHcAI). I chose to use a sans-serif font, added Linkedin and added a bit of color (gray is a color, right?). 

# Printing notes
The current layout is intended to be a single page. If it is overflowing then the best thing to do is make it fit on one page by adjusting the font size in the css for some of the elements that are used.

Printing to PDF in modern Chrome seems to work well (2024), although I believe the output is not text searchable.

# React simple setup (done with node 21.6.2)

Quick start:

```
$ npm install
$ npm run build
````

## Development

Run Webpack with a hot reloading dev server:

```
$ npm start
```

## Testing

Run the test suite in watch mode:

```
$ npm run test
```

Run the test suite once and quit:

```
$ npm run test-once
```
