document.body.style.height = "1000vh";
const div = document.createElement("div");
document.body.appendChild(div);
let size = 10;
let grow = true;
div.style.position = "fixed";
div.style.width = "100%";
div.style.top = 0;
div.style.left = 0;
div.style.height = size + "px";
div.style.backgroundColor = "red";

document.addEventListener("scroll", function () {
 
    if(grow){
        size+=10;
    }else{
        size-=10;
    } div.style.height = size + "px";
    
    
    if(size>window.innerHeight*.5){
        grow= !grow;
        div.style.backgroundColor = "green";
    }else if(size<=0){
        grow = !grow
        div.style.backgroundColor = "red";
    }
})