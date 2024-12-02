let userName = prompt("Hi, who are you?");

userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!`: document.getElementById('greeting').innerText = `Hello!`;

function shakeMagic8Ball(){
    
    let randomNumber = Math.floor(Math.random() * 8);
    
    let eightBall = '';
    let responseImg;
    
    let userQuestion = prompt('What is your question for the mighty 8 ball?');
    
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        responseImg = "it is certain.jpg";
        break;
      case 1:
        eightBall = 'It is decidedly so';
        responseImg = "it is decidedly so.jpg";
        break;
      case 2:
        eightBall = 'Focus and ask again';
        responseImg = "focus and ask again.png";
        break;
      case 3:
        eightBall = 'Cannot predict now';
        responseImg = "cannot predict now.png";
        break;
      case 4:
        eightBall = 'Do not count on it';
        responseImg = "dont count on it.png";
        break;
      case 5:
        eightBall = 'My sources say no';
        responseImg = "my sources say no.png";
        break;
      case 6:
        eightBall = 'Outlook not so good';
        responseImg = "outlook not so good";
        break;
      case 7:
        eightBall = 'Signs point to yes';
        responseImg = "signs point to yes good.png";
        break;
    }

console.log(eightBall)
document.getElementById('response-text').innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wondrous 8 ball has replied ${eightBall}`

document.getElementById("response-image").src = responseImg;
}
