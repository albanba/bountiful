

function displayFruits(fruit){}



fetch("json/fruit.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayFruits);
    
    });



function displayFruits(fruit) {
        // Create elements to add to the document
        class_num = 0
        i = 0
        while (i < 3) {
          let option = document.createElement('option');
          
          i += 1
          // Change the textContent property of the elements 
          option.textContent = `${fruit.name}`;
        
      
          // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
          option.setAttribute('value', fruit.name);
          class_num += 1
          class_name = `.option${class_num}`;
       
      
          // Add/append the existing HTML div with the cards class with the section(card)
         
          document.querySelector(class_name).appendChild(option);
          
        

        }
        
} 

document.querySelector("#submit").addEventListener("click", saveForm);
document.querySelector("#orderButton").addEventListener("click", displayOrder);






function saveForm(){
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let option1 = document.querySelector(".option1").value;
    let option2 = document.querySelector(".option2").value;
    let option3 = document.querySelector(".option3").value;
    let text = document.querySelector('#instructions').value

    
      
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Option1', option1);
    localStorage.setItem('Option2', option2);
    localStorage.setItem('Option3', option3);
    localStorage.setItem('Text', text);
    
}


function displayOrder(){
    //create html elements 
    let div = document.createElement("div")
    div.setAttribute('class', 'order')

    let firstName = document.createElement("p");
    firstName.textContent = `Name: ${localStorage.getItem('Name')}`;

    let e_mail = document.createElement("p");
    e_mail.textContent = `Email: ${localStorage.getItem('Email')}`;

    let contact = document.createElement("p");
    contact.textContent = `Ph: ${localStorage.getItem('Phone')}`;

    let fruit1 = document.createElement("p");
    fruit1.textContent = `Fruit# 1: ${localStorage.getItem('Option1')}`;

    let fruit2 = document.createElement("p");
    fruit2.textContent = `Fruit# 2: ${localStorage.getItem('Option2')}`;

    let fruit3 = document.createElement("p");
    fruit3.textContent =`Fruit# 3: ${localStorage.getItem('Option3')}`;

    let instructions = document.createElement('p');
    instructions.textContent= `Special Instructions: ${localStorage.getItem('Text')}`;

    let date = document.createElement('p');
    date.textContent= `Order date: ${new Date(Date.now()).toLocaleString()}`;

   
   
    // let produce1 = fruits.filter(getFruit);
    // // // let produce2 = fruits.filter(fruits.name == localStorage.getItem('Option2'));
    // // // let produce3 = fruits.filter(fruits.name == localStorage.getItem('Option3'));

   

    // let carbs = document.createElement('p');
    // carbs.textContent =`Total Carbs: ${produce1.nutrtions}`; 
    //     // + produce2.carbohydrates + produce3.carbohydrates}`;
    
    let button = document.createElement('button');
    button.setAttribute('id', 'edit');
    button.textContent = 'Edit Order';


    document.querySelector('#main').appendChild(div);
    document.querySelector('.order').appendChild(firstName);
    document.querySelector('.order').appendChild(e_mail);
    document.querySelector('.order').appendChild(contact);
    document.querySelector('.order').appendChild(fruit1);
    document.querySelector('.order').appendChild(fruit2);
    document.querySelector('.order').appendChild(fruit3);
    document.querySelector('.order').appendChild(instructions);
    document.querySelector('.order').appendChild(carbs);    
    document.querySelector('.order').appendChild(date);
    document.querySelector('.order').appendChild(button);
    document.querySelector("#edit").addEventListener("click", editOrder);


}

function editOrder(){
    document.querySelector('.order').remove();

}


