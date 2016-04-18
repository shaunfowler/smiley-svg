# smiley-svg
An Angular component that renders a smiley face in SVG. The components `percentage` parameter determines how happy or sad the face appears.


## Dependencies

`npm install && bower install`

## Usage

Include the module in app:

`angular.module('YourAppModule', ['SmileySvg']);`

Add to one of your templates:

`<smiley percentage="50"></smiley>`

Note: `percentage` can range from `-100` to `+100`

## Screenshots

![Happy Face](img/happy.png) ![Sad Face](img/sad.png)
