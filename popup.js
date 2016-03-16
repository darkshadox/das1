// @include     *

window.onload = function(){
  // your code here
  var word = "bitch";//Transform to string so that search can work
  var re = new RegExp(word,'g');
  //var test = "This is a string.";
  var temp1 = document.body;
  var text = typeof temp1.textContent == 'string'? temp1.textContent : temp1.innerText;
  var lowertext = text.toLowerCase();
  var count = (lowertext.match(re) || []).length;
  //It only gets certain words, it depends in the content of a link and/or the body text.
  alert("Number of words: "+count);
};