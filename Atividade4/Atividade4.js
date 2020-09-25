let video;
let poseNet;
let pose;
let skeleton;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, () => {
    video.size(canvas.width, canvas.height);
  }
  );
  video.hide();
  //canvas.center();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0, canvas.width, canvas.height);

  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill(255);
    ellipse(pose.nose.x, pose.nose.y, d-50);//Nariz
    ellipse(pose.rightEye.x, pose.rightEye.y, 50);//olho direito
    ellipse(pose.leftEye.x, pose.leftEye.y, 50);//olho esquerdo
    ellipse(pose.rightEye.x, pose.rightEye.y-150, d-50);//"chifre" direito
    ellipse(pose.leftEye.x, pose.leftEye.y-150, d-50);//"chifre" esquerdo
    ellipse(pose.leftEar.x, pose.leftEar.y, 10);// orelha esquerda
    ellipse(pose.rightEar.x, pose.rightEar.y, 10);//orelha direita
    ellipse(pose.nose.x, pose.nose.y+130, 50);// queixo
    ellipse(pose.rightEye.x+d/2, pose.rightEye.y-300, 50);// acima da cabeça, no centro
    fill(0);
    ellipse(pose.leftEar.x+400, pose.leftEar.y, 10);// lado esquerdo da cabeça esquerda
    ellipse(pose.rightEar.x-400, pose.rightEar.y, 10);// lado direito da cabeça esquerda
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //setTimeout(video.size(canvas.width, canvas.height),2000);
}
