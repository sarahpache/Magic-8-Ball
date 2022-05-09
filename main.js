<script>
    var userName = "";
    let userQuestion = "";
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";


if (userName != "") {
    console.log (`Hello, ${userName}!`);
} 
else {
    console.log (`Hello!`);
}
console.log (`${userName}, you asked: ${userQuestion}`);
if (randomNumber === 1) {
    eightBall = 'It is certain';
} elseif (randomNumber = 2) {
    eightBall = 'It is decidedly so';
} elseif (randomNumber === 3) {
    eightBall = 'Reply hazy try again';
} elseif (randomNumber === 4) {
    eightBall = 'Cannot predict now';
} elseif (randomNumber === 5) { 
 eightBall = 'Do not count on it'; 
} elseif (randomNumber === 6) {
     eightBall = 'My sources say no';
} elseif (randomNumber === 7) { 
 eightBall = 'Outlook not so good';
} elseif (randomNumber === 8) {
 eightBall = 'Signs point to yes';
} elseif (randomNumber = 0) {
eightBall = 'Try again!';
 } else  {
    console.log ('Something is wrong');
}
console.log (`eightball answer = ${eightBall}`);
console.log (`Random number is ${randomNumber}`);
