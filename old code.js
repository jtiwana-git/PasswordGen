var randomFunc = {

    lower: getRandomLower,
    upper: getRandomUpper,
    nums: getRandomNumber,
    char: getRandomSpecialChar,
    }
  
  
  
  // Gen random Lowercase
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Lowercase from Charcode
  }
  
  //Gen random Uppercase
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Uppercase from Charcode
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // Number from Charcode
  }
  
  function getRandomSpecialChar() {
    const SpecialChars = "¬!\"£$%^&*()_+[];'#,./\|{}:@~<>?|/";
    return SpecialChars[Math.floor(Math.random()* SpecialChars.length)]; // Special characters from Charcode
  }
  
  console.log(getRandomUpper());
  
  
  // User choice of length of characters
  
  function userChoosePwdLength() {
    var accepted = false;
      do {
      var lengthofpwd = prompt("Enter length of your password characters");
      var inputted = {
      lengthofpwd: length,
    }
  
    if(length < 8||length > 128) 
      alert("Sorry, the length must be least 8 characters and no  no more than 128 characters");
     else 
      accepted = true;
    // } while (length < 8||length > 128);
    // return length;
    // }
  
  
  // var input = "";
  
  
  
  // if (lengthofChar < 8){
    
  // }
  // else if (lengthofChar > 128){
  //   alert("Sorry, the length must be");
  // } else {
  
  //   alert("Length of Password been accepted");
  
  // }
  
  //   console.log("User input value: ", lengthofChar);
  //   console.log("Temp password: ", getRandomLower(),getRandomUpper(),getRandomNumber(),getRandomSpecialChar());
  
  
  // var lower = confirm ("Do you want to include LOWERCASE in your password");
  // var upper = confirm ("Do you want to include UPPERCASE in your password");
  // var nums = confirm ("Do you want to include NUMBERS in your password");
  // var char = confirm ("Do you want to include SPECIAL characters in your password");
  // var choiceAll = lower + upper + nums + char;
    
  
  //   if (!lower, !upper, !nums, !char){
  //     alert("You must choose one of the CHARACTERS type");
  //   }
  //   else if (lower) {
  //     confirm ("Do you want to include LOWERCASE characters in your password");
  //   }
  //   else if (lower === false) {
  //     alert("No LOWERCASE has been chosen");
  //   }
  //   else if (upper) {
  //   confirm ("Do you want to include UPPERCASE characters in your password");
  //   } 
  //   else if (upper === false) {
  //     alert("No UPPERCASE has been chosen");
  //   }
  // else if (nums){
  //     confirm("Do you want to include NUMBERS characters in your password");
  //   } 
  //   else if (nums === false){
  //     alert("No NUMBERS has been chosen");
  //   } 
  // else if (char){
  //     confirm("Do you want to include SPECIAL characters in your password");
  //   } 
  //   else if (char === false) {
  //     alert("No SPECIAL characters has been chosen");
  //   }
  
  //   else if (lower) {
  //     confirm ("Do you want to include LOWERCASE characters in your password");
  //   }
  //   else if (lower === false) {
  //     alert("No LOWERCASE has been chosen");
  //   }
  //   else if (upper) {
  //   confirm ("Do you want to include UPPERCASE characters in your password");
  //   } 
  //   else if (upper === false) {
  //     alert("No UPPERCASE has been chosen");
  //   }
  //   else if (nums){
  //     confirm("Do you want to include NUMBERS characters in your password");
  //   } 
  //   else if (nums === false){
  //     alert("No NUMBERS has been chosen");
  //   } 
  //   else if (char){
  //     confirm("Do you want to include SPECIAL characters in your password");
  //   } 
  //   else if (char === false) {
  //     alert("No SPECIAL characters has been chosen");
  //   }
  
  //   else {
  //     alert("Characters types has been selected");
  //   }
  
  //   console.log("How many selected: ", choiceAll);
  //   console.log("lower - true to false ", lower);
  //   console.log("upper - true to false ",upper);
  //   console.log("Numbers - true to false ",nums);
  //   console.log("Special Chars - true to false ",char);
  
    // Generate password
   
  
  
  
  
  
  
   //function Chars 8 to 120 **DONE
    //function confirm whether or not to include *lowercase, *uppercase, *numeric, and/or special characters (yes/no) 
    //function if yes then 
    //function at least one char type is needed
    //generate the password - by alert or  written to the page