var largura = 640;
var altura = 480;

var tela = 0;
var tempo = 0;

var video;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

let start = false;


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

    if (tempo > 100) {
        tela++;
        tempo = 0;
        restart = true;
        clear();
        //snapshots.splice(0, snapshots.length);
    }
    if (tela > 4) {
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
    if (tela == 4) {
        push();
        texto();
        pop();
    }
    if (tela == 0) {

        image(video, 0, 0, width, height);
    }
}

function timer() {
    start = true;
    if (start) {
        setInterval(tela++;, 20000);
        //print(tela);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //setTimeout(video.size(canvas.width, canvas.height),2000);
}
