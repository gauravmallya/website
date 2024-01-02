var images = [
    "files/guava1.png",
    "files/guava2.png",
    "files/guava3.png",
    "files/guava4.png",
    "files/guava5.png",
    "files/guava6.png",
    "files/guava7.png"
];

function randImg() {
    var size = images.length
    var y = Math.random()
    var x
    if (y <= .5) {
        x = 0
    }
    if (y > .5 && y <= .75) {
        x = 5
    }
    else{
        x = Math.floor(size * Math.random())
    } 
    document.getElementById('imagefile').src = images[x];
}

function randColors(){
    elements = document.getElementsByClassName('sm')
    for (let i = 0; i < elements.length; i++){
        const randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        elements[i].style.color = randomColor
    }
}

randImg()
