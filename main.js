nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(550, 150);

    model= ml5.poseNet(video, modelLoaded);
    model.on('pose', getPoses);
}
function draw(){
    background("aqua");
    textSize(difference);
    text("Today there is no games period", nosex, nosey);
}
function modelLoaded(){
    console.log("Your model is Loaded");
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose x coordinate = " +nosex+ "Nose y coordinate = " +nosey );
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Text size = " + difference);
    }
}