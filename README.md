<<<<<<< HEAD

<h1> #Password-Generator</h1>

<h1>Description</h1>
The intention of this project is to provide a fast and secure way to generate one time password . This project contains an index.html file, script.js file, and style.css file. Pssword generator code is in javascript.<br>

<h1>Goals for Project</h1>

The project has following acceptance criteria:
AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security

<h1>The Acceptance Criteria</h1>
<h2>The Acceptance Criteria are as follows:</h2>

WHEN I click the button to generate a password ,THEN I get prompt of length of the password.

WHEN prompted for the length of the password  THEN I choose a length of at least 8 characters and no more than 128 characters
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria THEN I select which criteria to include in the password

WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered THEN a password is generated that matches the selected criteria

WHEN the password is generated THEN the password is either displayed in an alert or written to the page


<h1>Satisfying the Acceptance Criteria</h1>

<p>To satisfy the first criteria, made a prompt that will ask for the length.</p>

<p>To satisfy the Next criteria, a series of prompts are used to determine what kinds of characters the user wants to include as well as how many characters in the password are desired.</p>

<p>To satisfy the Next criteria, the character prompts are checked to see if all are false. If so, the questions are asked again. The password length must be in numbers or must be more than 8 characters or must be less than 128 characters.</p>

<p>To satisfy the Next criteria, four character arrays are created with uppercase letters, lowercase letters, special characters, and numbers. Arrays to be included in password generation are pushed into an array. A loop is run for the length of the password, Array is created to concatenate the values of the characters user want.The character is then concatenated into a password string variable.</p>

<p>To satisfy the Next criteria, the script modifies the HTML page to display the password after the password has been generated.</p>


<h1>Issues</h1>
This Assignment doesnt have any issues.

<h1>Future Developments</h1>

Checkboxes could be used to select what kinds of values should be included in the password generation and a text area box could be used for password display. Approrpriate form aria attributes could also be used to improve the accessibility of the page.

A second button could also be added to copy the contents of the password into the clipboard.
=======
# Password_generator
>>>>>>> 518c4c3ae952800d836f6b39381c1e42894f93a4
