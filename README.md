# Algorithm-Visualizer
This is just a basic algorithms visualizer consisting of 6 sorting algorithms and 4 graph algorithms. 
Other than HTML, CSS and JS, Jquery and Bootstrap are used in this project. The filesystem has been divided into modules.

The css folder contains a bootstrap folder for all the Bootstrap classes and a style.css file

The js folder contains 2 seperate folders Graphs for all the graph code and Sorting for all the sort code and an app.js module acting as a controller between them and the view.
In the Graphs folder, Algorithms.js contains all the graph algorithms that are called and controlled by Graph.js and same is the case with Sort.js and Algorithms.js

Iterator.js module contains all the code related to adding and removing the colorful iterator on the vertical bars during sorting process.

Sound.js has the code for playing a sound of specified frequency for 20ms which is called in Algorithm.js for producing sound for every iteration.

The app is hosted at - https://infinity052.github.io/Algorithm-Visualizer/
