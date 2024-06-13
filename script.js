//Game constants and variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("nom.mp3");
foodSound.volume = 0.6;
const gameOverSound = new Audio("gameover.mp3");
const musicSound = new Audio("music.mp3");
musicSound.volume = 0.2;

let speed = 3;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 12, y: 11 }];
food = { x: 8, y: 6 };
bailout = { x: 10, y: 2 };
subsidy = { x: 6, y: 11 };
aid = { x: 3, y: 5 };

//Game functions
function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function isCollide(snake) {
  // If you bump into yourself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      speed = 3;
      return true;
    }
  }
  //If you bump into the wall
  if (
    snake[0].x >= 14 ||
    snake[0].x <= 1 ||
    snake[0].y >= 14 ||
    snake[0].y <= 1
  ) {
    speed = 3;
    return true;
  }
}

// Display the modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function gameEngine() {
  //Part1: Updating the snake array
  musicSound.play();
  if (isCollide(snakeArr)) {
    musicSound.pause();
    gameOverSound.play();
    inputDir = { x: 0, y: 0 };
    // Open the modal
    openModal();

    // Add event listener to close the modal on any key press
    document.addEventListener('keydown', closeModalOnKeyPress);
    gameOverSound.play();
    snakeArr = [{ x: 2, y: 5 }];
    score = 0;
  }

  // Function to close the modal on any key press
function closeModalOnKeyPress() {
  closeModal();
  // Remove the event listener to avoid closing the modal multiple times
  document.removeEventListener('keydown', closeModalOnKeyPress);
}

  // If you have eaten the food, increment the score and regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    setTimeout(function() {
        foodSound.pause();
        foodSound.currentTime = 0; // Reset the audio to the beginning
    }, 510);
    score += 1;
    speed += .4;
    if (score > highscoreval) {
      highscoreval = score;
      localStorage.setItem("Highscore $", JSON.stringify(highscoreval));
      highscoreBox.innerHTML = "HighScore: $" + highscoreval + " Trillion";
    }
    scoreBox.innerHTML = "Debt: $" + score + " Trillion";
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 13;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // If you have eaten the bailout, increment the score and regenerate the bailout
  if (snakeArr[0].y === bailout.y && snakeArr[0].x === bailout.x) {
    foodSound.play();
    setTimeout(function() {
        foodSound.pause();
        foodSound.currentTime = 0; // Reset the audio to the beginning
    }, 510);
    setTimeout(function() {
        foodSound.pause();
        foodSound.currentTime = 0; // Reset the audio to the beginning
    }, 200);
    score += 1;
    speed += .4;
    if (score > highscoreval) {
      highscoreval = score;
      localStorage.setItem("Highscore $", JSON.stringify(highscoreval));
      highscoreBox.innerHTML = "HighScore: $" + highscoreval + " Trillion";
    }
    scoreBox.innerHTML = "Debt: $" + score + " Trillion";
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 13;
    bailout = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // If you have eaten the subsidy, increment the score and regenerate the subsidy
  if (snakeArr[0].y === subsidy.y && snakeArr[0].x === subsidy.x) {
    foodSound.play();
    setTimeout(function() {
        foodSound.pause();
        foodSound.currentTime = 0; // Reset the audio to the beginning
    }, 510);
    score += 1;
    speed += .4;
    if (score > highscoreval) {
      highscoreval = score;
      localStorage.setItem("High Score $", JSON.stringify(highscoreval));
      highscoreBox.innerHTML = "High Score: $" + highscoreval + " Trillion";
    }
    scoreBox.innerHTML = "Debt: $" + score + " Trillion";
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 13;
    subsidy = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // If you have eaten the aid, increment the score and regenerate the aid
  if (snakeArr[0].y === aid.y && snakeArr[0].x === aid.x) {
    foodSound.play();
    setTimeout(function() {
        foodSound.pause();
        foodSound.currentTime = 0; // Reset the audio to the beginning
    }, 510);
    score += 1;
    speed += .4;
    if (score > highscoreval) {
      highscoreval = score;
      localStorage.setItem("High Score $", JSON.stringify(highscoreval));
      highscoreBox.innerHTML = "High Score: $" + highscoreval + " Trillion";
    }
    scoreBox.innerHTML = "Debt: $" + score + " Trillion";
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 13;
    aid = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;
  //Part2: Display the Snake and Food
  board.innerHTML = "";
  // Display the Snake
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index == 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  // Display the Food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  const textyElement = document.createElement("span");
  textyElement.textContent = "Foreign War";
  textyElement.classList.add("food-text", "problems");
  foodElement.appendChild(textyElement);
  board.appendChild(foodElement);

  // Display the Bailout
  bailoutElement = document.createElement("div");
  bailoutElement.style.gridRowStart = bailout.y;
  bailoutElement.style.gridColumnStart = bailout.x;
  bailoutElement.classList.add("bailout");
  const textElement = document.createElement("span");
  textElement.textContent = "Bailout";
  textElement.classList.add("bailout-text", "problems");
  bailoutElement.appendChild(textElement);
  board.appendChild(bailoutElement);

  // Display the Subsidyout
  subsidyElement = document.createElement("div");
  subsidyElement.style.gridRowStart = subsidy.y;
  subsidyElement.style.gridColumnStart = subsidy.x;
  subsidyElement.classList.add("subsidy");
  const textqElement = document.createElement("span");
  textqElement.textContent = "Subsidy";
  textqElement.classList.add("subsidy-text", "problems");
  subsidyElement.appendChild(textqElement);
  board.appendChild(subsidyElement);

  // Display the Aid
  aidElement = document.createElement("div");
  aidElement.style.gridRowStart = aid.y;
  aidElement.style.gridColumnStart = aid.x;
  aidElement.classList.add("aid");
  const textwElement = document.createElement("span");
  textwElement.textContent = "Foreign ''Aid''";
  textwElement.classList.add("problems");
  aidElement.appendChild(textwElement);
  board.appendChild(aidElement);
}

let highscore = localStorage.getItem("highscore");
if (highscore === null) {
  highscoreval = 0;
  localStorage.setItem("High Score", JSON.stringify(highscoreval));
} else {
  highscoreval = JSON.parse(highscore);
  highscoreBox.innerHTML = "High Score: $" + highscore + " Trillion";
}
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 };
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

upButton.addEventListener('click', () => {
  inputDir = { x: 0, y: -1 };
});

downButton.addEventListener('click', () => {
  inputDir = { x: 0, y: 1 };
});

leftButton.addEventListener('click', () => {
  inputDir = { x: -1, y: 0 };
});

rightButton.addEventListener('click', () => {
  inputDir = { x: 1, y: 0 };
});

async function fetchNationalDebt() {
  const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?format=json&sort=-record_date&limit=1';
  
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching national debt data:', error);
      return null;
  }
}

async function displayNationalDebtInFedHighScoreBox() {
  const debtData = await fetchNationalDebt();
  console.log('Debt Data:', debtData);
  if (debtData && debtData.data) {
      const firstDataRow = debtData.data[0];
      if (firstDataRow) {
          const totalPublicDebtOutstanding = firstDataRow.tot_pub_debt_out_amt;
          if (totalPublicDebtOutstanding !== undefined && totalPublicDebtOutstanding !== null) {
              console.log('Total Public Debt Outstanding:', totalPublicDebtOutstanding);
              const firstTwoDigits = totalPublicDebtOutstanding.toString().slice(0, 2);
              console.log('First Two Digits:', firstTwoDigits);
              const fedHighScoreBox = document.getElementById('fedhighscoreBox');
              console.log('Fed High Score Box:', fedHighScoreBox);
              if (fedHighScoreBox) {
                  fedHighScoreBox.textContent = `Fed's Score: $${firstTwoDigits} Trillion`;
              } else {
                  console.error('Fed High Score Box not found.');
              }
          } else {
              console.error('Total public debt outstanding data not available or null/undefined.');
              const fedHighScoreBox = document.getElementById('fedhighscoreBox');
              if (fedHighScoreBox) {
                  fedHighScoreBox.textContent = `Fed's Score: Data Not Available`;
              } else {
                  console.error('Fed High Score Box not found.');
              }
          }
      } else {
          console.error('No data rows found.');
      }
  } else {
      console.log('Failed to fetch national debt data or data format is incorrect.');
  }
}

displayNationalDebtInFedHighScoreBox();