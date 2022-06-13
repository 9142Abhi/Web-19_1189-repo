// All the JS Code for the Add Students Page Goes Here
let form=document.querySelector("form").addEventListener("submit",mydata);
localStorage.setItem("admission",JSON.stringify(mydata));
 function mydata(event){
    event.preventDefault();
    let name= document.querySelector("#name").value;
    let email= document.querySelector("#email").value;
    let phone= document.querySelector("#phone").value;
    let gender= document.querySelector("#gender").value;
    let course= document.querySelector("#course").value;
    
    console.log(name,email,phone,gender,course)
    
}
localStorage.getItem("admission")