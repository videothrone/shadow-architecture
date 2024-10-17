# Shadow Architecture

"Shadow Architecture" is my final project for [SPICED Academy](https://www.spiced.academy/program/full-stack-web-development/). The project was done in about a week and is a single-page React website, that shows curated "abandoned places" in Berlin via the Google Maps API.

<b>Note:</b> This project was hosted for years on Heroku, before their free tier shut down. At this point the code and libraries are years old, out of date and the whole project needs major refactoring, since it can't be just transfered into a new React environment as is. Since I want to preserve what I did at the bootcamp as a moment in time, you can find a rebuild (at this time still a work-in-progress) of this project here → [Shadow Architecture Redux](https://github.com/videothrone/shadow-architecture-redux)

---

## Siteflow

![Shadow Architecture](siteflow.gif)

![Shadow Architecture](siteflow2.gif)

![Shadow Architecture](siteflow3.gif)

## Tech

HTML, CSS, Node.js / Express, React, React Hooks, Bundle.js, react-google-maps, Google Maps API

## Features

-   Users can check out twelve different locations, either by clicking on the markers on the map or by scrolling down and clicking on a location card.

-   The map's info window shows a thumbnail and short description, users can click on the icon and will be redirected to a Google route tab, where they can enter their location. They can also click on "Explore more..." which opens up an overlay with more content.

-   The overlay can also be accessed by clicking on the location cards and presents a bigger image, which can be enlarged by clicking on it. It also includes more information about the place and another route redirect icon.

## Goals while doing the project

-   Plan and execute an substantial and actionable idea of choice in a week

-   Get to know the Google Maps API, including working with the react-google-maps NPM package, customizing the design and the UI to a certain aesthetic choice

-   Make a "slick" and modular React based site that's working fine on Desktop and most mobile devices and can be extended easily further down the line

-   Pull all content dynamically from a central JSON file and handle the subsequent design challenges

