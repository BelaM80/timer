import "./style.css";
import { createElement } from "../src/utils/elements";
import playButton from "../src/assets/play.svg";

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

document.body.appendChild(createClockElement());
