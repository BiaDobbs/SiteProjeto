function nostalgia() {
  fill(255);
  //noStroke();
  //triangle(30, 75, 58, 20, 86, 75);
  //triangle(100, 200, 100*2, 200*2, 100/2, 200/2);
  textSize(50);
  video.loadPixels();
  var stepSize = 7;
  for (var x = 0; x < canvas.width; x += stepSize) {
    for (var y = 0; y < canvas.height; y += stepSize) {
      var index = ((y*video.width) + x) * 4;
      var redVal = video.pixels[index];
      var greenVal = video.pixels[index + 1];
      var blueVal = video.pixels[index + 2];

      if (redVal<90) {
        //stroke(redVal-30, greenVal, blueVal*2);
        //stroke(0);
        stroke(15, 19, 25);
      } else if (redVal>90 && redVal<150) {
        //stroke(redVal/2, greenVal/2, blueVal);
        //stroke(255);
        stroke(80, 10, 204);
      } else if (redVal>150 && redVal<200) {
        //stroke(redVal/2, greenVal/2, blueVal);
        //stroke(255);
        stroke(80, 100, 204);
      } else if (redVal>200) {
        stroke(110, 102, 255);
        //stroke(redVal-30, greenVal, blueVal*2);
      } 
      //stroke(redVal/2, greenVal+10, blueVal);
      //let letra = random(texto);
      //text(letra, x, y, width, height);
      strokeWeight(stepSize);
      triangle(x, y, x+stepSize, y+stepSize, x-stepSize, y-stepSize);
      //ellipse(x, y, stepSize, stepSize);
    }
  }
}
