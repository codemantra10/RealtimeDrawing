noseX="";
noseY="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";
difference="";
//To determine it is 0 pose nose X and same with noseY
function setup(){
canvas=createCanvas(500,500);
video=createCapture(VIDEO);
//var posenet on line 5 will initailize the model.
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",GotPoses);
//"pose"=get alll 17 main body parts.
}
function draw(){
    // The background function makes the canvas get a background.
background("#00ffe5");
//The function fill in this case gives you the color of the square
fill("#00ff00");
square(noseX, noseY, difference);
document.getElementById("length").innerHTML=difference;
}
function preload(){

}
function modelLoaded(){
console.log("Haha you model is working but sorry to do this though:hahadfjrjgktgigkgfhkjbjnhsasjdbfjdnffmmfthrthtrhrtht.");
}
function GotPoses(result){
if(result.length>0){
console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
leftwristX=result[0].pose.leftWrist.x;
leftwristY=result[0].pose.leftWrist.y;
rightwristX=result[0].pose.rightWrist.x;
rightwristY=result[0].pose.rightWrist.y;
difference=leftwristX-rightwristX;
difference=Math.floor(difference);
}
}