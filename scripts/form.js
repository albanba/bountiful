

document.querySelector("#submit").addEventListener("click", displayForm);




function displayForm(){
  
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const option1 = document.querySelector(".option1").value;
    const option2 = document.querySelector(".option2").value;
    const option3 = document.querySelector(".option3").value;

    
      
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Option1', option1);
    localStorage.setItem('Option2', option2);
    localStorage.setItem('Option3', option3);

    const p = document.createElement("p");
    
    p.innerHTML = window.localStorage.getItem("Name");

    document.querySelector('.order').appendChild(p);
  
}