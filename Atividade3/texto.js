
function texto() { 

  background(0);
  noStroke();
  textSize(15);
  video.loadPixels();
  video.center();
  var stepSize = 12;
  let texto = [ 'f', 'i', 'c', 'ç', 'a', 'o', 'r', 'e', 'l', 'd'];
  for (var x = 0; x < video.width; x += stepSize) {
    for (var y = 0; y < video.height; y += stepSize) {
      var index = ((y*video.width) + x) * 4;
      var redVal = video.pixels[index];
      var greenVal = video.pixels[index + 1];
      var blueVal = video.pixels[index + 2];
      fill(redVal, greenVal, blueVal);
      let letra = random(texto);
      text(letra, x, y, width, height);
    }
  }
  //setTimeout(tempo++,60000);
}
