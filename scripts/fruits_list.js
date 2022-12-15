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
    opcion1 = document.querySelector('')
    opcion2 = "Apricot"
    
    fruta1 = fruits.filter(fruits.name == opcion1);
    fruta2 = fruits.filter(fruits.name == opcion2);

    carbs = fruta1.carbohydrates + fruta2.carbohydrates 