import "./style.css";
import { createElement } from "../src/utils/elements";
import playButton from "../src/assets/play.svg";
import pauseButton from "../src/assets/pause.svg";

let IntervalId;

const createClockElement = () => {
  const playButtonElement = createElement("img", {
    src: playButton,
  });

  const timerBox = createElement("div", {
    className: "timerBox",
    children: [
      createElement("button", {
        className: "timerBox__button",
        children: [playButtonElement],

        onclick: () => {
          const inputValue = document.querySelector(".timerBox__input").value;
          createCountdownTimer(inputValue);
        },
      }),
      createElement("input", {
        className: "timerBox__input",
      }),
      createElement("span", {
        className: "timerBox__countdown",
      }),
    ],
  });
  return timerBox;
};

function createCountdownTimer(seconds) {
  document.querySelector(".timerBox__countdown").textContent = seconds;

  const intervalId = setInterval(function () {
    seconds--;
    document.querySelector(".timerBox__countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(intervalId);
  }, 1000);
}
document.body.appendChild(createClockElement());
