const fs = require('fs');
const os = require('os');

var user = os.userInfo();
fs.appendFile('greetings.txt', 'hello nice to meet you here', (err) => {
    console.log(err);
});
fs.appendFile('greetings.txt', `hello ${user.username} !`, (err) => {
    console.log(err);
});