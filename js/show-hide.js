function openbox(id){

	elem = document.getElementById(id);
    display = getComputedStyle(elem).display;

    if(display=='none'){
       document.getElementById(id).style.display='block';
    }
    	else{
       		document.getElementById(id).style.display='none';
    	}
}

 