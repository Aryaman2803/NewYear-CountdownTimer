const newYear = "1 Jan 2021";
const daysBox = document.querySelector("#days");
const hoursBox = document.querySelector("#hours");
const minutesBox = document.querySelector("#minutes");
const secondsBox = document.querySelector("#seconds");
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalseconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor((totalseconds / 3600) % 24);
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds % 60);

  //   console.log(days, hours, minutes,seconds );
  daysBox.innerText = days;
  hoursBox.innerText = hours;
  minutesBox.innerText = minutes;
  secondsBox.innerText = seconds;
}
countdown();

setInterval(countdown, 1000);
