var buttons = document.querySelectorAll("button")
buttons.forEach(element => {
    element.addEventListener("mouseover",function (){
        element.style.backgroundColor = "#ffaa00";
        element.style.borderRadius = "50px";
        element.style.transition = "all .5s";
         element.style.boxShadow="3px 3px black";
    });

element.addEventListener("mouseout",function (){element.style = "default";});
});
var icons = document.querySelectorAll("i #edit");
icons.forEach(element => {
    element.addEventListener("mouseover",function (){
        element.style.backgroundColor = "#ffaa00" ;
        element.style.borderRadius = "50px";
        element.style.transition = "all .5s";
         element.style.boxShadow="3px 3px black";
    });

element.addEventListener("mouseout",function (){element.style = "default";});
});

var clearButton = document.getElementById("clearAllContainer");
if(Object.keys(localStorage).length != 0)
{
    clearButton.style.display = "inline-block";
    
}else{
    clearButton.style.display = "none";
}