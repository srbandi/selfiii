var sr = window.webkitSpeechRecognition;
var recognition = new sr();

function start(){

    document.getElementById("textbox").innerHTML = ""
    recognition.start();

}
recognition.onresult = function run(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();
}

function speak(){

    var api = window.speechSynthesis;

    var text = document.getElementById("textbox").value;

    var utterthis = new SpeechSynthesisUtterance(text);

    api.speak(utterthis);
    Webcam.attach(camera);
}

Webcam.set({

    width:360,
    height:230,
    image_format:"png",
    png_quality:100

})

var camera = document.getElementById("camera");