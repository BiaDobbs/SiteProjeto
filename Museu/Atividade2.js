function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.center();
    video = createCapture(VIDEO, () => {
        video.size(canvas.width, canvas.height);
    });

}


function draw() {

}
