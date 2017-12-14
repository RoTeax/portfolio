

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var shift = 3;
var deshift = -3;

var textInput = document.getElementById("textInput");
var output = document.getElementById("cypheredText");

var cypherText = function(event) {
    var text = event.target.value;
    var splitText = text.split("");
    var encodedString = "";
    for(var i = 0; i < splitText.length; i++) {
        var currentLetter = splitText[i];
        var index = letters.indexOf(currentLetter);
        if(index === -1){
            encodedString += currentLetter;
        }
        else {
            encodedString += letters[(index + shift) % letters.length];
        }
    }
    output.innerText = encodedString;
}

var codeInput = document.getElementById("codeInput");
var decriptOutput = document.getElementById("decriptedText");
var decypherText = function(event) {
    var code = event.target.value;
    var splitText = code.split("");
    var decodedString = "";
    for(var i = 0; i < splitText.length; i++) {
        var currentCode = splitText[i];
        var dindex = letters.indexOf(currentCode);
        if(dindex === -1){
            decodedString += currentCode;
        }
        else {
            decodedString += letters[(dindex + deshift) % letters.length];
        }
    }
    decriptOutput.innerText = decodedString;
}

textInput.addEventListener("input", cypherText);
codeInput.addEventListener("input", decypherText);