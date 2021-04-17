const submitButton = document.querySelector("#buttonsubmit");
const input = document.querySelector('#id_guess_number');
const resultElement = document.createElement("div");
const resultContainer = document.querySelector("#id-result");
resultElement.style.padding = "20px";
resultElement.style.display = "flex";
resultElement.style.justifyContent = "center";  

submitButton.addEventListener("click", ()=>{
    let value = input.value;
    const secretNumber = Math.floor(Math.random() * 10 + 1);
    if(value != ""){
        if(!Number.isNaN(value)) {
            const guessNumberInt = parseInt(value);
            if (guessNumberInt === secretNumber) {
                resultElement.innerText = "Correct!";
                resultElement.style.color = "white";
                resultElement.style.backgroundColor = "green";
            }else{
                resultElement.innerText = `Wrong! It was ${secretNumber}`;
                resultElement.style.color = "white";
                resultElement.style.backgroundColor = "red";
            }
            
        }else{
            resultElement.innerText = "Please enter a number.";
            resultElement.style.color = "white";
            resultElement.style.backgroundColor = "red";
        }
    }else{
        resultElement.innerText = "Please enter a number.";
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "red";

    }
    
    resultContainer.appendChild(resultElement);
    
    
});