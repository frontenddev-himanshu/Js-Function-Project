
function multiId(cImg, cName, cAge, cStudent) {

    //create div 

    let body = document.querySelector("body");

    let newCard = document.createElement("div");

    body.appendChild(newCard);




    // create img 

    let newImg = document.createElement("img");

    newCard.appendChild(newImg);

    newImg.src = cImg;


    // create student name in card

    let sName = document.createElement("h2");

    newCard.appendChild(sName);

    sName.innerText = cName;



    // create student course

    let newCourse = document.createElement("p");

    newCard.appendChild(newCourse);

    newCourse.innerHTML = cAge;



    // create student no

    let newSno = document.createElement("p");

    newCard.appendChild(newSno);

    newSno.innerText = cStudent;




}


multiId(
    
    "https://img.freepik.com/free-photo/vertical-photo-attractive-young-woman-standing-office-holding-books-documents_146671-16538.jpg?ga=GA1.1.1410512896.1720190511&semt=ais_hybrid",

    "Riya Raj",

    "Bio",

    "Student484849"

)


multiId(
    
)


