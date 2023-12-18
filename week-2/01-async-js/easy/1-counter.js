// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function timer(seconds) {
  let second = 0;
  var interval = setInterval(() => {
    if (second == seconds) {
      clearInterval(interval);
      return;
    }
    console.log(++second + " second");
  }, 1000);
}

timer(12);
