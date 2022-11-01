const canvas = document.querySelector("canvas")
canvas.width =1450;
canvas.height=600;

let ctx=canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas.width,canvas.height);

let color='black';
let size=document.getElementById("size").value;
let drawing=false;

canvas.addEventListener('touchstart',start,false);
canvas.addEventListener('touchmove',draw,false);
canvas.addEventListener('mousedown',start,false);
canvas.addEventListener('mousemove',draw,false);

canvas.addEventListener('touchend',stop,false);
canvas.addEventListener('mouseup',stop,false);
canvas.addEventListener('mouseout',stop,false);

function start(event) {
    drawing=true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft,
               event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function draw(event) {
    if(drawing){
        ctx.lineTo(event.clientX - canvas.offsetLeft,
                   event.clientY - canvas.offsetTop);
        ctx.strokeStyle=document.getElementById("col").value;
        ctx.lineWidth=document.getElementById("size").value;
        ctx.lineCap='round';
        ctx.lineJoin='round';
        ctx.stroke();
    }
}

function stop(event) {
    if(drawing){
        ctx.stroke();
        ctx.closePath();
        drawing=false;
    }
    event.preventDefault();
}

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,1450,800);
})