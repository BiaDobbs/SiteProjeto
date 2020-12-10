function ghost() {

    var numeros = [127, 200, 100, 225, 170, 135, 250, 230, 187, 153];

    image(video, 0, 0, width, height);
    tint(255, 100);
    filter(INVERT);
    image(video, 0, 0, width, height);
    tint(255, transp);

    muda++;

    if (muda == 10) {
        transp = round(random(50, 250));
        transp = random(numeros);
        muda = 0;
    }
    //print(muda);

}
