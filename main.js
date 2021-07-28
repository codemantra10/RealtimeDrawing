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
square(30, 20, 55);
}
function preload(){

}
function modelLoaded(){
console.log("Haha you model is working but sorry to do this though:hahadfjrjgktgigkgfhkjbjnhsasjdbfjdnffmmfthrthtrhrtht.");
}
function GotPoses(result){
if(result.length>0){
console.log(result);
}
}