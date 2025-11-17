hosttScore = 0;
hostScoreBoard = document.getElementById("hostPoints");

function hostOnePoint() {
  hosttScore += 1;
  hostScoreBoard.textContent = hosttScore;
  leader();
}
function hostTwoPoints() {
  hosttScore += 2;
  hostScoreBoard.textContent = hosttScore;
  leader();
}
function hostThreePoints() {
  hosttScore += 3;
  hostScoreBoard.textContent = hosttScore;
  leader();
}

guestScore = 0;
guestScoreBoard = document.getElementById("guestPoints");

function guestOnePoint() {
  guestScore += 1;
  guestScoreBoard.textContent = guestScore;
  leader();
}
function guestTwoPoints() {
  guestScore += 2;
  guestScoreBoard.textContent = guestScore;
  leader();
}
function guestThreePoints() {
  guestScore += 3;
  guestScoreBoard.textContent = guestScore;
  leader();
}
function reset() {
  hosttScore = 0;
  guestScore = 0;
  hostScoreBoard.textContent = hosttScore;
  guestScoreBoard.textContent = guestScore;
}

function leader() {
  guestPoints = parseInt(document.getElementById("guestPoints").textContent);
  hostPoints = parseInt(document.getElementById("hostPoints").textContent);
  if (guestPoints > hostPoints) {
    document.getElementById("guestPoints").style.color = "green";
    document.getElementById("hostPoints").style.color = "red";
  } else if (guestPoints == hostPoints) {
    document.getElementById("hostPoints").style.color = "red";
    document.getElementById("guestPoints").style.color = "red";
  } else {
    document.getElementById("hostPoints").style.color = "green";
    document.getElementById("guestPoints").style.color = "red";
  }
}

let seconds = 60;
let minutes = 20;
second = document.getElementById("second");
minute = document.getElementById("minute");
function timer() {
  minutes -= 1;
  if (minutes < 10) {
    minute.textContent = `0${minutes}`;
  } else {
    minute.textContent = minutes;
  }

  let intervalId = setInterval(function seconds_down() {
    seconds -= 1;
    second.textContent = seconds;
    if (seconds < 10) {
      second.textContent = `0${seconds}`;
    }
    if (seconds == 0) {
      seconds = 60;
      minutes -= 1;
      minute.textContent = minutes;
      if (minutes < 10) {
        minute.textContent = `0${minutes}`;
      }
      if (minutes == 0) {
        clearInterval(intervalId);
        seconds = 60;
        minutes = 20;
        second.textContent = seconds;
        minute.textContent = `0${minutes}`;
      }
    }
  }, 1000);
}
