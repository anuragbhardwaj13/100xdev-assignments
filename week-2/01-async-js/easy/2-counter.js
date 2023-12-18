// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function timer(seconds) {
  let count = 0;
  function display() {
    if (count < seconds) {
      console.log(++count + " seconds");
      setTimeout(display, 1000);
    }
  }
  display();
}
timer(5);
