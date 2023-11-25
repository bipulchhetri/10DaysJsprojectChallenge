let [sec, min, hs] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;

function stopwatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hs++;
    }
  }
  let h = hs < 10 ? "0" + hs : hs;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  time.innerHTML = h + ":" + m + ":" + s;
}
function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function watchstop() {
  clearInterval(timer);
}
function watchreset() {
  clearInterval(timer);
  [sec, min, hs] = [0, 0, 0];
  time.innerHTML = "00:00:00";
}
