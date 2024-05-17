// These are your event handlers

//referring to the specific button we're "listening" to, outside of the function so we can add an event listener to it later on
const clickButton = document.querySelector("#click-button");
const clickCounterHandler = () => {

  //targetting the attribute "data-clicks" and converting it into an integer so it can increment
  let numOfClicks = Number(clickButton.getAttribute("data-clicks"));
  //incrementing the value of data-clicks each time the event occurs.
  //this is where we store the data (the amount of times the user clicked on the button)
  numOfClicks++;

  //setting the attribute "data-clicks" to match the number that the numOfClicks variable produced, in response to user interaction
  //targeting "dataclicks", setting its value to the number produced 
  clickButton.setAttribute("data-clicks", numOfClicks);

  //setting the message counting
  if (numOfClicks === 1) {
    clickButton.textContent = `I've been clicked ${numOfClicks} time.`;
  } else {
    clickButton.textContent = `I've been clicked ${numOfClicks} times!`;
  }
};

//you need to add the "addEventListener" for any of the data to be funneled into clickCounterHandler, prompted by the click event
clickButton.addEventListener("click", clickCounterHandler);

const handleKeydown = () => {
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);


};

main();
