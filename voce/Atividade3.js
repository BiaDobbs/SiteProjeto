var largura = 640;
var altura = 480;

var tela = -1;
var vezes = 0;

var video;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;


let theShader;

var muda = 0;
var transp = 127;

var radius = 8;
var imgCache;
let overAllTexture;

function setup() {
    var relogio = 0;
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.center();
    video = createCapture(VIDEO, () => {
        video.size(canvas.width, canvas.height);
    });

    video.hide();
}

function draw() {
    //print(tempo, ",", tela)

    if (tela > 3) {
        tela = 0;
    }
    if (tela == 3) {
        //rainbowshader();
        nostalgia();
    }

    if (tela == 2) {
        multipicture();
    }

    if (tela == 1) {
        push();
        translate(0, height);
        scale(1, -1);
        ghost();
        pop();
    }
    if (tela == 0) {
        push();
        texto();
        pop();
    }

    if (tela == -1) {
        image(video, 0, 0, width, height);
        fill(0, 102, 153);
        textSize(40);
        text('Você não prometeu! Volta lá e promete!', height / 2, height / 2);
    }
}

function timer() {
    if (vezes == 0) {
        tela++;
        setInterval(function () {
            tela++;
            print(tela);
        }, 20000);
        vezes++
    } else {
        pass;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //setTimeout(video.size(canvas.width, canvas.height),2000);
}
