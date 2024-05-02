let  count=0
function opentap(){
    var waterElement=document.getElementById("water")
    var can=document.getElementById("can")
    var tap=document.getElementById("taphandle")
    var water =document.getElementById("waterflow")  
    if(count%2===0){
        waterElement.style.backgroundColor= "#d3d3d3"
        can.style.backgroundColor="#3498db"
        waterElement.style.animation="wateropen 10s linear forwards"
        tap.style.background="green"
        water.style.background="#3498db"
    } 
   else{
        waterElement.style.animationPlayState="paused";
        tap.style.background="red"
        water.style.background= "white"
    }
    count++;
}