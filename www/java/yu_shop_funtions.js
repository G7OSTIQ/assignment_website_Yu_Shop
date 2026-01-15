
//This is a JQuery to toggle the nav bar when the user presses on the burger menu
function slideUpDown() {
    $(".navmenus").slideToggle();
}



//This funtion is used in contact page when user presses on confirm it will highlight the area that are correct with green and incorrect with red border boxes
function checkingForm(event) {
    let username = document.getElementById("username").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let businessemail = document.getElementById("bus_email").value;
    let location = document.getElementById("location").value;
    let phone_number = document.getElementById("number").value;


    // Basically when user inputs are empty it will set the border to red while if its not empty the code will chnage the text box to green
    if (username == "") {

        document.getElementById("username").style.border = "thick solid red";
    }
    else {
        document.getElementById("username").style.border = "thick solid green";
    }

    if (surname == "") {

        document.getElementById("surname").style.border = "thick solid red";
    }
    else {
        document.getElementById("surname").style.border = "thick solid green";
    }

    if (email == "") {

        document.getElementById("email").style.border = "thick solid red";
    }
    else {
        document.getElementById("email").style.border = "thick solid green";
    }

    if (businessemail == "") {

        document.getElementById("bus_email").style.border = "thick solid red";
    }
    else {
        document.getElementById("bus_email").style.border = "thick solid green";
    }

    if (location == "") {

        document.getElementById("location").style.border = "thick solid red";
    }
    else {
        document.getElementById("location").style.border = "thick solid green";
    }


    //Number means it's convering a string input into a Interger(number) there for this will check if the user has added 8 numbers.
    if (Number(phone_number) === "") {
        alert("Please input up to 8 numbers, Try again");
        document.getElementById("number").style.border = "thick solid red";
    }
    //What does length mean length means it's the amout of number there is in the text box there for it will count them all
    else if (Number(phone_number.length) < 8 || Number(phone_number.length) > 8) {   //If teh user added more or less then 8 it will show an alert and will change the text box to green
        alert("Please input up to 8 numbers, Try again");
        document.getElementById("number").style.border = "thick solid red";
    }
    else {
        document.getElementById("number").style.border = "thick solid green";
    }

    if ((username == "" || surname == "" || email == "" || Number(phone_number === ""))) {
        alert("Please Fill in all the boxes in the Form, Try again")
        event.preventDefault(); //This is here for it does not keep on reseting the form but will block the outlook app
    }
    else {
        return true; //return what this does it will revert the even.preventDefault to open the outlook app
    }

}


//This funtion will remove the sytle.border from the cotact page when reset button is clicked
function restingForm() {
    document.getElementById("username").style.border = "";  //style.border= "" meaning set the border to none/null
    document.getElementById("surname").style.border = "";
    document.getElementById("email").style.border = "";
    document.getElementById("bus_email").style.border = "";
    document.getElementById("location").style.border = "";
    document.getElementById("number").style.border = "";
    document.getElementsByClassName("reset").style.border = "";


}


//This funtion is in the quiz page
function quiz_checker() {

    let quiz1 = document.querySelector('input[name="user_choice_radio_1"]:checked');
    let quiz2 = document.getElementById("question2.1").value.toLowerCase();
    let quiz3 = document.querySelector('input[name="user_choice_radio_2"]:checked');
    let quiz4 = document.getElementById("question4.1").value.toLowerCase();
    let userpoints = 0;

    if ((quiz1 == "") || (quiz2 == "") || (quiz3 == "") || (quiz4 == "")) {
        alert("Oh Uh You did not answer any of them")
    }

    if (quiz2 == "yes") {
        document.getElementById("question2.1").style.border = "thick solid green";
        userpoints = userpoints + 1 // if the user gets it right the userpoints will add up by 1
    }
    else {
        document.getElementById("question2.1").style.border = "thick solid red";
    }

    if (quiz4 == "pro") {
        document.getElementById("question4.1").style.border = "thick solid green";
        userpoints = userpoints + 1
    }
    else {
        document.getElementById("question4.1").style.border = "thick solid red";
    }

    if (quiz1.value == "1") {
        userpoints += 1;  //what this doea means if the radio button value 1 (from html) was pressed it will add plus 1 point
    }

    if (quiz3.value == "3") {
        userpoints += 1;
    }


    if (userpoints == 4) { //If the user managed to get all 4 points it will display an alert and shows the discount box img visable
        document.getElementById("discount_size_fix").style.display = "block";
        alert("you win!")
    }

}