
function multiId(card, cImg, cName, cAge, cStudent) {

    //create div 

    let body = document.querySelector("body");

    let newCard = document.createElement("div");

    body.appendChild(newCard);

    newCard.innerHTML = (card);



    // create img 

    let newImg = document.createElement("img");

    newCard.appendChild(newImg);

    newImg.src = (cImg);


    // create student name in card

    let sName = document.createElement("h2");

    newCard.appendChild(sName);

    sName.innerText = (cName);



    // create student course

    let newCourse = document.createElement("p");

    newCard.appendChild(newCourse);

    newCourse.innerHTML = (cAge);



    // create student no

    let newSno = document.createElement("p");

    newCard.appendChild(newSno);

    newSno.innerText = (cStudent);




}


//function call 
// multiId(
//     "",
//     "https://img.freepik.com/free-photo/smiling-girl-holding-card-boards-standing_23-2147657377.jpg?ga=GA1.1.446802521.1715590962&semt=ais_hybrid",
//     "Komal Roy",
//     "MBA",
//     "Student147863"
// );


// multiId(
//     "",
//     "https://img.freepik.com/free-photo/portrait-female-college-student-holding-book-hand-smiling-camera_23-2148093193.jpg?ga=GA1.1.446802521.1715590962&semt=ais_hybrid",
//     "Aditi Sharma",
//     "Degital Marketing",
//     "Student4846548"
// );

