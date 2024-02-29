const title = document.querySelector("div.event:first-child h1");

function eventClick(){
    console.log("Event was Clicked!")
    title.style.color = "blue";
}
function eventMouseEnter(){
    title.innerText = "Mouse is here!"
}
function eventMouseLeave(){
    title.innerText = "Mouse is gone!"

}

function eventWindowResize(){
    document.body.style.backgroundColor = "orange";

}
function eventCopy(){
   alert("copied");

}

function eventWindowOffline(){
    alert("NO network!");
 
 }

 
function eventWindowOnline(){
    alert("network connection!");
 
 }

title.onclick = eventClick;
title.addEventListener("mouseenter", eventMouseEnter);
title.addEventListener("mouseleave", eventMouseLeave);

window.addEventListener("resize", eventWindowResize);
window.addEventListener("copy", eventCopy);
window.addEventListener("offline", eventWindowOffline);
window.addEventListener("online", eventWindowOnline);




const title = document.querySelector("div.event:first-child h1");


function eventClick(){
    const currentColor = title.style.color;
    let newColor;
  if(currentColor === "blue"){
    newColor = "orange";
  }else{
    newColor = "blue";

  }
  title.style.color = newColor;
}

title.onclick = eventClick;

const title = document.querySelector("div.event:first-child h1");


function eventClick() {
    title.classList.toggle("active");
    // const status = "active";
    // if (title.classList.contains(status)) {
    //     title.classList.remove(status);
    // } else {
    //     title.classList.add(status);
    // }
}

title.onclick = eventClick;
