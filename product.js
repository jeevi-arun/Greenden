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


//search functionality

var input=document.getElementById("input")
var productContainer=document.getElementById("container")
var products=productContainer.querySelectorAll("div")

input.addEventListener("keyup",function(){
    var enteredValue= event.target.value.toUpperCase()
   
    
    for(i=0; i<products.length;i=i+1){
        var productsList=products[i].querySelector("h1").textContent
        if(productsList.toUpperCase().indexOf(enteredValue)<0){
            products[i].style.display="none"
           
        }
        else{
              products[i].style.display="block"
              
        }
    }
})

