// taking the translate button from html
var btnTranslate = document.querySelector("#btn-translate");

// taking the input area from html
var txtInput = document.querySelector("#txt-input");

// taking the output area from html
var outputDiv = document.querySelector("#output");


// we need a server URL that actually translates the lines by user 
// provided by FunTranslations
var serverURL = "https://api.funtranslations.com/translate/pirate.json";

//we define a function : whenever we want to convert a text(input)
//we will take serverURL, add "?" to it, add a key-value "text=" + input
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}


// error handling
function errorHandler(error) {
    // console.log("error occured", error)
    alert("There were some issues with server. Please try again later")
}


//we define a function : What to do when a click happens
//we read the value of input text 
//then go and "fetch" the URL, then convert the response to response.json
//from the json value, take translated text and show this as output
function clickHandler() {
    //outputDiv.innerText = "abakjfkjsdhfkjh: " + txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())

    //puts output on console
    //.then(json => console.log(json.contents.translated))

    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })

    //if above deos not work, catch an error
    .catch(errorHandler)
}

// when there is a click, run the function clickHandler : it is a callback function here
btnTranslate.addEventListener("click", clickHandler)