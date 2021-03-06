const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.listen(process.env.PORT||6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is listening at port 6969!");
    }
});

app.get("/", (req, res) => {
    res.write("abc");
    res.end();
})

app.get('/html/question1.html', (req, res) => {
    fs.readFile('./server/question1.txt', (err, fileData) => {
        if (err) console.log(err);
        else {
            try {
                // let questions = JSON.parse(fileData);
                // let randomNum = Math.floor(Math.random() * questions.length);
                // let randomQuestion = questions[randomNum];
                let question1 = JSON.parse(fileData);
                res.send({
                    message: "success!",
                    question: question1
                    // question: randomQuestion
                });
            } catch (error) {
                console.log("ERROR", err);
            }
        }
    })

    // QuestionModel.find({}, (err, questions) => {
    //     let ranNum = Math.floor(Math.random() * questions.length);
    //     QuestionModel.findOne({}).skip(ranNum == 0 ? ranNum : ranNum - 1).exec((err, questionFound) => {
    //         if (err) console.log(err);
    //         else {
    //             res.send({
    //                 mess: "success!",
    //                 question: questionFound
    //             });
    //         }
    //     });
    // });
});

app.post('/html/checkAnswer', (req, res) => {
    const answer = {
        content: req.body.answer,
    }
    fs.readFile('./server/question1.txt', (err, fileData) => {
        if (err) console.log(err);
        else {
            try {
                let question1 = JSON.parse(fileData);
                console.log("debug", answer + " " + question1.rightAnswer);
                // if (answer===question1.rightAnswer){
                //     res.redirect('https://beatboy2603.github.io/html/rightAnswer.html?answer='+answer+'&rightAnswer='+rightAnswer);
                // }else{
                //     res.redirect('https://beatboy2603.github.io/html/wrongAnswer.html?answer='+answer+'&rightAnswer='+rightAnswer);
                // }
                if (answer.content===question1.rightAnswer){
                    res.redirect('https://beatboy2603.github.io/html/rightAnswer.html');
                }else{
                    res.redirect('https://beatboy2603.github.io/html/wrongAnswer.html');
                }
            } catch (error) {
                console.log("ERROR", err);
            }
        }
    })
});

app.post('/html', (req, res) => {
    const answer = {
        content: req.body.answer,
    }
    fs.readFile('./server/question1.txt', (err, fileData) => {
        if (err) console.log(err);
        else {
            try {
                let question1 = JSON.parse(fileData);
                res.send({
                    message: "success!",
                    question: question1.rightAnswer,
                    answer: answer
                });
            } catch (error) {
                console.log("ERROR", err);
            }
        }
    })
});