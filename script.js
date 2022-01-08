// VARIABLES / ARRAYS
var pwdLength = Number();
var getLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var getUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var getNumber = ["0","1","2","3","4","5","6","7","8","9",];
var getSpecialChar = ['"', "¬","!","£","$","=","%","^","&","*","(",")","_","+","[","]",";","'","#",",",".","/","\","|"",];
var getArr = []; 

// TEST
console.log(getLower);
console.log(getUpper);
console.log(getNumber);
console.log(getSpecialChar);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var answer = ask();
  var passwordText = document.querySelector("#password");

  if(answer) {
  var password = generatePassword();
  passwordText.value = password;
  }
  else
  passwordText.value = "";

}

function generatePassword() {
  var password = "";
  for(var i = 0; i < pwdLength; i++) {
    var randomPassword = Math.floor(Math.random() * getArr.length);
    password = password + getArr[randomPassword];
  }
  return password;
}



// User to choose password length
function ask(){
  
  getArr = [];  

   // Choosing length
    pwdLength = prompt("Enter the length of your password");
  
    if(isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
      alert("Sorry, the length MUST be at least 8 character the length MUST be no MORE than 128 characters, TRY AGAIN");  
      return false;
    }
       // user to choose the type of characters  
    if (confirm("Do you want to include LOWERCASE in your password")){
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
    return true

}







  
