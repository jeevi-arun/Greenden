// Selecting menu icon ,side nav bar and close button

var side=document.getElementById("side-nav")
var menu=document.getElementById("menu")
var close=document.getElementById("close")

//add event listener

menu.addEventListener("click",function(){
    side.style.right=0
})

close.addEventListener("click",function(){
    side.style.right="-50%"
})