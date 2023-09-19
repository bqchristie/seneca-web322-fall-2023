const { EventEmitter } = require("events");

class LightChangeListener extends EventEmitter {}

class TrafficLight {
  constructor(config) {
    this.lights = [...config.lights];
    this.eventListener = config.eventListener;
    this.currentLightIndex = 0;
  }

  start() {
    this.updateLight();
  }

  updateLight() {
    const light = this.lights[this.currentLightIndex];
    this.eventListener.emit('light-changed', light.color);
    console.log(light.color);
    
    this.currentLightIndex = (this.currentLightIndex + 1) % this.lights.length;
    
    setTimeout(() => {
      this.updateLight();
    }, light.duration);
  }
}

const config = {
  lights: [
    { color: 'red', duration: 2000 },
    { color: 'yellow', duration: 1000 },
    { color: 'green', duration: 3000 },
  ],
  eventListener: new LightChangeListener(),
};

const trafficLight = new TrafficLight(config);
trafficLight.start();

config.eventListener.on('light-changed', (color) => {
  console.log(`The light changed to ${color}...`);
});
