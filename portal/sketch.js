let video;

let label = "waiting...";
let Confidence = "waiting...";
let classifierAudio;
let AudioModelURL = 'https://teachablemachine.withgoogle.com/models/Xwj6I-6Y6/';

let scifi;
let circulo;
let portais;
let portão;
let fundo;
let aviso;



function preload() {
    classifierAudio = ml5.soundClassifier(AudioModelURL + 'model.json');
    //image(img, x, y, [width], [height])
    scifi = createImg("scifi.gif");
    circulos = createImg("circulos.gif");
    portais = createImg("portais.gif");
    portao = createImg("portao.gif");
    fundo = createImg("fundo.png");
    scifi.hide();
    circulos.hide();
    portais.hide();
    portao.hide();
    fundo.hide();
}

function setup() {
    aviso = select("#aviso");
    canvas = createCanvas(windowWidth, windowHeight);
    //canvas.position(0,0);
    video = createCapture(VIDEO, () => {
        video.size(canvas.width, canvas.height);
    });
    video.hide();
    //canvas.center();
    classifyAudio();
}

function classifyAudio() {
    classifierAudio.classify(gotResults);
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
    console.log(results);
    aviso.hide();
}

function draw() {
    image(video, 0, 0, canvas.width, canvas.height);


    if (Confidence > 0.9) {
        if (label == "Estalo") {
            fundo.position(0, 0);
            fundo.size(width, height);
            fundo.show();
            scifi.position(-2, 10);
            scifi.size(width, height);
            circulos.position(-200, 100);
            scifi.show();
            circulos.show();
            portais.hide();
            portao.hide();


        } else if (label == "Palmas") {
            portais.position(0, 0);
            portais.size(width, height);
            fundo.hide();
            scifi.hide();
            circulos.hide();
            portais.show();
            portao.hide();


        } else if (label == "Assobio") {
            portao.position(0, 0);
            portao.size(width, height);
            fundo.hide();
            scifi.hide();
            circulos.hide();
            portais.hide();
            portao.show();

        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
