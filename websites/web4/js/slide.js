
var myIndex = 0;
slide();
var scroll = 0;

function slide() {

	var i;	
    var x = document.getElementsByClassName("pics");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}  
	
    x[myIndex-1].style.display = "block";
	

    setTimeout(slide, 10000); // Change image every 2 seconds
	
}

