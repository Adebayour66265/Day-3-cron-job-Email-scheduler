const express = require('express');
const app = express();
const scheduler = require('node-cron');

const { transporter, options } = require("./services/email");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


scheduler.schedule("* * * * *", () => {
    console.log('sending Email');
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log('Sent Email to ', info);
    })
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log('App is Listing to PORT');
})