/*
* Excercise 1
*
*/
let newColor = false;
let colorBlock=document.getElementById('color-block');
colorBlock.addEventListener("click",changeColor);
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(newColor==false){
        //change the background color using JS
        colorBlock.style.backgroundColor="#605a9f";
        newColor=true;
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent="#605a9f";
    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor= "#F08080";
        newColor=false;
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent="#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
let convertBtn=document.getElementById('convertbtn');
convertBtn.addEventListener("click",convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let tempCelcius=(document.getElementById('f-input').value-32)*5/9;
    //Send the calculated temperature to HTML
    document.getElementById('c-output').textContent=tempCelcius;
}


