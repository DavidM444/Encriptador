//* Select elments from html
const textEncrypt = document.querySelector("#t1");
const textResul = document.querySelector("#t2");
const encryptBtn = document.querySelector("#button1");
const decryptBtn = document.querySelector("#button2"); 
const copyBtn = document.querySelector("#button3"); 

const encryptMessage = txt => {
  //* Function encrypt
    switch (txt) {
        case 'a':
          return 'ia';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return txt;
    }
};

const encriptar = txt => {
    const messageEncrypt = txt.replace(/a|e|i|o|u/g, encryptMessage); 
    return messageEncrypt;
};

const decryptMessage = txt => {
    switch (txt) {
        case 'ia':
        return 'a';
        case 'enter':
        return 'e';
        case 'imes':
        return 'i';
        case 'ober':
        return 'o';
        case 'ufat':
        return 'u';
        default:
        return txt;
    }
};

const desencriptar = txt => {
    const messageDecrypt = txt.replace(/ia|enter|imes|ober|ufat/g, decryptMessage);
    return messageDecrypt;
};

encryptBtn.addEventListener("click", event => {
    event.preventDefault();
    const txt = textEncrypt.value;
    console.log(txt)
    textResul.value = ""; 
    const messageSafe = encriptar(txt);
    console.log(messageSafe)
    textResul.value = messageSafe;
});

decryptBtn.addEventListener("click", event => {
    event.preventDefault();
    const txt = textEncrypt.value;
    textResul.value = "";
    const messageSafe = desencriptar(txt);
    console.log(txt,messageSafe)
    textResul.value = messageSafe;
});

copyBtn.addEventListener("click", event => {
    event.preventDefault();
    textResul.select();
    navigator.clipboard.writeText(textResul.value);
});

clear.addEventListener("click", event =>{
    event.preventDefault();
    textEncrypt.value = "",
    textResul.value = ""
})
var myImage = document.getElementById("logo");

setInterval(function () {
  myImage.style.animation = "rotation 4s infinite linear";
}, 40000);