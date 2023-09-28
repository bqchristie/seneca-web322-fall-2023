const EventEmitter = require('events');

// Create an instance of EventEmitter
const trafficLightEmitter = new EventEmitter();

const colors = ['Red', 'Yellow', 'Green'];
const durations = [5000, 1000, 3000]

let currentIndex = 0;

function changeColor() {
  // Emit the "colorChange" event with the current color
  trafficLightEmitter.emit('colorChange', colors[currentIndex]);
  
  // Use console.log to display the current color
  console.log(`Current color: ${colors[currentIndex]}`);
  
  // Update the index to switch to the next color
  currentIndex = (currentIndex + 1) % colors.length;
  setTimeout(changeColor, durations[currentIndex])
}

// Start the traffic light cycle
// setInterval(changeColor, 5000); // Change color every 5 seconds
changeColor()
