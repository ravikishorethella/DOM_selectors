// our main target is to come up with four different ways to select the first <p> tag present in our html code.
// we should focus on the id selectors mainly 

//======================================================================================

////  method 1  (getElementById)
//// this takes a string as an argument and returns the one element with a matching ID
//
//var tag = document.getElementById("first");

//======================================================================================

////  method 2  (getElementsByTagName)
//// this method returns a list of all elements of a given tag name

//var tags = document.getElementsByName("p")[0];

//======================================================================================

////  method 3  (getElementsByClassName)
//// this method takes a string argument and returns a list of elements that have a matching class

//var tags = document.getElementsByClassName("special")[0];

//======================================================================================

////  method 4  (querySelector)
//// returns the first element that matches a given css style selector

//// there are two ways of solving this:

//// 1: by id
//// 2: by class
//// 3. by p

//// by id
//var tag = document.querySelector("#first");
//
//// by class
//var tag = document.querySelector(".special");
//
//// by p
//var tag = document.querySelector("p"); 
//======================================================================================

////  method 5  (querySelectorAll)
//// returns a list of element that matches a given css style selector

//var tags = document.querySelectorAll("p")[0];

//======================================================================================

//There are some other ways as well. If something is adjacent to something then we can use in the following way
// in our case the first paragraph is adjacent to the h1 tag 
// or the p tag is followed by the h1 tag

//var tag = document.querySelector("h1 + p");

//======================================================================================

