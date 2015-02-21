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

1. Open a browser and visit localhost:8080/index.min.html
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and run it through PageSpeed Insights, accessing the index.min.html file! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

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

### Other Optimizations

Grunt is being used to minimize and inline css, js, and html for both the
pizza and index files.  Grunt can be executed by first installing its
dependencies using `npm install`, then grunt can be executed
using the `grunt` command.

For both index and pizza files, `.min.html` and `.dist.html` files have been
created.  The `.dist.html` files inline and minimize css and js as
appropriate.  The `.min.html` further minimize the html files.  The `.min.html`
files should be used, the `.dist.html` files are just provided to make it a
little more obvious what's going on.