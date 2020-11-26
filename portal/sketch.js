let video;
let poseNet;
let pose;
let skeleton;

let label = "waiting...";
let Confidence = "waiting...";
let classifierAudio;
let AudioModelURL = 'https://teachablemachine.withgoogle.com/models/Xwj6I-6Y6/';

let nave;
let meteoro;
let bolhas;
let aneis;

function preload() {
    classifierAudio = ml5.soundClassifier(AudioModelURL + 'model.json');
    meteoro = createImg("meteoro.gif");
    bolhas = createImg("bolhas.gif");
    rect(0, 0, width, height);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO, () => {
        video.size(canvas.width, canvas.height);
    });
    video.hide();
    //canvas.center();
    canvas.position(0, 0);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    classifyAudio();
}

function classifyAudio() {
    //classifier.classify(video, gotResults);
    classifierAudio.classify(gotResults);
}

function gotPoses(poses) {
    //console.log(poses); 
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function gotResults(error, results) {
    // Something went wrong!
    if (error) {
        console.error(error);
        return;
    }
    // Store the label and classify again!
    label = results[0].label;
    Confidence = results[0].confidence;
    //console.log(results);
    console.log(label + Confidence);
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

        if (Confidence > 0.9) {
            if (label == "Estalo") {
                meteoro.position(pose.rightEar.x - 400, pose.rightEar.y, 10);
            } else if (label == "Palmas") {
                fill('#011e4a')
            } else if (label == "Assobio") {
                meteoro.position(pose.rightEar.x - 400, pose.rightEar.y, 10);
                bolhas.position(pose.rightEar.x + 400, pose.rightEar.y, 10);
            }
        }

        /*ellipse(pose.nose.x, pose.nose.y, d - 50); //Nariz
        ellipse(pose.rightEye.x, pose.rightEye.y, 50); //olho direito
        ellipse(pose.leftEye.x, pose.leftEye.y, 50); //olho esquerdo
        ellipse(pose.rightEye.x, pose.rightEye.y - 150, d - 50); //"chifre" direito
        ellipse(pose.leftEye.x, pose.leftEye.y - 150, d - 50); //"chifre" esquerdo
        ellipse(pose.leftEar.x, pose.leftEar.y, 10); // orelha esquerda
        ellipse(pose.rightEar.x, pose.rightEar.y, 10); //orelha direita
        ellipse(pose.nose.x, pose.nose.y + 130, 50); // queixo
        ellipse(pose.rightEye.x + d / 2, pose.rightEye.y - 300, 50); // acima da cabeça, no centro
        ellipse(pose.leftEar.x + 400, pose.leftEar.y, 10); // lado esquerdo da cabeça */
        ellipse(pose.rightEar.x - 400, pose.rightEar.y, 10); // lado direito da cabeça 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //setTimeout(video.size(canvas.width, canvas.height),2000);
}
