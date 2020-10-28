// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Variable declaration
var getlength=0;
var special="false"; //Adding initial values as false
var number="false";
var lower="false";
var upper="false";
var newpassword=[];
// Assigning values to the different Arrays
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbercase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialcase = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

function userinput() //This is a function.
{
  special=confirm("Do you want any special characters in the Password?");     // Assigning confirm values in the variables
  number= confirm("Do you want any numbers in the Password?");
  lower= confirm("Do you want any lower case characters in the Password?");
  upper= confirm("Do you want any upper case characters in the Password?");
}

 function generatePassword() //This is the function
 {
   
    getlength = prompt("What is the length of password you want?"); // getting the password length from user
    length = parseInt(getlength);   //validating the password length whether its a number or letter
   if (isNaN(getlength))
     {
       alert("Password length must be only in Numbers not in letters");
     }
  else if(getlength<8)    //checking if password length is more than 8 or not
       {
         alert("Password length should be more than 8 letters");
       } else if(getlength>128)    //checking if password length is less than 128 or not
              {
               alert("Password length can't be more than 128 letters")
              } else 
                  {
                     userinput();   //calling userinput function
                     if(special===true||number===true||lower===true||upper===true) // checking if user press ok for atleast one of the confirms
                        {
                     choicearray=[];
                     if(special==true)
                     choicearray=choicearray.concat(specialcase);      //concatinating in choicearray according to users imnput 
                     if(number==true)
                     choicearray=choicearray.concat(numbercase);
                     if(lower==true)
                     choicearray=choicearray.concat(lowercase);
                     if(upper==true)
                     choicearray=choicearray.concat(uppercase);
                     
                     for(i=0;i<getlength;i++) // for loop that runs getlength times 
                     {
                      newpassword += choicearray[Math.floor(Math.random() * (choicearray.length-1))]; //creating the random opassword by using Math.random function
                  
                      }
                    return newpassword; //returning the value of generated password
                  }
                  else{
                       alert("Password must contain at least one special character or number or uppercase letter or lower case letter");
                      }
        
                    }
                    
                 }          
 //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

              
