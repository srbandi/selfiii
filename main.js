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

    if(content == "take my selfie"){

    speak();}
}

function pictake(){

    Webcam.snap(function(imgadd){

        document.getElementById("result").innerHTML = "<img id='capture' src='"+imgadd+"'>"

    })

}

function save(){

    var imglink = document.getElementById("capture").scr;
    var anchorref = document.getElementById("link");
    anchorref.href=imglink;
    anchorref.click();

}

function speak(){

    var api = window.speechSynthesis;

    var text = "Taking your selfie in 5 seconds.";

    var utterthis = new SpeechSynthesisUtterance(text);

    api.speak(utterthis);
    setTimeout(function() {
        pictake();
        save();
    }, 5000);
    Webcam.attach(camera);
}

Webcam.set({

    width:360,
    height:230,
    image_format:"png",
    png_quality:100

})

var camera = document.getElementById("camera");

