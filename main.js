noseX=0;
noseY=0;

function preload(){
    img1=loadImage("m.png")
}
function setup(){
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on("pose",gotPoses) 
}
function gotPoses(results){
   console.log(results) ;
    if (results.length>0){
     console.log(results[0]);
     noseX=results[0].pose.nose.x-134;
     noseY=results[0].pose.nose.y-77;
    console.log(results[0]);
    }
    }

    function awesomebawsome(){
        save("myFile.png")
    }

function modelLoaded(){
    console.log('model loaded hihihi');
}
function draw(){
    image(video,0,0,450,350);
    image(img1, noseX, noseY, 60, 30)
}
camera1z = document.getElementById("camera");
 