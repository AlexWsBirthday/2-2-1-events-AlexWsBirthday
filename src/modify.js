// These are your event handlers

//referring to the specific button we're "listening" to, outside of the function so we can add an event listener to it later on
const clickButton = document.querySelector("#click-button");
const clickCounterHandler = () => {

  //targetting the attribute "data-clicks" and converting it into an integer so it can increment
  let numOfClicks = Number(clickButton.getAttribute("data-clicks"));
  let numOfClicks2 = Number(inline.getAttribute("data-clicks"));
  //incrementing the value of data-clicks each time the event occurs.
  //this is where we store the data (the amount of times the user clicked on the button)
  numOfClicks++;
  numOfClicks2++;

  //setting the attribute "data-clicks" to match the number that the numOfClicks variable produced, in response to user interaction
  //targeting "dataclicks", setting its value to the number produced in numOfClicks
  clickButton.setAttribute("data-clicks", numOfClicks);
  inline.setAttribute("data-clicks", numOfClicks);

  //setting the message counting
  if (numOfClicks === 1) {
    clickButton.textContent = `I've been clicked ${numOfClicks} time.`;
    inline.textContent = `I've been clicked ${numOfClicks} time.`
  } else {
    clickButton.textContent = `I've been clicked ${numOfClicks} times!`;
    inline.textContent = `I've been clicked ${numOfClicks} times!`;
  }
};

//you need to add the "addEventListener" for any of the data to be funneled into clickCounterHandler, prompted by the click event
//build the processor/func before you call it, that's how js works
//HOF!
clickButton.addEventListener("click", clickCounterHandler);

//for the inline button
const inline = document.querySelector("#inline-example");
inline.addEventListener("click", clickCounterHandler)

//-------------------------------------------------------------------------------------------------------------------------------------


//you need to retrieve the information retrieved from the "keydown" event. In addEventListener, the function takes the kind of 
//event its looking for and allows you to feed it into the callback function you put in its hands. You just have to spoon feed the event information to 
//the cbf.
const handleKeydown = (event) => {

  //grabbing the paragraph element with the id "keydown-tracker"
  const keyDownPara = document.getElementById("keydown-tracker")

  // storing the key and retrieving its code property
  let key = event.code

  //changing the text context of the paragraph when a keypress is detected
  keyDownPara.textContent = ` You pressed ${key}`

};

document.body.addEventListener("keydown", handleKeydown)
//source: https://www.reddit.com/r/learnjavascript/comments/m9myip/how_does_keyboardevent_work_keyboardeventkey_does/

//-------------------------------------------------------------------------------------------------------------------------------------


// We've started this one for you
const handleDelegation = (event) => {

  //getting the parent element, putting it into a variable (box) to work with and access throughout the function
  const resultSpan = document.querySelector('#delegation-result');

  resultSpan.textContent = event.target.textContent;
};


//-------------------------------------------------------------------------------------------------------------------------------------



const addNewRandomNumber = () => {
};



// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);


};

main();
