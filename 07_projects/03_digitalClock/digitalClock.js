const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock")

// Run the code every 1 second
setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
