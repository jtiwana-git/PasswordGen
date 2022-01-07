// VARIABLES / ARRAYS
var pwdLength = Number();
var getLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var getUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var getNumber = ["0","1","2","3","4","5","6","7","8","9",];
var getSpecialChar = ['"', "¬","!","£","$","=","%","^","&","*","(",")","_","+","[","]",";","'","#",",",".","/","\","|"",];
var getArr = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var getChar = ask();
  var passwordText = document.querySelector("#password");
  
  if(getChar) {    
  var pwd = generatePassword()
  passwordText = pwd;
       }
  else {
    passwordText.value = [];

  }
}


function generatePassword() {
  var password = [];
  for(var i = 0; i < pwdLength; i < 128) {
    var getRandomChar = Math.floor(Math.random() * getArr.length);
    password = password + getArr[getRandomChar];
  }
   return password;
}

// User to choose password length
function ask(){
  
   // Choosing length
    pwdLength = prompt("Enter the length of your password");
  
    if(isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
      alert("Sorry, the length MUST be at least 8 character the length MUST be no MORE than 128 characters, TRY AGAIN");  
      }  
      else 
        alert("Password accepted!");  

  // Selecting type of characters
  getLower = confirm("Do you want to include LOWERCASE in your password"); 
  getUpper = confirm("Do you want to include UPPERRCASE in your password");
  getNumber = confirm("Do you want to include NUMBERS in your password");
  getSpecialChar = confirm("Do you want to include SPECIAL CHARACTERS in your password"); 
       
  
  if (getLower === true) {
    getArr = getArr.concat(getLower);
    }
  else if (getUpper === true) {
    getArr = getArr.concat(getUpper);
    }
  else if (getNumber === true) {
    getArr = getArr.concat(getNumber);
    }
  else if (getSpecialChar === true) { 
    getArr = getArr.concat(getSpecialChar);
  }
  else {
  alert("You need select at LEAST one type of characters, TRY AGAIN");
  }
}