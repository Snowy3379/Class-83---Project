var canvas = document.getElementById(myCanvas)
ctx = canvas.getContex("2d");

var color = "black"
var lineWidth = 3;

var currentMouseX, currentMouseY, lastMouseX, lastMouseY;
var currentTouchX, currentTouchY, lastTouchX, lastTouchY;

canvas.addEventListener (mousedown, my_mousedown)
function my_mousedown(e) 
{
    color = document.getElementById("color").value
    lineWidth = document.getElementById("size").value
    var mouseEvent = mousedown;
}

canvas.addEventListener (mouseup, my_mouseup)
function my_mouseup(e) 
{
    var mouseEvent = mouseup;
}

canvas.addEventListener (mouseleave, my_mouseleave)
function my_mouseleave(e) 
{
    var mouseEvent = mouseleave;
}
 
canvas.addEventListener (mousemove, my_mousemove);
function my_mousemove(e)
{
    currentMouseX = e.clientX - canvas.offsetLeft;
    currentMouseY = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastMouseX, lastMouseY);
        ctx.lineTo(currentMouseX, currentMouseY);
        ctx.stroke();
    }

    lastMouseX = currentMouseX;
    lastMouseY = currentMouseY;
}

canvas.addEventListener (touchstart, my_touchstart)
function my_touchstart(e) 
{
    currentTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentTouchY = e.touches[0].clientY - canvas.offsetTop

    lastTouchX = currentTouchX;
    lastTouchY = currentTouchY;
}
  

canvas.addEventListener (touchmove, my_touchmove)
function my_touchmove(e) 
{
    currentTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentTouchY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(lastTouchX, lastTouchY);
    ctx.lineTo(currentTouchX, currentTouchY);
    ctx.stroke();

    lastTouchX = currentTouchX;
    lastTouchY = currentTouchY;
}

function clearCanvas () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

