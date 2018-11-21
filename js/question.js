$(document).ready(function () {
    $.ajax({
        // url: 'http://localhost:6969/question',
        url: 'https://beatboy2603.herokuapp.com/html/question1.html',
        method: 'GET',
        success: function (data) {
            $('#demo').text(data);
            console.log("success!", data);
        },
        error: function () {
            console.log("ERROR");
        }
    });
});

var countDownDate = new Date().getTime() + 20000;

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = seconds + "s ";

    $('#div-countdown p').text(seconds + "s ");

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $('#div-countdown p').text("Expired");
    }
}, 1000);