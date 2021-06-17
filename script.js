const btn = document.querySelector(".btn");
const btnTxt = document.querySelector(".btn span");
const loader = document.querySelector('container-loader');

splitTxt = new SplitText(btnTxt, { type: "words, chars"});
chars = split