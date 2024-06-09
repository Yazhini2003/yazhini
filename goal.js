var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("popupbutton")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelg=document.getElementById("cancelg")
cancelg.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,addgoal,goalinput,timeinput,whyinput

var container=document.querySelector(".container")
var addgoal=document.getElementById("addgoal")
var goalinput=document.getElementById("goalinput")
var timeinput=document.getElementById("timeinput")
var whyinput=document.getElementById("whyinput")

addgoal.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","goalcontainer")
    div.innerHTML=`<h2>${goalinput.value}</h2>
    <h5>${timeinput.value}</h5>
    <p>${whyinput.value}</p>
    <button onclick="deletegoal(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletegoal(event){
    event.target.parentElement.remove()

}