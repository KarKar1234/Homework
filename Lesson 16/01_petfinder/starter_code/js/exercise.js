function selectPet(petType){



    // Get the specific pet data set
    const thisPetData = petData[petType];
    

    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;



    // Empty the specification data
    let petSpecs = "";

    // Add the space required, size, weight
    petSpecs += `<dt>Size</dt>
    <dd>${thisPetData.size}</dd>`;

    petSpecs += `<dt>Space Required</dt>
    <dd>${thisPetData.spaceRequired}</dd>`;

    petSpecs += `<dt>WeightM</dt><dd>${thisPetData.weight}</dd>`;







    // Add logic to add the trainability and lap size images

    petSpecs += `<dt>Trainable</dt>`

    if(thisPetData.trainablity == true){
        petSpecs += `<dd><img src = "img/200px-Gnome-emblem-default.svg.png" alt = "Trainable" class = "checkmark"></dd>`;


    }else{
        petSpecs += '<dd><img src = "img/200px-Gnome-emblem-unreadable.svg.png" alt = "NoTrainable" class = "checkmark"></dd>';

    }




    // Add the foods (may require loop)
    
    petSpecs += `<dt>Foods</dt>
    <dd>
        <ul>`;

        for(let i = 0; i < thisPetData.foods.length; i++){
            petSpecs += `<li>${thisPetData.foods[i]}</li>`;
        }




    document.querySelector(".petsDataSpecs").innerHTML = petSpecs;
   

    // Update the images

        // Set the big image to the first image in images
            
            //Set the src
            document.querySelector(".photoLarge").setAttribute("src",thisPetData.images[0]['img']);

            //Set the alt
            document.querySelector(".photoLarge").setAttribute("alt",thisPetData.images[0]['alt']);

        //Create the gallery
        let thumbset = '';
            //For each image
            for(let i = 0; i < thisPetData.images.length; i++){
                
                //Create the HTML (a + img)
                thumbset += `<a href="${thisPetData.images[i]['img']}">
                    <img class="photoThumb" alt="${thisPetData.images[i]['alt']}"     src="${thisPetData.images[i]['thumb']}"/>
            </a>`;


            };

            document.querySelector('.thumbHaus').innerHTML = thumbset;

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
            let thumbElements = document.querySelectorAll('.thumbHaus a');

            for (let i = 0; i < thumbElements.length; i++){
                //Add click event
                thumbElements[i].addEventListener('click', function(e){
                    
                    //prevent the link from executing
                    e.preventDefault();
                    
                    // get the link that was clicked on (href)
                    const targetLink = this.getAttribute('href');

                    //get alt of the image inside the link click on 
                    const targetAlt = this.querySelector('img').getAttribute('alt');

                    //update the big img src
                    document.querySelector('.photoLarge').setAttribute('src',targetLink);
                    //update the big img alt
                    document.querySelector('.photoLarge').setAttribute('alt',targetAlt);

                });
            };



    // Empty the ideal for
            document.querySelector(".idealFor").innerHTML = "";

            for(let i = 0; i < thisPetData.idealOwner.length; i++){
                //Create the list item
                let newEle = document.createElement('li');
                //Set the text of the list item

                newEle.innerText = thisPetData.idealOwner[i];

                //Add teh list item to document
                document.querySelector('.idealFor').append(newEle);
            }

    // Insert the ideal for


    // Empty the Adoption Groups


    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){


        //Get the selected animal
        const thePetType = document.querySelector("#petType").value;
        //call the select pet
        selectPet(thePetType);
    });
});






