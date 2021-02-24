function valider()
{
// attribuer des ids aux elements

// recuperation
let idInput=document.getElementById("inputId")
let inputNom=document.getElementById("inputNom")
let inputPrenom=document.getElementById("inputPrenom")
let inputNote=document.getElementById("inputNote")
let tbody=document.getElementById("tbody")

// verification
if(idInput.value=="" || inputNom.value=="" || inputPrenom.value==""
|| inputNote.value=="")
    alert("veuillez remplir tous les champs");
else
    {
        //creation dynamique
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")
        let td5=document.createElement("td")
        let btn=document.createElement("button")
        let btn2=document.createElement("button")
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        td1.innerHTML=idInput.value
        td2.innerHTML=inputNom.value
        td3.innerHTML=inputPrenom.value
        td4.innerHTML=inputNote.value
        td5.appendChild(btn)
        td5.appendChild(btn2)
        btn.innerHTML="delete"
        btn2.innerHTML="edit"
        tbody.appendChild(tr)
        idInput.value=""
        inputNom.value=""
        inputPrenom.value=""
        inputNote.value=""
    }
}