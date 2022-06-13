// All the Code for the Admitted page goes here

forEach(function (elem){
    tr=createElement("tr")
    td1=document.createElement("td");
    td1.innerText=elem.th.value;
    td2=document.createElement("td");
    td2.innerText=elem.th.value;
    td3=document.createElement("td");
    td3.innerText=elem.th.value;
    td4=document.createElement("td");
    td4.innerText=elem.th.value;
    td5=document.createElement("td");
    td5.innerText=elem.th.value;
    td6=document.createElement("td");
    td6.innerText=elem.th.value;
    td7=document.createElement("td");
    td7.innerText=elem.th.value;
    document.querySelector("tbody").append(tr);
    document.querySelector(tr).append(td);
    
});
   