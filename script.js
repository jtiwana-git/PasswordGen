// VARIABLES / ARRAYS
var pwdLength = [];
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
    passwordText.value = "";

  }
}


function generatePassword() {
  var password = [] ;
  for(var i = 0; i < pwdLength; i++) {
    var getRandomChar = Math.floor(Math.random() * getArr.length);
    password = password + getArr[getRandomChar];
  }
   return password;
}

// User to choose password length
function ask(){
  
  // ParasInt is to convert string into a number
    pwdLength = Number(prompt("Enter length of your password characters - Password number range - 8 to 128"));
      
    // Choosing length
  if(isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
      alert("Sorry, the length must be least 8 characters and must be no more than 128 characters");
      return false;
  }   

  // Selecting type of characters
   if (confirm("Do you want to include LOWERCASE in your password")) {
      getArr = getArr.concat(getLower);
    }
   if (confirm("Do you want to include UPPERRCASE in your password")) {
    getArr = getArr.concat(getUpper);
    }

   if (confirm("Do you want to include NUMBERS in your password")) {
    getArr = getArr.concat(getNumber);
    }

    if (confirm("Do you want to include SPECIAL CHARACTERS in your password")) {
      getArr = getArr.concat(getSpecialChar);
      }

      return true;
}
