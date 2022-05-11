var images = [
    "files/guava1.jpg",
    "files/guava2.png",
    "files/guava3.png",
    "files/guava4.png",
    "files/guava5.png"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('imagefile').src = images[x];
}

randImg()