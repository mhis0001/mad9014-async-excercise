document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", handleClick);
}

function handleClick() {
  // Generate a random number
  const random = Math.round(Math.random());

  // Choose which function to call based on the random number
  if (random === 0) {
    randomColorPromise()
      .then((color) => {
        document.body.style.backgroundColor = color;
      })
      .catch((err) => console.error(err));
  } else {
    randomMessagePromise()
      .then((message) => {
        const p = document.createElement("p");
        p.textContent = message;
        document.querySelector("main").appendChild(p);
      })
      .catch((err) => console.error(err));
  }
}

function randomColorPromise() {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 1000; // Between 1–2 seconds
    setTimeout(() => {
      const color = getRandomHexColor();
      resolve(color);
    }, delay);
  });
}

function randomMessagePromise() {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 1000; // Between 1–2 seconds
    setTimeout(() => {
      const messages = [
        "You clicked!",
        "Async success!",
        "Promise fulfilled!",
        "Another message appeared!",
      ];
      const message =
        messages[Math.floor(Math.random() * messages.length)];
      resolve(message);
    }, delay);
  });
}

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}
