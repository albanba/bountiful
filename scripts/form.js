

document.querySelector("#submit").addEventListener("click", displayForm());

// const p = document.createElement("p")
// const form = []

function displayForm(){
  
    
    const inputs = document.getElementById("fruitForm").elements;
    const inputByIndex = inputs[0];
    
    console.log(inputs[0].value);



    // fname = document.querySelector("#name").value;

    // // form.push(document.querySelector("#name").value);
    // // form.push(document.querySelector("#email").value); 
    // // form.push(document.querySelector("#phone").value);
    // // form.push(document.querySelector("#option1").value);
    // // form.push(document.querySelector("#option2").value);
    // // form.push(document.querySelector("#option3").value);

    // console.log(fname);
    
    
    // p.innerHTML = `${fname}`;

    // document.querySelector('.order').appendChild(p);

    // for (let x in form) {
    //     p.textContent = form[x];
    //     document.querySelector('#order').appendChild(p);
    //   }
    



    
}