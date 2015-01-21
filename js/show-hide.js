// Find all links
var links = document.getElementsByClassName('accordionItem__link');

// Find all text blocks
var texts = document.getElementsByClassName('accordionItem__block')

// Add event on click to links. Event toggle text block
for (var i = 0; i < links.length; i++) {
	var link = links[i];
	link.onclick = toggleItem;
}

// Hide all accordion item text blocks
for ( var i = 0; i < texts.length; i++ ) {
	texts[i].className = 'js-hide accordionItem__block';
}


function toggleItem(event) {
	
	// Remove default link-click event
	event = event || window.event 
	if (event.preventDefault) {  // if method is
	event.preventDefault();
	} 
	else { // for IE < 9
		event.returnValue = false;
	}

	// Grub visible text block
	for ( var i = 0; i < texts.length; i++ ) {
		if (texts[i].className == 'accordionItem__block') {
			var visibleText = texts[i];
			console.log(visibleText);
		}	
	}

	// Hide all accordion item text blocks
	for ( var i = 0; i < texts.length; i++ ) {
		texts[i].className = 'js-hide accordionItem__block';
	}	

	// Grub toggled link dataset
	var toggledLink = this;
	console.log(toggledLink);	

	// Show text block if it was previously hidden and hide if was visible
	for ( var i = 0; i < texts.length; i++ ){
		if ( texts[i].dataset.text == toggledLink.dataset.text && texts[i].className != 'accordionItem__block') {
			texts[i].className = 'accordionItem__block';
		}
	}
}  