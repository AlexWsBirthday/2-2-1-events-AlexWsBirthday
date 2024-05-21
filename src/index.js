//storing html element button in a variable to be more accessible 
const IncButton = document.querySelector("#add-one")

const incrementFunc = () => {

    let num = Number(document.querySelector("#results").innerText)
    // console.log(typeof num)

    num++

    console.log(num++)





};

IncButton.addEventListener('click', incrementFunc);
