

function multipicture() {
  var w = width/6;
  var h = height/6;
  var x = 0;
  var y = 0;



  // How many cells fit in the canvas
  total = (width/ w) * ( height/ h);
  snapshots[counter] = video.get();
  counter++;
  if (counter >= total) {
    counter = 0;
  }
  var fim =  height- height/2;
  for (var i = 0; i < snapshots.length; i++) {
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
    //print(y);
  }
  filter(POSTERIZE, 5);
  //print(altura,",", fim);
  //print(snapshots.length);
}
