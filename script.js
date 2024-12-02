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
        responseImg = "itiscertain.jpg";
        break;
      case 1:
        eightBall = 'It is decidedly so';
        responseImg = "itisdecidedlyso.jpg";
        break;
      case 2:
        eightBall = 'Focus and ask again';
        responseImg = "focusandaskagain.png";
        break;
      case 3:
        eightBall = 'Cannot predict now';
        responseImg = "cannotpredictnow.png";
        break;
      case 4:
        eightBall = 'Do not count on it';
        responseImg = "dontcountonit.png";
        break;
      case 5:
        eightBall = 'My sources say no';
        responseImg = "mysourcessayno.png";
        break;
      case 6:
        eightBall = 'Outlook not so good';
        responseImg = "outlooknotsogood.png";
        break;
      case 7:
        eightBall = 'Signs point to yes';
        responseImg = "signspointtoyesgood.png";
        break;
    }

console.log(eightBall)
document.getElementById('response-text').innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wondrous 8 ball has replied ${eightBall}`;

document.getElementById('response-image').src = responseImg;
}
