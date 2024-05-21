//storing html element button in a variable to be more accessible 
const IncButton = document.querySelector("#add-one");

const incrementFunc = () => {

    //selecting the paragraph
    let p = document.querySelector("#results");

    //selecting the paragraph's text and making it a number so we can update it.
    //Originally had both using the property "innerText", however that wasn't what the test was asking for.
    //Even though it worked on the site, both had to be textContent, otherwise when adding 1 for each click to num, i got NaN.
    let num = Number(document.querySelector("#results").textContent);
    // console.log(typeof num)

    //incrementing the number each time the button is pressed
    num += 1;

    //assigning the new number to the paragraph's text content property
    p.textContent = num


    // console.log(num++)





};

IncButton.addEventListener('click', incrementFunc);
