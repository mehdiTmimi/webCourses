let f2 = function ()
{
//creation des elements
let nav=document.createElement("nav");
let ul =document.createElement("ul");
let li1= document.createElement("li");
let li2= document.createElement("li");
let a1= document.createElement("a");
let a2= document.createElement("a");
// liaison
nav.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
li1.appendChild(a1)
li2.appendChild(a2)
// attributs
a1.setAttribute("href","#")
a2.setAttribute("href","#")
//contenus
a1.innerHTML="Home"
a2.innerHTML="Products"
document.body.innerHTML=""
document.body.appendChild(nav)
}