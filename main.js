Webcam.set({
    height:310,
    width:350,
    image_format:'png',
    image_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log('ml5version',ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QY8pEU8vq/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model got loaded!");
}