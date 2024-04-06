const captcha = document.getElementById('captcha');
const captchaInput = document.getElementById('captcha-input');
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');
const message = document.querySelector('.message');

const alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',Sure, here's a simple example of a CAPTCHA code using HTML, CSS, and JavaScript:

HTML:
```html
<div id="captchaContainer">
  <p id="captchaCode"></p>
  <input type="text" id="userInput" placeholder="Enter CAPTCHA">
  <button onclick="checkCaptcha()">Submit</button>
</div>
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaCode = '';
  for (let i = 0; i < 6; i++) {
    captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById('captchaCode').innerText = captchaCode;
}

function checkCaptcha() {
  const userInput = document.getElementById('userInput').value;
  const captchaCode = document.getElementById('captchaCode').innerText;
  if (userInput === captchaCode) {
    alert('CAPTCHA verified successfully!');
  } else {
    alert('Incorrect CAPTCHA. Please try again.');
  }
}

generateCaptcha();
