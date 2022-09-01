# Portfolio

This intends to be my portfolio, available on: [GonGarce.io](https://gongarce.io).

## Micro Frontends

This project was generated using [Single SPA](https://es.single-spa.js.org/).

I wanted to test how micro frontends work and I decided I would make a new project to try it and it was time to make a personal site, kill two birds with one stone.

### Project Structure

Here you can find 6 projects, each one of them has an unique purpose and, actually, they should be in different repos but for simplicity I decided
to put all of them together.

- root-html: This makes the magic, it's the entry point of the web site and saves all the dependencies. This is the only one who knows everyone, and also has third party dependencies.
- styleguide: When we talk about micro frontends we imagine tiny components together doing a bigger site work, like small pieces of a puzzle.
  But they must have similar style, this project expose the global styles of the application to all the components.
- api: When we use SPA we can make global services that keeps data on memory for all the lifecycle of our app, but with this approach, when a micro is out of the
  scene all the data it had on memory goes away with him. That's great for our app! But what if you need some persistent data for your user session,
  that's why we have this component, it's shared by all the components and always alife.
- nav: The first micro component, this is the navigation menu of the web.
- home: The home page
- showcase: The portfolio page
