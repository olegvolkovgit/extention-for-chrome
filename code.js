alert("when page will be loaded - extention will be avialable");
window.onload = function() {    				

		var echo = function (change) {// --------------------------- operational function for event listener
			var wordAim = change.target.value;//-------------------- assign editable input				
			if (wordAim.includes(" ")) {// ------------------------- waits for space
				var changedWord = wordAim.replace(/Cat/g,'Dog') 
										 .replace(/Foo/g,'bar')     
										 .replace(/Helo/g,'hello')//------ Replacing of included woords
										 .replace(/heldp/g,'help')
						    	  change.target.value = changedWord; //--- set replaced word instead
										}
									  }

			document.addEventListener('input',echo); // event listener for all 'input' elements of document
}
// Next

// Implement similar for contenteditable elements;

// https://habr.com/post/126877/