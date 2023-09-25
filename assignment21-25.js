// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.

// var a = prompt("Enter first name");
// var b = prompt("Enter last name");
// document.write(a + " " + b);


// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

// var a = prompt("Enter your favourite phone");
// document.write("My favourtie phone is: " + a + "<br>");
// document.write("Length of string: " + a.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var a = "Pakistani";
// document.write("String: " + a + "<br>");
// document.write("Index of 'n': " + a.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.

// var a = "Hello World";
// document.write("String: " + a + "<br>");
// document.write("Last index of 'l': " + a.lastIndexOf("l"));

// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.


// var a = "Pakistani";
// document.write("String: " + a + "<br>");
// document.write("Character at index 3: " + a.charAt("3"));


// 6. Repeat Q1 using string concat() method.


// var a = prompt("Enter first name ");
// var b = prompt("Enter last name");
// document.write(a.concat( b ) );


// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

// var a = "Hyderabad";
// document.write("City: " + a + "<br>");
// document.write("After replacement: " + a.replace("Hyder","Islam"))


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends.
// They play cricket and football together.”;

// var a = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + a + "<br>");
// document.write("After replacement: " + a.replace("and" , "&"))


// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var a = "472";
// document.write("Value: " + a + "<br>");
// document.write("Type: " + typeof a + "<br>")
// var b = parseInt(a);
// document.write("Value: " + b + "<br>");
// document.write("Type: " + typeof b)

// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// var a = prompt("Enter a URL", "format: www.facebook.com")
// document.write("URL: " + a + "<br>");
// document.write("Domain: " + a.replace("www.",""));


// 11. Write a program that takes user input. Convert and show the
// input in capital letters.

// var a = prompt("Enter a name");
// document.write("User input: " + a + "<br>");
// document.write("Upper case: " + a.toUpperCase());


// 12. Write a program that takes user input. Convert and show the
// input in small letters.

// var a = prompt("Enter a name");
// document.write("User input: " + a + "<br>");
// document.write("Lower case: " + a.toLowerCase());


// 13. Write a program that takes user input. Convert and show the
// input in title case.


// var names = prompt("Enter a name");
// let temp = names.slice(1);      
// let result = names[0].toUpperCase() + temp;
// document.write(result);


// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// document.write("Number: " + num + "<br>");
// document.write("Result: " + num.toString().replace(".",""));


// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?
//  x = a + b

// var a = "3";
// var b = "3";
// var c = a + b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("a + b is " + c);


// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?
//  y = a - b;

// var a = 3;
// var b = 3;
// var c = a - b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("a - b is " + c);


// 18. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:


// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.


// name1 = prompt("Enter a string");
// name2 = prompt("Enter another string");

// name1 = name1.toLowerCase()
// name2 = name2.toLowerCase()

// var namesAreEqual = name1===name2;
// console.log(namesAreEqual)

// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// 21. Write a program to convert the following string to an array
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser.


// var b = "University Of Karachi";
// b = b.split("");
// for ( var i = 0; i < b.length; i++)
// document.write(b[i] + "<br>")


// 22. Write a program to display the last character of a user input.


// var a = prompt("Enter anything")
// document.write("Last character of input: " +  a[a.length-1  ]);


// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.


// var a = "The quick brown fox jumps over the lazy dog."
// let num = 0;
// var b = a.toUpperCase().split('THE')
// document.write("Text: " + a + "<br>");
// document.write("There are " + parseInt((b.length) - 1 )+ " occurence(s) of the word `the` ")


