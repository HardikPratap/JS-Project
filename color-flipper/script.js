const colors=["green" ,"red","rgba(133,122,200", "#f15025"]

const btn= document.getElementById("btn");
const color=document.getElementById("color");

btn.addEventListener("click", function(){
    const random= getRandom();
    document.body.style.backgroundColor= colors[random];
    document.getElementById("color").textContent=colors[random];
    //alt
    //document.querySelector(".color").textContent=color[randomColor];
})

function getRandom(){
    return Math.floor(Math.random() * colors.length) ;
}