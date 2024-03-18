# A Resume Ready To Be Reformatted
It was always a lot of frustration modifying my resume because it would always mean a whole lot of tiny manual changes to get things to look right. I wanted to be able to style it with CSS in a browser, so I defined all the data in JSON and built a react front-end to display it. A great tool for learning react is Scrimba and the various lessons to be found thereon.

# Printing notes
Number one is that I couldnt make break-before, page-break-before or their variants actually do anything inside of the grid layout. I gave up after about an hour of messing with it. 

Number two is that the print-to-pdf (via windows Microsoft PDF writer) *looks way better from firefox than from Chrome*. ymmv of course.

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

# TODO
- Dockerfile for this. do the build in that
- extract resume files from that image during website docker build. be able to set the image tag to source it from
  - i kinda want to try this locally but the image wont be in the registry to pull files out of so i want to be able to use a local image too in this dockerfile 
- ci in resume repo to build and push the image to registry
- ci in resume repo to trigger build in website repo 

- nobody cares about all this old stuff. make a new version that is focussed on only new stuff. maybe find a cute way to mention that none of this stuff even existed 20 years ago but you've been doing this for 20 years.
- go on linkedin and nuke all the skills that dont matter any more.
  - before doin that purge tho, just make some more notes in this project about linkedin profile
  - mention communication skills, consensus building