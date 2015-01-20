function openbox(id){

	elem = document.getElementById(id);
	console.log(id);
	
	display = getComputedStyle(elem).display;
	// data = id.getAttribute('data-toggle');

    if(display=='none'){
       document.getElementById(id).style.display='block';
    }
    	else{
       		document.getElementById(id).style.display='none';
    	}
}

