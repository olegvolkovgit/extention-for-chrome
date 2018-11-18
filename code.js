window.onload = function() {  
/*
this block (7-24 row) is searching for any content editable elements 
and change needed words from local storage in case of its detection
with switch construction
*/ 
 var storage = window.localStorage;  

  storage.setItem('Cat', 'Dog');
  storage.setItem('Foo', 'bar');	
  storage.setItem('Helo', 'hello');
  storage.setItem('heldp', 'help');

 var echo = function (input) {
  var elem = input.target; 

  if (elem.isContentEditable == true) {
   switch( elem.innerHTML ) {
	case 'Cat': elem.innerHTML = storage.getItem('Cat'); break;
	case 'Foo': elem.innerHTML = storage.getItem('Foo'); break;
	case 'Helo': elem.innerHTML = storage.getItem('Helo'); break;
	case 'heldp': elem.innerHTML = storage.getItem('heldp'); break;
	  }
	 }
	
	}
 document.addEventListener('input', echo); 
/*
this block (32-44) listen to changes in all page inputs and change user`s words
to needed examples after entering space button
*/
 var inEcho = function(change) {
  var wordAim = change.target.value;
 
  if (wordAim.includes(" ")) {
  var changedWord = wordAim.replace(/Cat/g, 'Dog') 
						   .replace(/Foo/g, 'bar')     
						   .replace(/Helo/g, 'hello')
						   .replace(/heldp/g, 'help')
  change.target.value = changedWord;
	}
 
   }
 document.addEventListener('input', inEcho);
}