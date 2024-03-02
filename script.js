 function AddTask(){
    var inputtext= document.getElementById("input").value;
    if(inputtext === ''){
        alert("enter the task");
        return;
    }
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputtext));
    document.getElementById("list").appendChild(li);
    document.getElementById("input").value= "";

 }