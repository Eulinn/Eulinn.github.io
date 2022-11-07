const imgs = document.getElementById("carrossel");
const img = document.querySelectorAll("#carrossel img");

let idx = 0;

console.log(img.length)
console.log(imgs.clientWidth)


function carrossel() {
    idx++;
    if(idx > img.length - parseInt(imgs.clientWidth/210)){
        idx=0;
    }
    imgs.style.transform = `translateX(${-idx * (150 + 60)}px)`;

}

setInterval(carrossel, 2000);


