nosex=0;
nosey=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/N0YxF7M4/clown-nose.png');
}


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);    
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is inistialized');
}


function take_snapshot(){
    save('pic_snapshot');
}
function gotPoses(results){
if(results.length >0){
    console.log(results);
   nosex=results[0].pose.nose.x-15;
   nosey=results[0].pose.nose.y-15;
   console.log(nosex);
   console.log(nosey);
}
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
    
}
