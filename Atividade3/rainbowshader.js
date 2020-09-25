function rainbowshader() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // passing cam as a texture
  theShader.setUniform('tex0', video);

  // rect gives us some geometry on the screen
  rect(0, 0, largura, altura);
}
