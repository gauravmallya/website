var images = [
    "files/guava1.png",
    "files/guava2.png",
    "files/guava3.png",
    "files/guava4.png",
    "files/guava5.png"];

function randImg() {
    var size = images.length
    var y = Math.random()
    var x
    if (y <= .5) {
        x = 0
    }
    else{
        x = Math.floor(size * Math.random())
    } 
    document.getElementById('imagefile').src = images[x];
}

randImg()