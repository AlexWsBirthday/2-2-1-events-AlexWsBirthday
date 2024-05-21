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
  //targeting "dataclicks", setting its value to the number produced in numOfClicks
  clickButton.setAttribute("data-clicks", numOfClicks);


  //setting the message counting
  if (numOfClicks === 1) {
    clickButton.textContent = `I've been clicked ${numOfClicks} time.`;

  } else {
    clickButton.textContent = `I've been clicked ${numOfClicks} times!`;

  }
};

//you need to add the "addEventListener" for any of the data to be funneled into clickCounterHandler, prompted by the click event
//build the processor/func before you call it, that's how js works
//HOF!
clickButton.addEventListener("click", clickCounterHandler);



//doing the same for the inline button
const inline = document.querySelector("#inline-example");
const inlineClickCounter = () => {

  let numOfClicks = Number(inline.getAttribute("data-clicks"));

  numOfClicks++

  inline.setAttribute("data-clicks", numOfClicks);


  if (numOfClicks === 1) {
    inline.textContent = `I've been clicked ${numOfClicks} time.`

  } else {
    inline.textContent = `I've been clicked ${numOfClicks} times!`;

  }

}

//for the inline button
inline.addEventListener("click", inlineClickCounter)

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
//don't need to create a variable out of an element for this one to receive information, since it listens to the whole body of the document
document.body.addEventListener("keydown", handleKeydown)
//source: https://www.reddit.com/r/learnjavascript/comments/m9myip/how_does_keyboardevent_work_keyboardeventkey_does/

//-------------------------------------------------------------------------------------------------------------------------------------

//storing the delegation element in the delegation variable (or box)
const delegation = document.querySelector("#delegation")
// console.log(delegation)    //making sure I was targeting the right element


// Creating the call back function (CBF) which will take in information based on the specific event parameter provided in the addEventListener HOF (if the event was a click within this element, the following will happen).
const handleDelegation = (event) => {

  //getting the parent element, putting it into a variable (box) to work with and access throughout the function
  //This will allow us to access the textContext property of the element with the ID of "delegation-result".
  const resultSpan = document.querySelector('#delegation-result');

  //conditionals barring resultSpan from being updated unless the TARGET of the event "click" (meaning what was interacted with) matches the element ID of one of the buttons
  //if the conditions are met, resultSpan's textContent property displays the label of whatever button you pressed (the event target's text contents).
  if (event.target.matches('#up') || event.target.matches('#middle') || event.target.matches('#down') || event.target.matches('#left') || event.target.matches('#right')) {
    resultSpan.textContent = event.target.textContent;
  } else {
    //if none of these conditions are met, then the resultSpan textContent is not updated. Instead, the message below is returned in the console. 
    console.log('not a button')
  }


};

//adding the event listener HOF to the delegation variable storing the delegation element. It looks out for a "click" event. 
//When that paramenter is notified that this specified event occurred, it proceeds to feed the information about the event into the CBF. 
delegation.addEventListener("click", handleDelegation);

//-------------------------------------------------------------------------------------------------------------------------------------






//-------------------------------------------------------------------------------------------------------------------------------------

//REMOVING AN EVENT LISTENER

//making a variable for event-listener-removing button
const removeButton = document.querySelector("#remove")

//making the button's whole purpose being to target the element with the delegation ID and remove the event listener we built
//the contents inside the removeEventListener HOF must be identical to the parameters of the eventlistener its removing
const removeDelListener = () => {
  delegation.removeEventListener("click", handleDelegation)
}


removeButton.addEventListener('click', removeDelListener)



//-------------------------------------------------------------------------------------------------------------------------------------


const randomNum = document.querySelector("#add-random-num");
let randomNumUL = document.querySelector('#random-numbers')
const addNewRandomNumber = (event) => {

  //   const ul = document.querySelector('#counting-list');
  // ul.addEventListener('click', (event) => {
  //   if (event.target.matches('li')) {
  //     const numberOfLiClicked = Number(event.target.innerText);
  //     const li = document.createElement('li');
  //     li.innerText = numberOfLiClicked + 1
  //     event.currentTarget.append(li);
  //   }
  // })


  //create the list element
  const li = document.createElement('li');

  //generate the random number
  const randomNumGenerator = Math.floor(Math.random() * 100)

  //putting the random number inside of the generated list element
  li.innerText = randomNumGenerator

  //adding the random number list item to the existing ul element 
  randomNumUL.append(li)






};

//adding an ear to the random number button, listening for a click. the click prompts addNewRandomNumber CBF
randomNum.addEventListener("click", addNewRandomNumber)



// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);


};

main();
