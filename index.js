const nameElement = document.getElementById("name");
const name = "Shiv Shankar";
let currentIndex = 0;

function bufferAndBlink() {
  if (currentIndex < name.length) {
    nameElement.textContent += name[currentIndex];
    currentIndex++;
    setTimeout(bufferAndBlink, 150); // Adjust the delay as needed
  } else {
    nameElement.classList.add("blink");
    setTimeout(() => {
      nameElement.classList.remove("blink");
    }, 1000); // Adjust the duration the blinking effect should last
  }
}

bufferAndBlink();
