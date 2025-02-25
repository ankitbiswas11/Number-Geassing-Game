
let userNumEl = document.getElementById("userNum");
let errorMsgEl = document.getElementById("errorMsg");
let imgElimentEl = document.getElementById("imgEliment");


let randomNum = Math.ceil(Math.random()*100);

console.log(randomNum);


function guessTheNumber(){

    let userVal = parseInt (userNumEl.value );

    if(userVal > randomNum){

        errorMsgEl.textContent = "Number is too high!!! try again";
        errorMsgEl.style.color = "red";
        imgElimentEl.src = "https://sightwords.com/images/math/counting/guess_number.jpg";

    }else if(userVal < randomNum){

        errorMsgEl.textContent = "Number is too Low!!!! try again";
        errorMsgEl.style.color = "red";
         imgElimentEl.src = "https://sightwords.com/images/math/counting/guess_number.jpg";

    }else{

        errorMsgEl.textContent = "Hurray you Win!!!!!";

        errorMsgEl.style.color = "green";

        imgElimentEl.src ="https://th.bing.com/th/id/OIP.r-7QXNp3vOO-b_7cNjcYLQHaHa?w=490&h=490&rs=1&pid=ImgDetMain"

        imgElimentEl.style.width ="250px"

    
    }



}


