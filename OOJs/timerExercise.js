class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.tick++);
      if (this.tick > 4) this.stop();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    console.log("Timer stopped");
  }
}

const newTimer = new Timer();
newTimer.start();
// newTimer.stop();

// class Timer {
//   constructor() {
//     this.tick = 0;
//     this.timerId = null;
//   }

//   start() {
//     this.timerId = setInterval(function () {
//       console.log(this.tick++);
//     }, 1000);
//   }
// }
