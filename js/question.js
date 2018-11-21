$(document).ready(function () {
    $.ajax({
        // url: 'http://localhost:6969/question',
        url: 'https://beatboy2603.github.io/html/question1.html',
        method: 'GET',
        success: function (data) {
            $('#demo').text(data.question);
            console.log("success!", data);
        },
        error: function () {
            console.log("ERROR");
        }
    });
});