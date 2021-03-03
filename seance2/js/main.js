let btn=document.getElementById("btn");

btn.onclick=function()
{
  let table=document.createElement("table");
  let thead=document.createElement("thead");
  let tbody=document.createElement("tbody");
  let tr=document.createElement("tr");
  let th1=document.createElement("th")
  let th2=document.createElement("th")
  let th3=document.createElement("th")
  let th4=document.createElement("th")

  table.appendChild(thead)
  table.appendChild(tbody)
  thead.appendChild(tr)
  tr.appendChild(th1)
  tr.appendChild(th2)
  tr.appendChild(th3)
  tr.appendChild(th4)

  th1.innerHTML="userId"
  th2.innerHTML="id"
  th3.innerHTML="title"
  th4.innerHTML="completed"
  document.body.appendChild(table)

  table.setAttribute("style","width:100%")
  table.setAttribute("border","1")


  let requet=new XMLHttpRequest();
  requet.open("get","https://jsonplaceholder.typicode.com/todos");
  requet.onreadystatechange=function()
    {
            if(requet.readyState==4 && requet.status==200)
            {
                let datas=JSON.parse(requet.response);
                for(let i=0;i<datas.length;i++)
                {
                    let todo=datas[i];
                    let userId=todo.userId;
                    let id=todo.id;
                    let title=todo.title;
                    let completed=todo.completed;
                    let t=addTodo(userId,id,title,completed);
                    //if(i%2==0)
                   // {
                   // t.setAttribute("style","background-color:lightgray")
                   // }
               
                   tbody.appendChild(t);

                }
            } else if(requet.readyState==4)
            {
                alert("erreur")
            }
    }
    requet.send();
}
function addTodo(userId,id,title,completed)
{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td1.innerHTML=userId;
    td2.innerHTML=id;
    td3.innerHTML=title;
    td4.innerHTML=completed;
    return tr;
 
}