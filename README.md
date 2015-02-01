## Website Performance Optimization portfolio project

### Running The Application

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and run it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#### Part 2: Optimize Frames per Second in pizza.html

Open views/pizza.html in chrome.  Scroll and adjust the pizza size using the slider
on the page.

### Optimizations in main.js

#### Pizza Resize

I refactored the resize code to use smallPizza, mediumPizza and largePizza
css classes instead of setting width and height on the divs directly.  Resize
time is under 1ms.

#### Scrolling

I moved an expensive scrollTop lookup/calculation out of the loop.