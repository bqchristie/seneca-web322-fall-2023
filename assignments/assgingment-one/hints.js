// Event Emmitter
const {EventEmitter} = require("events")

const trafficLightsEventEmitter = new EventEmitter()

// on / emit

// Structuring data
const lights = [
    {color:"red", duration:5000},
    {color:"yellow", duration:2000},
    {color:"green", duration:5000},
]


let colorIdx = 0


// Create a changle color methods
function changeColor() {
    const light = console.log(lights[0].color)
    console.log(lights[colorIdx].color)
    
/
//     // if(colorIdx==3) {
//     //     colorIdx = 0;
//     // }
// }


// setInterval ot setTimeout
changeColor()