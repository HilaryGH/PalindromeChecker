
let inputEl=document.getElementById("text-input");
let checkBtn=document.getElementById("check-btn");
let divResult=document.getElementById("result");
let textInput=[];
  checkBtn.addEventListener("click",function (){
textInput.push(inputEl.value);
let textValue=inputEl.value.toLowerCase().replace(/\W|_+/g,'');
  let Reversed =textValue.split('').reverse().join(''); 
 if(textValue===Reversed){
divResult.textContent=`${inputEl.value} is a palindrome`;

 }else if(textValue!==Reversed){
  divResult.textContent=`${inputEl.value} is not a palindrome`;
 }
  });

