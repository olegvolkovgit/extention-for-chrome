window.onload = function() {  
			var storage = window.localStorage;  // ----------------caching path

				storage.setItem('Cat','Dog');	//======
				storage.setItem('Foo','bar');	//===== local sorage filling
				storage.setItem('Helo','hello');//===== 
				storage.setItem('heldp','help');//======

		var echo = function (input) {//	------------------------------ operational function for
			var elem = input.target; //------------------------------- HTML 5`s contentEditable elements
			if (elem.isContentEditable == true) { //------------------ checks on contentedit ability
	switch(elem.innerHTML){// ---------------------------------------- switch construction for needed words
		case 'Cat': elem.innerHTML= storage.getItem('Cat'); break;
		case 'Foo': elem.innerHTML= storage.getItem('Foo'); break;
		case 'Helo': elem.innerHTML= storage.getItem('Helo'); break;
		case 'heldp': elem.innerHTML= storage.getItem('heldp'); break;
				}
		}
	}
	document.addEventListener('input',echo); // event listener for all contenteditable elements of document

		var inEcho = function (change) {// --------------------------- operational function for input`s event listener
			var wordAim = change.target.value;//-------------------- assign editable input element				
			if (wordAim.includes(" ")) {// ------------------------- space checking
				var changedWord = wordAim.replace(/Cat/g,'Dog') 
										 .replace(/Foo/g,'bar')     
										 .replace(/Helo/g,'hello')//------ Replacing of included woords
										 .replace(/heldp/g,'help')
						    	  change.target.value = changedWord; //--- set replaced word instead
										}
									  }
	document.addEventListener('input',inEcho); // event listener for all 'input' elements of document
}
